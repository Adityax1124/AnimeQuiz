const SPLASH_DURATION = 2300;
const FADE_OUT_DELAY = 1600;

setTimeout(() => {
    document.body.classList.add("fade-out");
}, FADE_OUT_DELAY);

setTimeout(async () => {
    try{
        const { data, error } = await supabaseClient.auth.getSession();

        if(error){
            window.location.replace("login.html");
            return;
        }

        const session = data.session;

        if(session){
            window.location.replace("home.html");
        }else{
            window.location.replace("login.html");
        }
    }catch(err){
        window.location.replace("login.html");
    }
}, SPLASH_DURATION);