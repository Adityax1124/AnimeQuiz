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

const profileTitle = document.getElementById("profileTitle");

function getStat(key){
    return Number(localStorage.getItem(key)) || 0;
}

/* =========================
   LOAD ALL LOCAL ANIME STATS
   (still local for now)
========================= */

/* guesses */
const onepieceGuesses = getStat("onepiece_total_guesses");
const narutoGuesses = getStat("naruto_total_guesses");
const bleachGuesses = getStat("bleach_total_guesses");
const demonslayerGuesses = getStat("demonslayer_total_guesses");
const dbzGuesses = getStat("dbz_total_guesses");
const aotGuesses = getStat("aot_total_guesses");

/* best streaks */
const onepieceBest = getStat("onepiece_best_streak");
const narutoBest = getStat("naruto_best_streak");
const bleachBest = getStat("bleach_best_streak");
const demonslayerBest = getStat("demonslayer_best_streak");
const dbzBest = getStat("dbz_best_streak");
const aotBest = getStat("aot_best_streak");

/* local wins are still used for anime cards / fallback */
const onepieceWins = getStat("onepiece_total_wins");
const narutoWins = getStat("naruto_total_wins");
const bleachWins = getStat("bleach_total_wins");
const demonslayerWins = getStat("demonslayer_total_wins");
const dbzWins = getStat("dbz_total_wins");
const aotWins = getStat("aot_total_wins");

/* =========================
   FILL PROFILE CARDS
========================= */
const onepieceGuessesEl = document.getElementById("onepieceGuesses");
const onepieceBestEl = document.getElementById("onepieceBest");

const narutoGuessesEl = document.getElementById("narutoGuesses");
const narutoBestEl = document.getElementById("narutoBest");

const bleachGuessesEl = document.getElementById("bleachGuesses");
const bleachBestEl = document.getElementById("bleachBest");

const demonslayerGuessesEl = document.getElementById("demonslayerGuesses");
const demonslayerBestEl = document.getElementById("demonslayerBest");

const dbzGuessesEl = document.getElementById("dbzGuesses");
const dbzBestEl = document.getElementById("dbzBest");

const aotGuessesEl = document.getElementById("aotGuesses");
const aotBestEl = document.getElementById("aotBest");

if(onepieceGuessesEl) onepieceGuessesEl.innerText = onepieceGuesses;
if(onepieceBestEl) onepieceBestEl.innerText = onepieceBest;

if(narutoGuessesEl) narutoGuessesEl.innerText = narutoGuesses;
if(narutoBestEl) narutoBestEl.innerText = narutoBest;

if(bleachGuessesEl) bleachGuessesEl.innerText = bleachGuesses;
if(bleachBestEl) bleachBestEl.innerText = bleachBest;

if(demonslayerGuessesEl) demonslayerGuessesEl.innerText = demonslayerGuesses;
if(demonslayerBestEl) demonslayerBestEl.innerText = demonslayerBest;

if(dbzGuessesEl) dbzGuessesEl.innerText = dbzGuesses;
if(dbzBestEl) dbzBestEl.innerText = dbzBest;

if(aotGuessesEl) aotGuessesEl.innerText = aotGuesses;
if(aotBestEl) aotBestEl.innerText = aotBest;

/* =========================
   OVERALL LOCAL PROFILE STATS
   (still local for guesses/streaks)
========================= */
const overallGuesses =
    onepieceGuesses +
    narutoGuesses +
    bleachGuesses +
    demonslayerGuesses +
    dbzGuesses +
    aotGuesses;

const overallBestStreak = Math.max(
    onepieceBest,
    narutoBest,
    bleachBest,
    demonslayerBest,
    dbzBest,
    aotBest
);

const overallGuessesEl = document.getElementById("overallGuesses");
const overallBestStreakEl = document.getElementById("overallBestStreak");

if(overallGuessesEl) overallGuessesEl.innerText = overallGuesses;
if(overallBestStreakEl) overallBestStreakEl.innerText = overallBestStreak;

