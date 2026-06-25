/* =========================
   MENU
========================= */
const menuBtn = document.querySelector(".menu-btn");
const appDropdown = document.querySelector(".app-dropdown");

if(menuBtn && appDropdown){
    menuBtn.addEventListener("click", function(e){
        e.stopPropagation();
        appDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function(e){
        if(!appDropdown.contains(e.target) && e.target !== menuBtn){
            appDropdown.classList.remove("show");
        }
    });
}

/* =========================
   ELEMENTS
========================= */
const duelMatchTitle = document.getElementById("duelMatchTitle");
const duelMatchSubtitle = document.getElementById("duelMatchSubtitle");
const roomCodeText = document.getElementById("roomCodeText");
const animeModeText = document.getElementById("animeModeText");
const hostNameText = document.getElementById("hostNameText");
const guestNameText = document.getElementById("guestNameText");

const unsupportedBox = document.getElementById("unsupportedBox");
const duelGameBox = document.getElementById("duelGameBox");

const youNameText = document.getElementById("youNameText");
const opponentNameText = document.getElementById("opponentNameText");
const guessInput = document.getElementById("guessInput");
const submitGuessBtn = document.getElementById("submitGuessBtn");
const suggestions = document.getElementById("suggestions");
const guessTableBody = document.getElementById("guessTableBody");
const guessTableHeadRow = document.getElementById("guessTableHeadRow");
const guessCountText = document.getElementById("guessCountText");
const matchStatusText = document.getElementById("matchStatusText");
const giveUpBtn = document.getElementById("giveUpBtn");

const duelResultPopup = document.getElementById("duelResultPopup");
const duelResultTitle = document.getElementById("duelResultTitle");
const duelResultText = document.getElementById("duelResultText");
const duelBoardAnimeTitle = document.getElementById("duelBoardAnimeTitle");
const duelBoardAnimeNote = document.getElementById("duelBoardAnimeNote");

/* =========================
   STATE
========================= */
let currentUser = null;
let currentMatch = null;
let currentUserProfile = null;
let opponentProfile = null;
let roomChannel = null;
let duelSecretCharacter = null;
let duelGuessCount = 0;
let duelFinished = false;
let duelFinishPoll = null;

/* =========================
   MAPS
========================= */
const animeDisplayMap = {
    onepiece: "One Piece",
    naruto: "Naruto",
    bleach: "Bleach",
    demonslayer: "Demon Slayer",
    dbz: "Dragon Ball Z",
    aot: "Attack on Titan"
};

const queryParams = new URLSearchParams(window.location.search);
const matchId = queryParams.get("match");

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", async function(){
    if(!matchId){
        alert("Match not found.");
        window.location.href = "duel.html";
        return;
    }

    const { data, error } = await supabaseClient.auth.getSession();

    if(error || !data.session){
        window.location.replace("login.html");
        return;
    }

    currentUser = data.session.user;

    await loadMatch();
    setupGuessEvents();
});

/* =========================
   LOAD MATCH
========================= */
async function loadMatch(){
    const { data: match, error } = await supabaseClient
        .from("matches")
        .select("*")
        .eq("id", matchId)
        .maybeSingle();

    if(error || !match){
        alert("Unable to load match.");
        window.location.href = "duel.html";
        return;
    }

    currentMatch = match;

    const ids = [match.host_id];
    if(match.guest_id) ids.push(match.guest_id);

    const { data: profiles, error: profileError } = await supabaseClient
        .from("profiles")
        .select("id, username")
        .in("id", ids);

    if(profileError){
        console.error("Failed to load profiles:", profileError.message);
    }

    currentUserProfile = profiles?.find(p => p.id === currentUser.id) || null;

    if(match.host_id === currentUser.id){
        opponentProfile = profiles?.find(p => p.id === match.guest_id) || null;
    }else{
        opponentProfile = profiles?.find(p => p.id === match.host_id) || null;
    }

    renderMatchHeader(match, profiles || []);
    subscribeToMatch(match.id);
    startDuelFinishPoll(match.id);

    if(match.status === "finished"){
        duelFinished = true;
        showResultFromFinishedMatch(match, profiles || []);
        return;
    }

    unsupportedBox.classList.add("hidden");
    duelGameBox.classList.remove("hidden");

    setupAnimeTable(match.anime_mode);
    setupAnimeBoardText(match.anime_mode);
    await ensureSecretCharacterForAnime();
}
function setupAnimeBoardText(animeMode){
    const animeName = animeDisplayMap[animeMode] || "Anime";

    if(duelBoardAnimeTitle){
        duelBoardAnimeTitle.innerText = `${animeName} Duel`;
    }

    if(duelBoardAnimeNote){
        duelBoardAnimeNote.innerText =
            `Guess the secret ${animeName} character before your opponent.`;
    }

    if(guessInput){
        guessInput.placeholder = `Type a ${animeName} character name...`;
    }
}
/* =========================
   HEADER RENDER
========================= */
function renderMatchHeader(match, profiles){
    const host = profiles.find(p => p.id === match.host_id);
    const guest = profiles.find(p => p.id === match.guest_id);

    const hostName = host?.username || "Host";
    const guestName = guest?.username || "Guest";

    duelMatchTitle.innerText = `${animeDisplayMap[match.anime_mode] || "Anime"} Duel`;
    duelMatchSubtitle.innerText = "First player to guess the secret character wins.";

    roomCodeText.innerText = match.room_code || "-----";
    animeModeText.innerText = animeDisplayMap[match.anime_mode] || match.anime_mode || "-";
    hostNameText.innerText = hostName;
    guestNameText.innerText = guestName;

    if(currentUser.id === match.host_id){
        youNameText.innerText = hostName;
        opponentNameText.innerText = guestName;
    }else{
        youNameText.innerText = guestName;
        opponentNameText.innerText = hostName;
    }

    matchStatusText.innerText = match.status ? match.status.toUpperCase() : "LIVE";
}

