/* ==========================================
   STORY ENGINE
   PART 1
========================================== */

/* ===========================
   CURRENT ANIME
=========================== */

const params = new URLSearchParams(window.location.search);

const animeKey = params.get("anime");

if (!animeKey) {

    alert("Anime not selected.");

    window.location.href = "story-mode.html";

    throw new Error("Anime not selected.");

}

/* ===========================
   CONFIG
=========================== */

const config = STORY_CONFIG[animeKey];

if (!config) {

    alert("Invalid anime.");

    window.location.href = "story-mode.html";

    throw new Error("Invalid anime.");

}

const {

    title,

    page,

    data,

    arcOrder,

    arcField,

    nameField,

    background,

    banner,

    themeColor,

    rewardPerCharacter,

    rewardPerArc

} = config;

/* ===========================
   PAGE TITLE
=========================== */

document.title = title + " Story Mode";

document.getElementById("animeTitle").innerText =
title + " Story Mode";

document.getElementById("animeSubtitle").innerText =
"Complete every arc to unlock the next one.";

/* ===========================
   THEME
=========================== */

document.body.style.background =

`linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.82)),
url("${background}") center/cover fixed`;

/* ===========================
   ELEMENTS
=========================== */

const arcContainer =
document.getElementById("arcContainer");

const overallProgressFill =
document.getElementById("overallProgressFill");

const overallProgressText =
document.getElementById("overallProgressText");

/* ===========================
   MENU
=========================== */

const menuBtn =
document.querySelector(".menu-btn");

const appDropdown =
document.querySelector(".app-dropdown");

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
   BUILD ARC MAP
=========================== */

function buildArcMap(){

    const map={};

    data.forEach(character=>{

        const arc =
        character[arcField];

        if(!arc) return;

        if(!map[arc]){

            map[arc]=[];

        }

        map[arc].push(character);

    });

    return map;

}

/* ===========================
   SORT ARC ORDER
=========================== */

function getSortedArcs(map){

    return Object.keys(map)

    .sort((a,b)=>{

        return arcOrder[a]-arcOrder[b];

    });

}

/* ===========================
   GLOBALS
=========================== */

const arcMap =
buildArcMap();

const sortedArcs =
getSortedArcs(arcMap);

let completedCharacters=[];

/* ===========================
   DEBUG
=========================== */

console.log("Anime:",animeKey);

console.log(config);

console.log(arcMap);

console.log(sortedArcs);

/* ==========================================
   STORY ENGINE
   PART 2
========================================== */

/* ===========================
   LOAD STORY PROGRESS
=========================== */

async function loadProgress(){

    const {

        data:{session}

    } = await supabaseClient.auth.getSession();

    if(!session){

        console.log("No logged in user.");

        return false;

    }

    const {

        data,

        error

    } = await supabaseClient

        .from("story_progress")

        .select("character, arc")

        .eq("user_id",session.user.id)

        .eq("anime",animeKey);

    if(error){

        console.error(error);

        return false;

    }

    completedCharacters =
        data.map(row=>row.character);

    console.log(
        "Completed Characters:",
        completedCharacters
    );

    return true;

}

/* ===========================
   ARC PROGRESS
=========================== */

function getArcProgress(arcName){

    const characters =
        arcMap[arcName];

    const total =
        characters.length;

    let completed = 0;

    characters.forEach(character=>{

        if(

            completedCharacters.includes(

                character[nameField]

            )

        ){

            completed++;

        }

    });

    return{

        total,

        completed,

        percent:

        total===0

        ?0

        :Math.round(

            completed/total*100

        )

    };

}

/* ===========================
   OVERALL PROGRESS
=========================== */

function getOverallProgress(){

    let totalCharacters=0;

    let totalCompleted=0;

    sortedArcs.forEach(arc=>{

        const progress =
            getArcProgress(arc);

        totalCharacters +=
            progress.total;

        totalCompleted +=
            progress.completed;

    });

    return{

        totalCharacters,

        totalCompleted,

        percent:

        totalCharacters===0

        ?0

        :Math.round(

            totalCompleted/
            totalCharacters*100

        )

    };

}

/* ===========================
   ARC COMPLETED
=========================== */

function isArcCompleted(arc){

    const progress =
        getArcProgress(arc);

    return (

        progress.completed===

        progress.total

    );

}

/* ===========================
   ARC UNLOCKED
=========================== */

function isArcUnlocked(index){

    if(index===0){

        return true;

    }

    const previousArc =

        sortedArcs[index-1];

    const previousProgress =

        getArcProgress(previousArc);

    return(

        previousProgress.completed===

        previousProgress.total

    );

}

/* ===========================
   DEBUG
=========================== */

console.log("Progress Functions Loaded");

/* ==========================================
   STORY ENGINE
   PART 3
========================================== */

/* ===========================
   RENDER STORY PAGE
=========================== */

function renderStoryPage(){

    arcContainer.innerHTML = "";

    const overall = getOverallProgress();

    overallProgressFill.style.width =
        overall.percent + "%";

    overallProgressText.innerHTML =

        `${overall.totalCompleted} / ${overall.totalCharacters}
        Characters Cleared • ${overall.percent}% Completed`;

    sortedArcs.forEach((arc,index)=>{

        const progress =
            getArcProgress(arc);

        const unlocked =
            isArcUnlocked(index);

        const completed =
            isArcCompleted(arc);

        const card =
            document.createElement("div");

        card.className = "arc-card";

        if(completed){

            card.classList.add("completed");

        }

        if(!unlocked){

            card.classList.add("locked");

        }

        const icon =

            completed

            ? "✅"

            : unlocked

            ? "📖"

            : "🔒";

        card.innerHTML =

        `

        <div class="arc-title">

            ${icon} ${arc}

        </div>

        <div class="arc-progress-text">

            ${progress.completed}
            /
            ${progress.total}

            Characters Cleared

        </div>

        <div class="progress-bar">

            <div

                class="progress-fill"

                style="width:${progress.percent}%">

            </div>

        </div>

        <div class="arc-footer">

            ${
                completed

                ?

                `<button
                    class="play-btn"
                    onclick="playArc('${arc}')">

                    Replay Arc

                </button>`

                :

                unlocked

                ?

                `<button
                    class="play-btn"
                    onclick="playArc('${arc}')">

                    Play Arc

                </button>`

                :

                `<div class="lock-text">

                    Complete previous arc first.

                </div>`
            }

        </div>

        `;

        arcContainer.appendChild(card);

    });

}

/* ===========================
   REFRESH
=========================== */

async function refreshStory(){

    const loaded =
        await loadProgress();

    if(!loaded){

        return;

    }

    renderStoryPage();

}

console.log("Render Functions Loaded");

/* ==========================================
   STORY ENGINE
   PART 4
========================================== */

/* ===========================
   PLAY ARC
=========================== */

function playArc(arc){

    window.location.href =

        `${page}?mode=story&arc=${encodeURIComponent(arc)}`;

}

/* ===========================
   INITIALIZE
=========================== */

async function initializeStory(){

    await refreshStory();

}

/* ===========================
   AUTH LISTENER
=========================== */

supabaseClient.auth.onAuthStateChange(

    async(event,session)=>{

        if(session){

            await refreshStory();

        }

    }

);

/* ===========================
   START
=========================== */

initializeStory();

/* ===========================
   DEBUG
=========================== */

console.log("===================================");

console.log("Story Engine Loaded");

console.log("Anime :",title);

console.log("Characters :",data.length);

console.log("Total Arcs :",sortedArcs.length);

console.log("===================================");