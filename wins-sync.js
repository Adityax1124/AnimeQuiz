const rankTiers = [
    { name: "Unranked", min: 0, max: 49 },
    { name: "Rookie Guesser", min: 50, max: 99 },
    { name: "Scout", min: 100, max: 149 },
    { name: "Slayer", min: 150, max: 199 },
    { name: "Shinobi", min: 200, max: 249 },
    { name: "Soul Reaper", min: 250, max: 299 },
    { name: "Saiyan", min: 300, max: 349 },
    { name: "Titan Hunter", min: 350, max: 399 },
    { name: "Pirate Captain", min: 400, max: 449 },
    { name: "Anime Master", min: 450, max: 499 },
    { name: "Anime God", min: 500, max: Infinity }
];

function getRankFromWins(totalWins){
    for(let i = 0; i < rankTiers.length; i++){
        const rank = rankTiers[i];
        if(totalWins >= rank.min && totalWins <= rank.max){
            return rank.name;
        }
    }
    return "Unranked";
}

async function syncSupabaseWin(){
    console.log("=== syncSupabaseWin CALLED ===");

    try{
        if(typeof supabaseClient === "undefined"){
            console.error("supabaseClient is undefined");
            return;
        }

        const sessionResult = await supabaseClient.auth.getSession();
        console.log("sessionResult =", sessionResult);

        const sessionData = sessionResult.data;
        const sessionError = sessionResult.error;

        if(sessionError){
            console.error("Session error:", sessionError);
            return;
        }

        if(!sessionData || !sessionData.session){
            console.error("No active session found");
            return;
        }

        const user = sessionData.session.user;
        console.log("Logged in user id =", user.id);
        console.log("Logged in user email =", user.email);

        const profileResult = await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .maybeSingle();

        console.log("profileResult =", profileResult);

        if(profileResult.error){
            console.error("Profile fetch error:", profileResult.error);
            return;
        }

        const profile = profileResult.data;

        if(!profile){
            console.error("No profile row found for this user");
            return;
        }

        const currentWins = Number(profile.total_wins) || 0;
        const newWins = currentWins + 1;
        const newRank = getRankFromWins(newWins);

        console.log("Current wins =", currentWins);
        console.log("Updating to wins =", newWins, "rank =", newRank);

        const updateResult = await supabaseClient
            .from("profiles")
            .update({
                total_wins: newWins,
                current_rank: newRank
            })
            .eq("id", user.id)
            .select();

        console.log("updateResult =", updateResult);

        if(updateResult.error){
            console.error("Update failed:", updateResult.error);
            return;
        }

        console.log("Supabase win sync SUCCESS");
    }catch(err){
        console.error("syncSupabaseWin crashed:", err);
    }
}