/* =========================
   REALTIME SUBSCRIBE
========================= */
function subscribeToMatch(matchId){
    if(roomChannel){
        supabaseClient.removeChannel(roomChannel);
        roomChannel = null;
    }

    roomChannel = supabaseClient
        .channel(`duel-match-${matchId}`)
        .on(
            "postgres_changes",
            {
                event: "UPDATE",
                schema: "public",
                table: "matches",
                filter: `id=eq.${matchId}`
            },
            async payload => {
                const updated = payload.new;
                currentMatch = updated;

                if(matchStatusText){
                    matchStatusText.innerText = updated.status ? updated.status.toUpperCase() : "LIVE";
                }

                if(updated.secret_character && !duelSecretCharacter){
                    duelSecretCharacter = findCharacterByName(
                        updated.anime_mode,
                        updated.secret_character
                    );
                }

                if(updated.status === "finished" && !duelFinished){
                    duelFinished = true;
                    await showLiveResult(updated);
                }
            }
        )
        .subscribe();
}

/* =========================
   FINISH POLL FALLBACK
========================= */
function startDuelFinishPoll(matchId){
    if(duelFinishPoll){
        clearInterval(duelFinishPoll);
        duelFinishPoll = null;
    }

    duelFinishPoll = setInterval(async () => {
        try{
            if(duelFinished){
                clearInterval(duelFinishPoll);
                duelFinishPoll = null;
                return;
            }

            const { data: latestMatch, error } = await supabaseClient
                .from("matches")
                .select("*")
                .eq("id", matchId)
                .single();

            if(error || !latestMatch) return;

            currentMatch = latestMatch;

            if(matchStatusText){
                matchStatusText.innerText =
                    latestMatch.status ? latestMatch.status.toUpperCase() : "LIVE";
            }

            if(latestMatch.status === "finished" && !duelFinished){
                duelFinished = true;

                clearInterval(duelFinishPoll);
                duelFinishPoll = null;

                await showLiveResult(latestMatch);
            }
        }catch(err){
            console.error("duel finish poll error:", err);
        }
    }, 1000);
}

/* =========================
   DATASET HELPERS
========================= */
function getAnimeDataset(animeMode){
    switch(animeMode){
        case "onepiece":
            return Array.isArray(onepieceCharacters) ? onepieceCharacters : [];
        case "naruto":
            return Array.isArray(narutoCharacters) ? narutoCharacters : [];
        case "bleach":
            return Array.isArray(bleachCharacters) ? bleachCharacters : [];
        case "demonslayer":
            return Array.isArray(demonslayerCharacters) ? demonslayerCharacters : [];
        case "dbz":
            return Array.isArray(dbzCharacters) ? dbzCharacters : [];
        case "aot":
            return Array.isArray(aotCharacters) ? aotCharacters : [];
        default:
            return [];
    }
}

function getCharacterDisplayName(character, animeMode){
    if(!character) return "";
    if(animeMode === "aot" || animeMode === "dbz"){
        return character.character || "";
    }
    return character.name || "";
}

