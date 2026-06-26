let selectedAnime = null;
let currentMatch = null;
let currentUser = null;
let roomChannel = null;
let hostRoomPollInterval = null;
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
const animeCards = document.querySelectorAll(".anime-card");
const selectedAnimeLabel = document.getElementById("selectedAnimeLabel");
const createRoomBtn = document.getElementById("createRoomBtn");
const joinRoomBtn = document.getElementById("joinRoomBtn");
const roomCodeInput = document.getElementById("roomCodeInput");

const roomStateBox = document.getElementById("roomStateBox");
const roomInfoBox = document.getElementById("roomInfoBox");
const roomCodeDisplay = document.getElementById("roomCodeDisplay");
const roomAnimeDisplay = document.getElementById("roomAnimeDisplay");
const roomStatusDisplay = document.getElementById("roomStatusDisplay");
const roomHostDisplay = document.getElementById("roomHostDisplay");
const roomGuestDisplay = document.getElementById("roomGuestDisplay");
const copyRoomBtn = document.getElementById("copyRoomBtn");
const leaveRoomBtn = document.getElementById("leaveRoomBtn");


/* =========================
   ANIME MAP
========================= */
const animeDisplayMap = {
    onepiece: "One Piece",
    naruto: "Naruto",
    bleach: "Bleach",
    demonslayer: "Demon Slayer",
    dbz: "Dragon Ball Z",
    aot: "Attack on Titan"
};

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", async function(){
    const { data, error } = await supabaseClient.auth.getSession();

    if(error || !data.session){
        window.location.replace("login.html");
        return;
    }

    currentUser = data.session.user;

    setupAnimeSelection();
    setupButtons();

    const savedMatchId = localStorage.getItem("duel_current_match_id");
    if(savedMatchId){
        await restoreMatch(savedMatchId);
    }
});

/* =========================
   ANIME SELECT
========================= */
function setupAnimeSelection(){
    animeCards.forEach(card => {
        card.addEventListener("click", function(){
            animeCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");

            selectedAnime = card.dataset.anime;
            selectedAnimeLabel.innerText =
                animeDisplayMap[selectedAnime] || selectedAnime;
        });
    });
}

/* =========================
   BUTTONS
========================= */
function setupButtons(){
    if(createRoomBtn){
        createRoomBtn.addEventListener("click", createRoom);
    }

    if(joinRoomBtn){
        joinRoomBtn.addEventListener("click", joinRoomByCode);
    }

    if(copyRoomBtn){
        copyRoomBtn.addEventListener("click", async function(){
            if(!currentMatch?.room_code) return;

            try{
                await navigator.clipboard.writeText(currentMatch.room_code);
                alert("Room code copied.");
            }catch(err){
                alert("Failed to copy room code.");
            }
        });
    }

    if(leaveRoomBtn){
        leaveRoomBtn.addEventListener("click", leaveRoom);
    }
}

