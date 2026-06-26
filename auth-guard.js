document.addEventListener("DOMContentLoaded", async function(){
    try{
        const { data, error } = await supabaseClient.auth.getSession();

        if(error || !data.session){
            window.location.replace("login.html");
        }
    }catch(err){
        window.location.replace("login.html");
    }
});