function findCharacterByName(animeMode, name){
    const dataset = getAnimeDataset(animeMode);
    const normalizedTarget = String(name || "").trim().toLowerCase();

    return dataset.find(ch => {
        const chName = getCharacterDisplayName(ch, animeMode);
        return String(chName).trim().toLowerCase() === normalizedTarget;
    }) || null;
}

/* =========================
   SECRET CHARACTER
========================= */
async function ensureSecretCharacterForAnime(){
    if(currentMatch.secret_character){
        duelSecretCharacter = findCharacterByName(
            currentMatch.anime_mode,
            currentMatch.secret_character
        );
        return;
    }

    if(currentUser.id !== currentMatch.host_id){
        duelMatchSubtitle.innerText = "Waiting for duel setup...";

        const waitForSecret = setInterval(async () => {
            const { data: refreshed, error } = await supabaseClient
                .from("matches")
                .select("secret_character")
                .eq("id", currentMatch.id)
                .maybeSingle();

            if(error){
                console.error("Error checking secret character:", error.message);
                return;
            }

            if(refreshed?.secret_character){
                clearInterval(waitForSecret);
                duelSecretCharacter = findCharacterByName(
                    currentMatch.anime_mode,
                    refreshed.secret_character
                );
                duelMatchSubtitle.innerText = "First player to guess the secret character wins.";
            }
        }, 1000);

        return;
    }

    const dataset = getAnimeDataset(currentMatch.anime_mode);

    if(!Array.isArray(dataset) || dataset.length === 0){
        alert("Character data not found for this anime.");
        return;
    }

    const randomCharacter = dataset[Math.floor(Math.random() * dataset.length)];
    const secretName = getCharacterDisplayName(randomCharacter, currentMatch.anime_mode);

    const { error } = await supabaseClient
        .from("matches")
        .update({
            secret_character: secretName
        })
        .eq("id", currentMatch.id);

    if(error){
        console.error("Failed to save secret character:", error.message);
        alert("Failed to initialize duel secret character.");
        return;
    }

    duelSecretCharacter = randomCharacter;
}

/* =========================
   TABLE HEADERS
========================= */
function setupAnimeTable(animeMode){
    guessTableHeadRow.innerHTML = "";

    const headers = getHeadersForAnime(animeMode);

    headers.forEach(label => {
        const th = document.createElement("th");
        th.innerText = label;
        guessTableHeadRow.appendChild(th);
    });
}

function getHeadersForAnime(animeMode){
    switch(animeMode){
        case "onepiece":
            return [
                "Character",
                "Gender",
                "Affiliation",
                "Devil Fruit",
                "Haki",
                "Bounty",
                "Height",
                "Origin",
                "First Arc"
            ];

        case "naruto":
            return [
                "Character",
                "Gender",
                "Affiliations",
                "Clan",
                "Jutsu Types",
                "Kekkei Genkai",
                "Nature Types",
                "Attributes",
                "Debut Arc"
            ];

        case "bleach":
            return [
                "Character",
                "Gender",
                "Race",
                "Age",
                "Height",
                "Hair Color",
                "Location",
                "First Arc"
            ];

        case "demonslayer":
            return [
                "Character",
                "Gender",
                "Race",
                "Age",
                "Fought",
                "Style",
                "Affiliation",
                "First Arc"
            ];

        case "dbz":
            return [
                "Character",
                "Gender",
                "Hair",
                "Origin",
                "Race",
                "Episode",
                "Saga",
                "Series"
            ];

        case "aot":
            return [
                "Character",
                "Gender",
                "Arc",
                "Regiment",
                "Species",
                "Height",
                "Status"
            ];

        default:
            return ["Character"];
    }
}