/* =========================
   ROOM CODE GENERATOR
========================= */
function generateRoomCode(length = 6){
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for(let i = 0; i < length; i++){
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return code;
}

/* =========================
   CREATE ROOM
========================= */
async function createRoom(){
    if(!selectedAnime){
        alert("Please select an anime first.");
        return;
    }

    if(!currentUser){
        alert("User session not found.");
        return;
    }

    createRoomBtn.disabled = true;
    createRoomBtn.innerText = "Creating...";

    try{
        let roomCode = generateRoomCode();

        const { data: existingRoom } = await supabaseClient
            .from("matches")
            .select("id")
            .eq("room_code", roomCode)
            .maybeSingle();

        if(existingRoom){
            roomCode = generateRoomCode();
        }

        const { data: profileData } = await supabaseClient
            .from("profiles")
            .select("username")
            .eq("id", currentUser.id)
            .maybeSingle();

        const hostName =
            profileData?.username ||
            currentUser.email?.split("@")[0] ||
            "Host";

        const { data, error } = await supabaseClient
            .from("matches")
            .insert([
                {
                    room_code: roomCode,
                    anime_mode: selectedAnime,
                    host_id: currentUser.id,
                    status: "waiting"
                }
            ])
            .select()
            .single();

        if(error){
            alert("Failed to create room: " + error.message);
            createRoomBtn.disabled = false;
            createRoomBtn.innerText = "Create Room";
            return;
        }

       currentMatch = {
    ...data,
    host_username: hostName,
    guest_username: null
};

localStorage.setItem("duel_current_match_id", currentMatch.id);

updateRoomUI();
subscribeToRoom(currentMatch.id);
startHostWaitingPoll(currentMatch.id);

roomStateBox.innerHTML = `
    <p class="status-line">
        Room created. Share the code with your opponent and wait for them to join.
    </p>
`;

    }catch(err){
        console.error(err);
        alert("Something went wrong while creating the room.");
    }finally{
        createRoomBtn.disabled = false;
        createRoomBtn.innerText = "Create Room";
    }
}

/* =========================
   JOIN ROOM
========================= */
async function joinRoomByCode(){
    const code = roomCodeInput.value.trim().toUpperCase();

    if(code === ""){
        alert("Enter a room code.");
        return;
    }

    if(!currentUser){
        alert("User session not found.");
        return;
    }

    joinRoomBtn.disabled = true;
    joinRoomBtn.innerText = "Joining...";

    try{
        const { data: match, error } = await supabaseClient
            .from("matches")
            .select("*")
            .eq("room_code", code)
            .maybeSingle();

        if(error){
            alert("Failed to find room: " + error.message);
            joinRoomBtn.disabled = false;
            joinRoomBtn.innerText = "Join";
            return;
        }

        if(!match){
            alert("Room not found.");
            joinRoomBtn.disabled = false;
            joinRoomBtn.innerText = "Join";
            return;
        }

        if(match.status === "finished"){
            alert("This room has already finished.");
            joinRoomBtn.disabled = false;
            joinRoomBtn.innerText = "Join";
            return;
        }

        if(match.guest_id && match.guest_id !== currentUser.id){
            alert("This room is already full.");
            joinRoomBtn.disabled = false;
            joinRoomBtn.innerText = "Join";
            return;
        }

        const { data: hostProfile } = await supabaseClient
            .from("profiles")
            .select("username")
            .eq("id", match.host_id)
            .maybeSingle();

        const { data: guestProfile } = await supabaseClient
            .from("profiles")
            .select("username")
            .eq("id", currentUser.id)
            .maybeSingle();

        const guestName =
            guestProfile?.username ||
            currentUser.email?.split("@")[0] ||
            "Guest";

            if(match.host_id === currentUser.id){
    alert("You cannot join your own room from the guest side.");
    joinRoomBtn.disabled = false;
    joinRoomBtn.innerText = "Join";
    return;
}

const updatePayload = {
    guest_id: currentUser.id,
    status: "live",
    started_at: new Date().toISOString()
};

const { error: updateError } = await supabaseClient
    .from("matches")
    .update(updatePayload)
    .eq("id", match.id)
    .eq("status", "waiting")
    .is("guest_id", null);

if(updateError){
    alert("Failed to join room: " + updateError.message);
    joinRoomBtn.disabled = false;
    joinRoomBtn.innerText = "Join";
    return;
}

const { data: updatedMatch, error: fetchUpdatedError } = await supabaseClient
    .from("matches")
    .select("*")
    .eq("id", match.id)
    .single();

if(fetchUpdatedError || !updatedMatch){
    alert("Room joined, but failed to load updated room.");
    joinRoomBtn.disabled = false;
    joinRoomBtn.innerText = "Join";
    return;
}

if(!updatedMatch.guest_id){
    alert("Join update did not save guest_id in database.");
    joinRoomBtn.disabled = false;
    joinRoomBtn.innerText = "Join";
    return;
}

        currentMatch = {
            ...updatedMatch,
            host_username: hostProfile?.username || "Host",
            guest_username: guestName
        };

        localStorage.setItem("duel_current_match_id", currentMatch.id);

        updateRoomUI();
        subscribeToRoom(currentMatch.id);

        roomStateBox.innerHTML = `
            <p class="status-line">
                Opponent joined. Match starting...
            </p>
        `;

        setTimeout(() => {
            goToDuelMatch(currentMatch.id);
        }, 900);

    }catch(err){
        console.error(err);
        alert("Something went wrong while joining the room.");
    }finally{
        joinRoomBtn.disabled = false;
        joinRoomBtn.innerText = "Join";
    }
}

/* =========================
   RESTORE MATCH
========================= */
async function restoreMatch(matchId){
    try{
        const { data: match, error } = await supabaseClient
            .from("matches")
            .select("*")
            .eq("id", matchId)
            .maybeSingle();

        if(error || !match){
            localStorage.removeItem("duel_current_match_id");
            return;
        }

        const idsToFetch = [match.host_id];
        if(match.guest_id) idsToFetch.push(match.guest_id);

        const { data: profiles } = await supabaseClient
            .from("profiles")
            .select("id, username")
            .in("id", idsToFetch);

        const hostProfile = profiles?.find(p => p.id === match.host_id);
        const guestProfile = profiles?.find(p => p.id === match.guest_id);

        currentMatch = {
            ...match,
            host_username: hostProfile?.username || "Host",
            guest_username: guestProfile?.username || null
        };

        updateRoomUI();
        subscribeToRoom(currentMatch.id);

        if(match.status === "live"){
            roomStateBox.innerHTML = `
                <p class="status-line">Match found. Starting...</p>
            `;

            setTimeout(() => {
                goToDuelMatch(match.id);
            }, 700);
        }else if(match.status === "waiting"){
    roomStateBox.innerHTML = `
        <p class="status-line">
            Waiting for opponent to join this room...
        </p>
    `;

    if(currentUser && match.host_id === currentUser.id){
        startHostWaitingPoll(match.id);
    }
}else if(match.status === "finished"){
            roomStateBox.innerHTML = `
                <p class="status-line">
                    This duel has already finished.
                </p>
            `;
        }

    }catch(err){
        console.error("restoreMatch error:", err);
    }
}
function startHostWaitingPoll(matchId){
    if(hostRoomPollInterval){
        clearInterval(hostRoomPollInterval);
        hostRoomPollInterval = null;
    }

    hostRoomPollInterval = setInterval(async () => {
        try{
            const { data: latestMatch, error } = await supabaseClient
                .from("matches")
                .select("*")
                .eq("id", matchId)
                .single();

            if(error || !latestMatch) return;

            currentMatch = latestMatch;

            if(latestMatch.status === "live" && latestMatch.guest_id){
                clearInterval(hostRoomPollInterval);
                hostRoomPollInterval = null;

                localStorage.setItem("duel_current_match_id", latestMatch.id);

                roomStateBox.innerHTML = `
                    <p class="status-line">
                        Opponent joined. Match starting...
                    </p>
                `;

                setTimeout(() => {
                    goToDuelMatch(latestMatch.id);
                }, 700);
            }
        }catch(err){
            console.error("Host waiting poll error:", err);
        }
    }, 1000);
}
/* =========================
   UI UPDATE
========================= */
function updateRoomUI(){
    if(!currentMatch) return;

    roomInfoBox.classList.remove("hidden");

    roomCodeDisplay.innerText = currentMatch.room_code || "-----";
    roomAnimeDisplay.innerText =
        animeDisplayMap[currentMatch.anime_mode] || currentMatch.anime_mode || "-";
    roomStatusDisplay.innerText = currentMatch.status || "waiting";
    roomHostDisplay.innerText = currentMatch.host_username || "Host";
    roomGuestDisplay.innerText =
        currentMatch.guest_username || (currentMatch.guest_id ? "Guest" : "Waiting...");
}

/* =========================
   REALTIME SUBSCRIPTION
========================= */
function subscribeToRoom(matchId){
    if(roomChannel){
        supabaseClient.removeChannel(roomChannel);
        roomChannel = null;
    }

    roomChannel = supabaseClient
        .channel(`match-room-${matchId}`)
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "matches",
                filter: `id=eq.${matchId}`
            },
            async payload => {
                console.log("Room realtime update:", payload);

                const updated = payload.new;
                if(!updated) return;

                const idsToFetch = [updated.host_id];
                if(updated.guest_id) idsToFetch.push(updated.guest_id);

                const { data: profiles } = await supabaseClient
                    .from("profiles")
                    .select("id, username")
                    .in("id", idsToFetch);

                const hostProfile = profiles?.find(p => p.id === updated.host_id);
                const guestProfile = profiles?.find(p => p.id === updated.guest_id);

                currentMatch = {
                    ...updated,
                    host_username: hostProfile?.username || "Host",
                    guest_username: guestProfile?.username || null
                };

                updateRoomUI();

                if(updated.status === "live"){
                    roomStateBox.innerHTML = `
                        <p class="status-line">
                            Opponent joined. Match starting...
                        </p>
                    `;

                    localStorage.setItem("duel_current_match_id", updated.id);

                    setTimeout(() => {
                        goToDuelMatch(updated.id);
                    }, 900);
                }

                if(updated.status === "finished"){
                    roomStateBox.innerHTML = `
                        <p class="status-line">
                            This duel has finished.
                        </p>
                    `;
                }
            }
        )
        .subscribe((status) => {
            console.log("Room channel status:", status);
        });
}

