async function saveStoryCharacter(anime, arc, character){

    const { data:{session} } =
        await supabaseClient.auth.getSession();

    if(!session) return false;

    const user=session.user;

    const { error }=
        await supabaseClient
        .from("story_progress")
        .insert({

            user_id:user.id,

            anime:anime,

            arc:arc,

            character:character

        });

    if(error){

        console.log(error.message);

        return false;

    }

    return true;

}

async function loadCompletedCharacters(anime,arc){

    const { data:{session} }=
        await supabaseClient.auth.getSession();

    if(!session) return [];

    const user=session.user;

    const { data,error }=
        await supabaseClient
        .from("story_progress")
        .select("character")
        .eq("user_id",user.id)
        .eq("anime",anime)
        .eq("arc",arc);

    if(error){

        console.log(error.message);

        return [];

    }

    return data.map(item=>item.character);

}