/* =========================
   GUESS EVENTS
========================= */
function setupGuessEvents(){
    if(guessInput){
        guessInput.addEventListener("input", handleSuggestions);

        guessInput.addEventListener("keydown", function(e){
            if(e.key === "Enter"){
                e.preventDefault();
                submitDuelGuess();
            }
        });
    }

    if(submitGuessBtn){
        submitGuessBtn.addEventListener("click", function(){
            submitDuelGuess();
        });
    }
}
if(giveUpBtn){
    giveUpBtn.addEventListener("click", function(){
        giveUpMatch();
    });
}
/* =========================
   SUGGESTIONS
========================= */
function handleSuggestions(){
    if(!currentMatch || !guessInput || !suggestions) return;

    const animeMode = currentMatch.anime_mode;
    const value = guessInput.value.trim().toLowerCase();

    suggestions.innerHTML = "";
    suggestions.style.display = "none";

    if(!value) return;

    const dataset = getAnimeDataset(animeMode);
    console.log("DUEL animeMode:", animeMode);
    console.log("DUEL dataset length:", dataset.length);
    console.log("DUEL typed value:", value);

    if(!Array.isArray(dataset) || dataset.length === 0) return;

    const matched = dataset.filter(ch => {
        const displayName = getCharacterDisplayName(ch, animeMode);
        return displayName && displayName.toLowerCase().includes(value);
    }).slice(0, 8);

    console.log("DUEL matched names:", matched.map(ch => getCharacterDisplayName(ch, animeMode)));

    if(matched.length === 0) return;

    matched.forEach(character => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.innerText = getCharacterDisplayName(character, animeMode);

        div.addEventListener("click", function(){
            guessInput.value = getCharacterDisplayName(character, animeMode);
            suggestions.innerHTML = "";
            suggestions.style.display = "none";
        });

        suggestions.appendChild(div);
    });

    suggestions.style.display = "block";
}

/* =========================
   SUBMIT GUESS
========================= */
async function submitDuelGuess(){
    if(duelFinished) return;
    if(!currentMatch) return;
    if(currentMatch.status !== "live") return;

    if(!duelSecretCharacter){
        alert("Secret character is still loading. Try again in a second.");
        return;
    }

    const rawGuess = guessInput.value.trim();
    if(rawGuess === "") return;

    const guessedCharacter = findCharacterByName(currentMatch.anime_mode, rawGuess);

    if(!guessedCharacter){
        alert("Character not found in this anime list.");
        return;
    }

    const guessedName = getCharacterDisplayName(guessedCharacter, currentMatch.anime_mode);

    if(hasAlreadyGuessed(guessedName)){
        guessInput.value = "";
        suggestions.innerHTML = "";
        return;
    }

    duelGuessCount++;
    guessCountText.innerText = duelGuessCount;

    renderGuessRowForAnime(currentMatch.anime_mode, guessedCharacter, duelSecretCharacter);

    guessInput.value = "";
suggestions.innerHTML = "";
suggestions.style.display = "none";
    if(
        guessedName.toLowerCase() ===
        getCharacterDisplayName(duelSecretCharacter, currentMatch.anime_mode).toLowerCase()
    ){
        await finishMatchAsWinner();
    }
}

/* =========================
   DUPLICATE GUESS CHECK
========================= */
function hasAlreadyGuessed(characterName){
    const rows = guessTableBody.querySelectorAll("tr");

    for(const row of rows){
        const firstCell = row.querySelector("td");
        if(firstCell && firstCell.innerText.toLowerCase() === characterName.toLowerCase()){
            return true;
        }
    }

    return false;
}

/* =========================
   FINISH MATCH
========================= */
async function finishMatchAsWinner(){
    if(duelFinished) return;

    const winnerName =
        currentUserProfile?.username ||
        currentUser.email?.split("@")[0] ||
        "Player";

    const finishPayload = {
        status: "finished",
        winner_id: currentUser.id,
        winner_name: winnerName,
        finished_at: new Date().toISOString()
    };

    const { error: updateError } = await supabaseClient
        .from("matches")
        .update(finishPayload)
        .eq("id", currentMatch.id)
        .eq("status", "live");

    if(updateError){
        console.error("Failed to finish duel:", updateError.message);
        alert("Failed to finish duel: " + updateError.message);
        return;
    }

    const { data: finishedMatch, error: fetchError } = await supabaseClient
        .from("matches")
        .select("*")
        .eq("id", currentMatch.id)
        .single();

    if(fetchError || !finishedMatch){
        console.error("Failed to reload finished duel:", fetchError?.message);
        alert("Duel finished update sent, but failed to reload result.");
        return;
    }

    duelFinished = true;
    currentMatch = finishedMatch;

    await showLiveResult(finishedMatch);
}
async function giveUpMatch(){
    if(duelFinished || !currentMatch || !currentUser) return;

    const confirmGiveUp = confirm("Are you sure you want to give up this duel?");
    if(!confirmGiveUp) return;

    const opponentId =
        currentUser.id === currentMatch.host_id
            ? currentMatch.guest_id
            : currentMatch.host_id;

    if(!opponentId){
        alert("Opponent not found for this duel.");
        return;
    }

    const { data: winnerProfile, error: profileError } = await supabaseClient
        .from("profiles")
        .select("id, username")
        .eq("id", opponentId)
        .single();

    if(profileError || !winnerProfile){
        alert("Failed to resolve opponent profile for give up.");
        return;
    }

    const { error: updateError } = await supabaseClient
        .from("matches")
        .update({
            status: "finished",
            winner_id: opponentId,
            winner_name: winnerProfile.username || "Winner",
            finished_at: new Date().toISOString(),
            finish_reason: "giveup"
        })
        .eq("id", currentMatch.id)
        .eq("status", "live");

    if(updateError){
        console.error("Failed to give up duel:", updateError.message);
        alert("Failed to give up duel: " + updateError.message);
        return;
    }

    const { data: finishedMatch, error: fetchError } = await supabaseClient
        .from("matches")
        .select("*")
        .eq("id", currentMatch.id)
        .single();

    if(fetchError || !finishedMatch){
        alert("Give up was sent, but failed to reload duel result.");
        return;
    }

    duelFinished = true;
    currentMatch = finishedMatch;

    await showLiveResult(finishedMatch);
}
/* =========================
   LIVE RESULT
========================= */
async function showLiveResult(match){
    const ids = [match.host_id];
    if(match.guest_id) ids.push(match.guest_id);
    if(match.winner_id) ids.push(match.winner_id);

    const { data: profiles, error } = await supabaseClient
        .from("profiles")
        .select("id, username")
        .in("id", ids);

    if(error){
        console.error("Failed to load winner profiles:", error.message);
    }

    showResultFromFinishedMatch(match, profiles || []);
}

