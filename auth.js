/* =========================
   HELPERS
========================= */
function setAuthMessage(elementId, message, type = "error"){
    const el = document.getElementById(elementId);
    if(!el) return;

    el.innerText = message;
    el.classList.remove("success", "error");
    el.classList.add(type);
}

/* =========================
   SIGNUP
========================= */
const signupForm = document.getElementById("signupForm");

if(signupForm){
    signupForm.addEventListener("submit", async function(e){
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;

        if(!username || !email || !password){
            setAuthMessage("signupMessage", "Please fill all fields.");
            return;
        }

        setAuthMessage("signupMessage", "Creating account...", "success");

        try{
            /* store username temporarily so we can create profile after login */
            localStorage.setItem("pending_signup_username", username);

            const { error } = await supabaseClient.auth.signUp({
                email,
                password
            });

            if(error){
                setAuthMessage("signupMessage", error.message);
                return;
            }

            setAuthMessage(
                "signupMessage",
                "Account created successfully. Redirecting to login...",
                "success"
            );

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);

        }catch(err){
            setAuthMessage("signupMessage", "Something went wrong.");
        }
    });
}

/* =========================
   LOGIN
========================= */
const loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", async function(e){
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        if(!email || !password){
            setAuthMessage("loginMessage", "Please fill all fields.");
            return;
        }

        setAuthMessage("loginMessage", "Logging in...", "success");

        try{
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

            if(error){
                setAuthMessage("loginMessage", error.message);
                return;
            }

            const user = data.user;

            if(!user){
                setAuthMessage("loginMessage", "Login failed.");
                return;
            }

            /* check if profile already exists */
            const { data: existingProfile, error: profileFetchError } = await supabaseClient
                .from("profiles")
                .select("id")
                .eq("id", user.id)
                .maybeSingle();

            if(profileFetchError){
                setAuthMessage("loginMessage", profileFetchError.message);
                return;
            }

            /* create profile only if it doesn't exist */
            if(!existingProfile){
                let username = localStorage.getItem("pending_signup_username");

                if(!username || username.trim() === ""){
                    username = user.email ? user.email.split("@")[0] : "AnimePlayer";
                }

                const { error: insertError } = await supabaseClient
                    .from("profiles")
                    .insert([
                        {
                            id: user.id,
                            username: username,
                            total_wins: 0,
                            current_rank: "Unranked"
                        }
                    ]);

                if(insertError){
                    setAuthMessage("loginMessage", insertError.message);
                    return;
                }

                localStorage.removeItem("pending_signup_username");
            }

            setAuthMessage(
                "loginMessage",
                "Login successful. Redirecting...",
                "success"
            );

            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        }catch(err){
            setAuthMessage("loginMessage", "Something went wrong.");
        }
    });
}