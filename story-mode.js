/* ===========================
   MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const appDropdown = document.querySelector(".app-dropdown");

if(menuBtn && appDropdown){

    menuBtn.addEventListener("click",function(e){

        e.stopPropagation();
        appDropdown.classList.toggle("show");

    });

    document.addEventListener("click",function(e){

        if(
            !appDropdown.contains(e.target) &&
            e.target!==menuBtn
        ){

            appDropdown.classList.remove("show");

        }

    });

}

/* ===========================
   ANIME LIST
=========================== */

const animeList=[

{
    name:"One Piece",
    key:"onepiece",
    page:"story.html?anime=onepiece",
    total:onepieceCharacters.length
},

{
    name:"Naruto",
    key:"naruto",
    page:"story.html?anime=naruto",
    total:narutoCharacters.length
},

{
    name:"Bleach",
    key:"bleach",
    page:"story.html?anime=bleach",
    total:bleachCharacters.length
},

{
    name:"Demon Slayer",
    key:"demonslayer",
    page:"story.html?anime=demonslayer",
    total:demonslayerCharacters.length
},

{
    name:"Dragon Ball Z",
    key:"dbz",
    page:"story.html?anime=dbz",
    total:dbzCharacters.length
},

{
    name:"Attack on Titan",
    key:"aot",
    page:"story.html?anime=aot",
    total:aotCharacters.length
}

];

const container=document.getElementById("animeContainer");

/* ===========================
   LOAD STORY PROGRESS
=========================== */

async function renderAnimeCards(){

    container.innerHTML="";

    const {data:{session}}=
    await supabaseClient.auth.getSession();

    if(!session){

        console.log("No session found");
        return;

    }

    const user=session.user;

    const {data,error}=await supabaseClient

        .from("story_progress")

        .select("anime,character")

        .eq("user_id",user.id);

    if(error){

        console.error(error);
        return;

    }

    animeList.forEach(anime=>{

        const completed=

        data.filter(row=>

            row.anime===anime.key

        ).length;

        const percent=

        anime.total===0

        ?0

        :Math.round(
            completed/
            anime.total*100
        );

        container.innerHTML+=`

        <div
        class="anime-card"
        onclick="location.href='${anime.page}'">

            <h2>${anime.name}</h2>

            <div class="progress-bar">

                <div
                class="progress"
                style="width:${percent}%">

                </div>

            </div>

            <div class="progress-text">

                ${completed}/${anime.total}
                Characters Cleared

                <br>

                ${percent}% Completed

            </div>

        </div>

        `;

    });

}

renderAnimeCards();