/* =========================
   RESULT POPUP
========================= */
function showResultFromFinishedMatch(match, profiles){
    if(duelFinishPoll){
        clearInterval(duelFinishPoll);
        duelFinishPoll = null;
    }

    const winner =
        profiles.find(p => p.id === match.winner_id)?.username ||
        match.winner_name ||
        "Winner";

    const isGiveUp = match.finish_reason === "giveup";

    if(match.winner_id === currentUser.id){
        duelResultTitle.innerText = "You Won!";

        if(isGiveUp){
            duelResultText.innerHTML = `
                Your opponent gave up the duel.<br><br>
                <strong>Winner:</strong> ${winner}
            `;
        }else{
            duelResultText.innerHTML = `
                You guessed the character first and won the duel.<br><br>
                <strong>Winner:</strong> ${winner}
            `;
        }
    }else{
        duelResultTitle.innerText = "You Lost";

        if(isGiveUp){
            duelResultText.innerHTML = `
                You gave up the duel.<br><br>
                <strong>Winner:</strong> ${winner}
            `;
        }else{
            duelResultText.innerHTML = `
                Your opponent guessed the character first.<br><br>
                <strong>Winner:</strong> ${winner}
            `;
        }
    }

    duelResultPopup.classList.remove("hidden");
    matchStatusText.innerText = "FINISHED";

    if(guessInput) guessInput.disabled = true;
    if(submitGuessBtn) submitGuessBtn.disabled = true;
    if(giveUpBtn) giveUpBtn.disabled = true;
}

/* =========================
   COMPARISON HELPERS
========================= */
function normalizeText(value){
    if(value === null || value === undefined) return "";
    return String(value).trim().toLowerCase();
}

function compareExact(guessValue, secretValue){
    return normalizeText(guessValue) === normalizeText(secretValue) ? "correct" : "wrong";
}

function extractNumber(value){
    if(value === null || value === undefined) return NaN;
    const num = String(value).replace(/[^0-9.-]/g, "");
    return Number(num);
}

function compareNumberClose(guessValue, secretValue, closeRange){
    const g = extractNumber(guessValue);
    const s = extractNumber(secretValue);

    if(Number.isNaN(g) || Number.isNaN(s)){
        return compareExact(guessValue, secretValue);
    }

    if(g === s) return "correct";
    return Math.abs(g - s) <= closeRange ? "close" : "wrong";
}

function getCellClass(result){
    if(result === "correct") return "correct-cell";
    if(result === "close") return "close-cell";
    return "wrong-cell";
}

function addRowFromComparisons(comparisons){
    const row = document.createElement("tr");

    comparisons.forEach(item => {
        const td = document.createElement("td");
        td.innerText = item.value ?? "-";
        td.className = getCellClass(item.result);
        row.appendChild(td);
    });

    guessTableBody.prepend(row);
}

