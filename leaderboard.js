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

const leaderboardBody = document.getElementById("leaderboardBody");
const totalPlayersEl = document.getElementById("totalPlayers");
const yourRankEl = document.getElementById("yourRank");

function escapeHtml(text){
    if(text === null || text === undefined) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getRankBadgeClass(rankName){
    const rank = (rankName || "").toLowerCase();

    if(rank.includes("god")) return "rank-god";
    if(rank.includes("master")) return "rank-master";
    if(rank.includes("pirate")) return "rank-pirate";
    if(rank.includes("titan")) return "rank-titan";
    if(rank.includes("saiyan")) return "rank-saiyan";
    if(rank.includes("reaper")) return "rank-reaper";
    if(rank.includes("shinobi")) return "rank-shinobi";
    if(rank.includes("slayer")) return "rank-slayer";
    if(rank.includes("scout")) return "rank-scout";
    if(rank.includes("rookie")) return "rank-rookie";

    return "rank-unranked";
}

async function loadLeaderboard(){
    try{
        const { data: sessionData, error: sessionError } =
            await supabaseClient.auth.getSession();

        if(sessionError || !sessionData.session){
            window.location.replace("login.html");
            return;
        }

        const currentUser = sessionData.session.user;

        const { data: players, error } = await supabaseClient
            .from("profiles")
            .select("id, username, total_wins, current_rank")
            .order("total_wins", { ascending: false })
            .order("username", { ascending: true });

        if(error){
            console.error("Leaderboard fetch error:", error.message);

            leaderboardBody.innerHTML = `
                <tr>
                    <td colspan="4" class="empty-cell">
                        Failed to load leaderboard.
                    </td>
                </tr>
            `;
            return;
        }

        if(!players || players.length === 0){
            totalPlayersEl.innerText = "0";
            yourRankEl.innerText = "--";

            leaderboardBody.innerHTML = `
                <tr>
                    <td colspan="4" class="empty-cell">
                        No players found yet.
                    </td>
                </tr>
            `;
            return;
        }

        totalPlayersEl.innerText = players.length;

        let yourPosition = "--";

        const rowsHtml = players.map((player, index) => {
            const position = index + 1;
            const isCurrentUser = player.id === currentUser.id;

            if(isCurrentUser){
                yourPosition = `#${position}`;
            }

            let rowClass = "";
            if(position === 1) rowClass += " top-1";
            else if(position === 2) rowClass += " top-2";
            else if(position === 3) rowClass += " top-3";

            if(isCurrentUser){
                rowClass += " you-row";
            }

            return `
                <tr class="${rowClass.trim()}">
                    <td class="position-cell">#${position}</td>
                    <td class="player-cell">${escapeHtml(player.username || "Unknown")}</td>
                    <td>
                        <span class="rank-badge ${getRankBadgeClass(player.current_rank)}">
                            ${escapeHtml(player.current_rank || "Unranked")}
                        </span>
                    </td>
                    <td class="wins-cell">${Number(player.total_wins) || 0}</td>
                </tr>
            `;
        }).join("");

        leaderboardBody.innerHTML = rowsHtml;
        yourRankEl.innerText = yourPosition;

    }catch(err){
        console.error("loadLeaderboard error:", err);

        leaderboardBody.innerHTML = `
            <tr>
                <td colspan="4" class="empty-cell">
                    Something went wrong while loading the leaderboard.
                </td>
            </tr>
        `;
    }
}

loadLeaderboard();