/* =========================
   LEAVE ROOM
========================= */
async function leaveRoom(){
    if(!currentMatch || !currentUser) return;
    
    if(hostRoomPollInterval){
    clearInterval(hostRoomPollInterval);
    hostRoomPollInterval = null;
}

    const confirmLeave = confirm("Leave this room?");
    if(!confirmLeave) return;

    try{
        /* host leaving before duel starts */
        if(currentMatch.host_id === currentUser.id && currentMatch.status === "waiting"){
            const { error } = await supabaseClient
                .from("matches")
                .delete()
                .eq("id", currentMatch.id);

            if(error){
                alert("Failed to leave room: " + error.message);
                return;
            }
        }
        /* guest leaving before duel starts */
        else if(currentMatch.guest_id === currentUser.id && currentMatch.status === "waiting"){
            const { error } = await supabaseClient
                .from("matches")
                .update({
                    guest_id: null
                })
                .eq("id", currentMatch.id);

            if(error){
                alert("Failed to leave room: " + error.message);
                return;
            }
        }
        else{
            /* if duel already live, for now just clear local room reference */
        }

        if(roomChannel){
            supabaseClient.removeChannel(roomChannel);
            roomChannel = null;
        }

        currentMatch = null;
        localStorage.removeItem("duel_current_match_id");
        resetRoomUI();

    }catch(err){
        console.error(err);
        alert("Something went wrong while leaving the room.");
    }
}

function resetRoomUI(){
    roomInfoBox.classList.add("hidden");
    roomStateBox.innerHTML = `<p class="status-line">No active room yet.</p>`;
    roomCodeDisplay.innerText = "-----";
    roomAnimeDisplay.innerText = "-";
    roomStatusDisplay.innerText = "Waiting";
    roomHostDisplay.innerText = "-";
    roomGuestDisplay.innerText = "Waiting...";
}

/* =========================
   REDIRECT TO MATCH
========================= */
function goToDuelMatch(matchId){
    window.location.href = `duel-match.html?match=${encodeURIComponent(matchId)}`;
}