/* =========================
   RANK SYSTEM
========================= */
const rankTiers = [
    {
        name: "Unranked",
        min: 0,
        max: 49,
        image: "unranked.jpg",
        theme: "rank-theme-unranked"
    },
    {
        name: "Rookie Guesser",
        min: 50,
        max: 99,
        image: "Rookie.jpg",
        theme: "rank-theme-rookie"
    },
    {
        name: "Scout",
        min: 100,
        max: 149,
        image: "scout.jpg",
        theme: "rank-theme-scout"
    },
    {
        name: "Slayer",
        min: 150,
        max: 199,
        image: "slayer.jpg",
        theme: "rank-theme-slayer"
    },
    {
        name: "Shinobi",
        min: 200,
        max: 249,
        image: "shinobi.jpg",
        theme: "rank-theme-shinobi"
    },
    {
        name: "Soul Reaper",
        min: 250,
        max: 299,
        image: "soulreaper.jpg",
        theme: "rank-theme-soulreaper"
    },
    {
        name: "Saiyan",
        min: 300,
        max: 349,
        image: "saiyan.jpg",
        theme: "rank-theme-saiyan"
    },
    {
        name: "Titan Hunter",
        min: 350,
        max: 399,
        image: "titan.jpg",
        theme: "rank-theme-titan"
    },
    {
        name: "Pirate Captain",
        min: 400,
        max: 449,
        image: "pirate.jpg",
        theme: "rank-theme-pirate"
    },
    {
        name: "Anime Master",
        min: 450,
        max: 499,
        image: "animemaster.jpg",
        theme: "rank-theme-master"
    },
    {
        name: "Anime God",
        min: 500,
        max: Infinity,
        image: "animegod.jpg",
        theme: "rank-theme-god"
    }
];

function getCurrentRank(totalWins){
    for(let i = 0; i < rankTiers.length; i++){
        const rank = rankTiers[i];
        if(totalWins >= rank.min && totalWins <= rank.max){
            return {
                ...rank,
                index: i
            };
        }
    }

    return {
        ...rankTiers[0],
        index: 0
    };
}

function updateRankUI(totalWins){
    const currentRank = getCurrentRank(totalWins);

    const currentRankName = document.getElementById("currentRankName");
    const currentRankIcon = document.getElementById("currentRankIcon");
    const rankProgressText = document.getElementById("rankProgressText");
    const rankProgressBar = document.getElementById("rankProgressBar");
    const rankCard = document.querySelector(".rank-card");

    if(currentRankName){
        currentRankName.innerText = currentRank.name;
    }

    if(currentRankIcon){
        currentRankIcon.src = currentRank.image;
        currentRankIcon.alt = currentRank.name;
    }

    if(rankCard){
        rankCard.classList.remove(
            "rank-theme-unranked",
            "rank-theme-rookie",
            "rank-theme-scout",
            "rank-theme-slayer",
            "rank-theme-shinobi",
            "rank-theme-soulreaper",
            "rank-theme-saiyan",
            "rank-theme-titan",
            "rank-theme-pirate",
            "rank-theme-master",
            "rank-theme-god"
        );

        if(currentRank.theme){
            rankCard.classList.add(currentRank.theme);
        }
    }

    if(currentRank.index === rankTiers.length - 1){
        if(rankProgressText){
            rankProgressText.innerText = `${totalWins} correct guesses • Max Rank Reached`;
        }

        if(rankProgressBar){
            rankProgressBar.style.width = "100%";
        }

        return;
    }

    const nextRank = rankTiers[currentRank.index + 1];
    const progressInTier = totalWins - currentRank.min;
    const tierSize = nextRank.min - currentRank.min;
    const progressPercent = Math.min((progressInTier / tierSize) * 100, 100);

    if(rankProgressText){
        rankProgressText.innerText =
            `${progressInTier} / ${tierSize} correct guesses to ${nextRank.name}`;
    }

    if(rankProgressBar){
        rankProgressBar.style.width = `${progressPercent}%`;
    }
}