/* =========================
   ANIME-SPECIFIC RENDERERS
========================= */
function renderGuessRowForAnime(animeMode, guess, secret){
    switch(animeMode){
        case "onepiece":
            return renderOnePieceGuessRow(guess, secret);

        case "naruto":
            return renderNarutoGuessRow(guess, secret);

        case "bleach":
            return renderBleachGuessRow(guess, secret);

        case "demonslayer":
            return renderDemonSlayerGuessRow(guess, secret);

        case "dbz":
            return renderDbzGuessRow(guess, secret);

        case "aot":
            return renderAotGuessRow(guess, secret);

        default:
            return;
    }
}

/* ---------- ONE PIECE ---------- */
function renderOnePieceGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.name, result: compareExact(guess.name, secret.name) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.affiliation, result: compareExact(guess.affiliation, secret.affiliation) },
        { value: guess.devilFruit, result: compareExact(guess.devilFruit, secret.devilFruit) },
        { value: guess.haki, result: compareExact(guess.haki, secret.haki) },
        { value: guess.bounty, result: compareNumberClose(guess.bounty, secret.bounty, 300000000) },
        { value: guess.height, result: compareNumberClose(guess.height, secret.height, 30) },
        { value: guess.origin, result: compareExact(guess.origin, secret.origin) },
        { value: guess.firstArc, result: compareExact(guess.firstArc, secret.firstArc) }
    ]);
}

/* ---------- NARUTO ---------- */
function renderNarutoGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.name, result: compareExact(guess.name, secret.name) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.affiliations, result: compareExact(guess.affiliations, secret.affiliations) },
        { value: guess.clan, result: compareExact(guess.clan, secret.clan) },
        { value: guess.jutsuTypes, result: compareExact(guess.jutsuTypes, secret.jutsuTypes) },
        { value: guess.kekkeiGenkai, result: compareExact(guess.kekkeiGenkai, secret.kekkeiGenkai) },
        { value: guess.natureTypes, result: compareExact(guess.natureTypes, secret.natureTypes) },
        { value: guess.attributes, result: compareExact(guess.attributes, secret.attributes) },
        { value: guess.debutArc, result: compareExact(guess.debutArc, secret.debutArc) }
    ]);
}

/* ---------- BLEACH ---------- */
function renderBleachGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.name, result: compareExact(guess.name, secret.name) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.race, result: compareExact(guess.race, secret.race) },
        { value: guess.age, result: compareExact(guess.age, secret.age) },
        { value: guess.height, result: compareNumberClose(guess.height, secret.height, 15) },
        { value: guess.hairColor, result: compareExact(guess.hairColor, secret.hairColor) },
        { value: guess.location, result: compareExact(guess.location, secret.location) },
        { value: guess.firstArc, result: compareExact(guess.firstArc, secret.firstArc) }
    ]);
}

/* ---------- DEMON SLAYER ---------- */
function renderDemonSlayerGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.name, result: compareExact(guess.name, secret.name) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.race, result: compareExact(guess.race, secret.race) },
        { value: guess.age, result: compareExact(guess.age, secret.age) },
        { value: guess.fought, result: compareExact(guess.fought, secret.fought) },
        { value: guess.style, result: compareExact(guess.style, secret.style) },
        { value: guess.affiliation, result: compareExact(guess.affiliation, secret.affiliation) },
        { value: guess.firstArc, result: compareExact(guess.firstArc, secret.firstArc) }
    ]);
}

/* ---------- DBZ ---------- */
function renderDbzGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.character, result: compareExact(guess.character, secret.character) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.hair, result: compareExact(guess.hair, secret.hair) },
        { value: guess.origin, result: compareExact(guess.origin, secret.origin) },
        { value: guess.race, result: compareExact(guess.race, secret.race) },
        { value: guess.episode, result: compareNumberClose(guess.episode, secret.episode, 10) },
        { value: guess.saga, result: compareExact(guess.saga, secret.saga) },
        { value: guess.series, result: compareExact(guess.series, secret.series) }
    ]);
}

/* ---------- AOT ---------- */
function renderAotGuessRow(guess, secret){
    addRowFromComparisons([
        { value: guess.character, result: compareExact(guess.character, secret.character) },
        { value: guess.gender, result: compareExact(guess.gender, secret.gender) },
        { value: guess.arc, result: compareExact(guess.arc, secret.arc) },
        { value: guess.regiment, result: compareExact(guess.regiment, secret.regiment) },
        { value: guess.species, result: compareExact(guess.species, secret.species) },
        { value: guess.height, result: compareExact(guess.height, secret.height) },
        { value: guess.status, result: compareExact(guess.status, secret.status) }
    ]);
}