/* =========================
   VIEW ALL RANKS MODAL
========================= */
const viewAllRanksBtn = document.getElementById("viewAllRanksBtn");
const allRanksModal = document.getElementById("allRanksModal");
const closeAllRanksBtn = document.getElementById("closeAllRanksBtn");
const allRanksOverlay = document.getElementById("allRanksOverlay");

function openAllRanksModal(){
    if(allRanksModal){
        allRanksModal.classList.remove("hidden");
    }
}

function closeAllRanksModal(){
    if(allRanksModal){
        allRanksModal.classList.add("hidden");
    }
}

if(viewAllRanksBtn){
    viewAllRanksBtn.addEventListener("click", openAllRanksModal);
}

if(closeAllRanksBtn){
    closeAllRanksBtn.addEventListener("click", closeAllRanksModal);
}

if(allRanksOverlay){
    allRanksOverlay.addEventListener("click", closeAllRanksModal);
}

/* =========================
   SUPABASE PROFILE LOAD
   username + total wins + rank
========================= */
async function loadSupabaseProfile(){
    try{
        const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();

        if(sessionError || !sessionData.session){
            window.location.replace("login.html");
            return;
        }

        const user = sessionData.session.user;

        const { data: profile, error: profileError } = await supabaseClient
            .from("profiles")
            .select("username, total_wins, current_rank")
            .eq("id", user.id)
            .single();

        if(profileError){
            console.error("Profile fetch error:", profileError.message);

            /* fallback to local wins if fetch fails */
            const fallbackWins =
                onepieceWins +
                narutoWins +
                bleachWins +
                demonslayerWins +
                dbzWins +
                aotWins;

            updateRankUI(fallbackWins);
            return;
        }

        /* username from Supabase */
        if(profileTitle){
            profileTitle.innerText = `${profile.username}'s Profile`;
        }

        /* total wins from Supabase becomes main rank source */
        const supabaseWins = Number(profile.total_wins) || 0;

        /* use DB rank if present, but still update icon/progress from wins */
        updateRankUI(supabaseWins);

    }catch(err){
        console.error("Supabase profile load failed:", err);

        const fallbackWins =
            onepieceWins +
            narutoWins +
            bleachWins +
            demonslayerWins +
            dbzWins +
            aotWins;

        updateRankUI(fallbackWins);
    }
}

loadSupabaseProfile();

/* =========================
   RESET PROFILE
   local reset only for now
========================= */
const resetProfileBtn = document.getElementById("resetProfileBtn");

if(resetProfileBtn){
    resetProfileBtn.addEventListener("click", async function(){
        const confirmReset = confirm(
            "This will reset your local anime stats on this device. Continue?"
        );

        if(!confirmReset) return;

        /* one piece */
        localStorage.removeItem("onepiece_total_guesses");
        localStorage.removeItem("onepiece_total_wins");
        localStorage.removeItem("onepiece_best_streak");
        localStorage.removeItem("onepiece_current_streak");

        /* naruto */
        localStorage.removeItem("naruto_total_guesses");
        localStorage.removeItem("naruto_total_wins");
        localStorage.removeItem("naruto_best_streak");
        localStorage.removeItem("naruto_current_streak");

        /* bleach */
        localStorage.removeItem("bleach_total_guesses");
        localStorage.removeItem("bleach_total_wins");
        localStorage.removeItem("bleach_best_streak");
        localStorage.removeItem("bleach_current_streak");

        /* demon slayer */
        localStorage.removeItem("demonslayer_total_guesses");
        localStorage.removeItem("demonslayer_total_wins");
        localStorage.removeItem("demonslayer_best_streak");
        localStorage.removeItem("demonslayer_current_streak");

        /* dragon ball z */
        localStorage.removeItem("dbz_total_guesses");
        localStorage.removeItem("dbz_total_wins");
        localStorage.removeItem("dbz_best_streak");
        localStorage.removeItem("dbz_current_streak");

        /* attack on titan */
        localStorage.removeItem("aot_total_guesses");
        localStorage.removeItem("aot_total_wins");
        localStorage.removeItem("aot_best_streak");
        localStorage.removeItem("aot_current_streak");

        alert("Local profile stats reset successfully.");
        window.location.reload();
    });
}