const characters = [
    {
        character: "Eren Yeager",
        gender: "Male",
        arc: "Fall of Shiganshina",
        regiment: "Survey Corps",
        species: "Titan Shifter",
        height: "Average",
        status: "Deceased"
    },
    {
        character: "Mikasa Ackerman",
        gender: "Female",
        arc: "Fall of Shiganshina",
        regiment: "Survey Corps",
        species: "Human",
        height: "Average",
        status: "Alive"
    },
    {
        character: "Armin Arlert",
        gender: "Male",
        arc: "Fall of Shiganshina",
        regiment: "Survey Corps",
        species: "Titan Shifter",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Levi Ackerman",
        gender: "Male",
        arc: "Female Titan",
        regiment: "Survey Corps",
        species: "Human",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Erwin Smith",
        gender: "Male",
        arc: "Female Titan",
        regiment: "Survey Corps",
        species: "Human",
        height: "Tall",
        status: "Deceased"
    },
    {
        character: "Jean Kirstein",
        gender: "Male",
        arc: "Trost",
        regiment: "Survey Corps",
        species: "Human",
        height: "Tall",
        status: "Alive"
    },
    {
        character: "Connie Springer",
        gender: "Male",
        arc: "Trost",
        regiment: "Survey Corps",
        species: "Human",
        height: "Average",
        status: "Alive"
    },
    {
        character: "Sasha Blouse",
        gender: "Female",
        arc: "Trost",
        regiment: "Survey Corps",
        species: "Human",
        height: "Average",
        status: "Deceased"
    },
    {
        character: "Historia Reiss",
        gender: "Female",
        arc: "Clash of the Titans",
        regiment: "Survey Corps",
        species: "Human",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Ymir",
        gender: "Female",
        arc: "Clash of the Titans",
        regiment: "Survey Corps",
        species: "Titan Shifter",
        height: "Tall",
        status: "Deceased"
    },
    {
        character: "Reiner Braun",
        gender: "Male",
        arc: "Female Titan",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Tall",
        status: "Alive"
    },
    {
        character: "Bertholdt Hoover",
        gender: "Male",
        arc: "Female Titan",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Tall",
        status: "Deceased"
    },
    {
        character: "Annie Leonhart",
        gender: "Female",
        arc: "Female Titan",
        regiment: "Military Police",
        species: "Titan Shifter",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Hange Zoe",
        gender: "Female",
        arc: "Female Titan",
        regiment: "Survey Corps",
        species: "Human",
        height: "Average",
        status: "Deceased"
    },
    {
        character: "Zeke Yeager",
        gender: "Male",
        arc: "Return to Shiganshina",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Tall",
        status: "Deceased"
    },
    {
        character: "Pieck Finger",
        gender: "Female",
        arc: "Marley",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Average",
        status: "Alive"
    },
    {
        character: "Porco Galliard",
        gender: "Male",
        arc: "Marley",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Average",
        status: "Deceased"
    },
    {
        character: "Falco Grice",
        gender: "Male",
        arc: "Marley",
        regiment: "Warrior Unit",
        species: "Titan Shifter",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Gabi Braun",
        gender: "Female",
        arc: "Marley",
        regiment: "Warrior Unit",
        species: "Human",
        height: "Short",
        status: "Alive"
    },
    {
        character: "Kenny Ackerman",
        gender: "Male",
        arc: "Uprising",
        regiment: "Anti-Personnel Squad",
        species: "Human",
        height: "Tall",
        status: "Deceased"
    }
];

const arcOrder = {
    "Fall of Shiganshina": 1,
    "Trost": 2,
    "Female Titan": 3,
    "Clash of the Titans": 4,
    "Uprising": 5,
    "Return to Shiganshina": 6,
    "Marley": 7
};

/* ==========================================
   ATTACK ON TITAN
   PHASE 1
========================================== */

/* ===========================
   STORY MODE
=========================== */

const urlParams = new URLSearchParams(window.location.search);

const isStoryMode =
urlParams.get("mode")==="story";

const storyArc =
urlParams.get("arc");
const animeKey =
urlParams.get("anime");
/* ===========================
   STORY FILTER
=========================== */

let availableCharacters = characters;

if(isStoryMode && storyArc){

    availableCharacters =
    characters.filter(character=>{

        return character.arc===storyArc;

    });

}

/* ===========================
   RANDOM CHARACTER
=========================== */

let secretCharacter =

availableCharacters[
    Math.floor(
        Math.random() *
        availableCharacters.length
    )
];

/* ===========================
   GAME VARIABLES
=========================== */

let guessCount = 0;

let streak = 0;

let arcHintShown = false;

let regimentHintShown = false;

/* ===========================
   LOCAL STATS
=========================== */

function getAOTStat(key){

    return Number(
        localStorage.getItem(key)
    )||0;

}

function setAOTStat(key,value){

    localStorage.setItem(
        key,
        value
    );

}

function addAOTGuess(){

    setAOTStat(

        "aot_total_guesses",

        getAOTStat(
            "aot_total_guesses"
        )+1

    );

}

function addAOTWin(){

    setAOTStat(

        "aot_total_wins",

        getAOTStat(
            "aot_total_wins"
        )+1

    );

}

function updateAOTBestStreak(current){

    const best =

    getAOTStat(
        "aot_best_streak"
    );

    if(current>best){

        setAOTStat(

            "aot_best_streak",

            current

        );

    }

}

/* ===========================
   DOM
=========================== */

const input =
document.getElementById(
"guessInput"
);

const suggestions =
document.getElementById(
"suggestions"
);

/* ===========================
   SUGGESTIONS
=========================== */

input.addEventListener("input",function(){

    const value =

    input.value
    .toLowerCase()
    .trim();

    suggestions.innerHTML="";

    if(value==="") return;

    const source =

    isStoryMode

    ? availableCharacters

    : characters;

    const matches =

    source.filter(character=>

        character.character

        .toLowerCase()

        .includes(value)

    );

    matches.forEach(character=>{

        const div =
        document.createElement("div");

        div.className=
        "suggestion";

        div.innerText=
        character.character;

        div.onclick=function(){

            input.value=
            character.character;

            suggestions.innerHTML="";

        };

        suggestions.appendChild(div);

    });

});

/* ===========================
   ENTER
=========================== */

input.addEventListener("keydown",function(e){

    if(e.key!=="Enter") return;

    const value=

    input.value
    .toLowerCase()
    .trim();

    const source=

    isStoryMode

    ?availableCharacters

    :characters;

    const matches=

    source.filter(character=>

        character.character

        .toLowerCase()

        .includes(value)

    );

    if(matches.length===1){

        input.value=
        matches[0].character;

    }

    submitGuess();

});

/* ===========================
   CLOSE SUGGESTIONS
=========================== */

document.addEventListener("click",function(e){

    if(

        e.target!==input &&

        !suggestions.contains(
            e.target
        )

    ){

        suggestions.innerHTML="";

    }

});

/* ===========================
   COMPARE
=========================== */

function compare(a,b){

    return a===b

    ?"correct"

    :"wrong";

}

/* ===========================
   HEIGHT
=========================== */

function compareHeight(

    guess,

    secret

){

    if(

        guess===secret

    ){

        return `

        <div class="correct">

        ${guess}

        </div>

        `;

    }

    const order={

        "Short":1,

        "Average":2,

        "Tall":3

    };

    if(

        order[guess]<
        order[secret]

    ){

        return `

        <div class="wrong">

        ${guess} ⬆️

        </div>

        `;

    }

    return `

    <div class="wrong">

    ${guess} ⬇️

    </div>

    `;

}

/* ===========================
   ARC
=========================== */

function arcDisplay(

    guessArc,

    secretArc

){

    const guessPos=

    arcOrder[guessArc];

    const secretPos=

    arcOrder[secretArc];

    if(

        guessPos===undefined ||

        secretPos===undefined

    ){

        return `

        <div class="wrong">

        ${guessArc}

        </div>

        `;

    }

    if(

        guessPos===secretPos

    ){

        return `

        <div class="correct">

        ${guessArc}

        </div>

        `;

    }

    if(

        guessPos<
        secretPos

    ){

        return `

        <div class="wrong">

        ${guessArc} ➡️

        </div>

        `;

    }

    return `

    <div class="wrong">

    ${guessArc} ⬅️

    </div>

    `;

}

/* ===========================
   DEBUG
=========================== */

console.log("AOT Loaded");

console.log(
"Story:",
isStoryMode
);

console.log(
"Arc:",
storyArc
);

console.log(
"Characters:",
availableCharacters.length
);

console.log(
"Secret:",
secretCharacter.character
);

/* ==========================================
   ATTACK ON TITAN
   PHASE 2
========================================== */

/* ===========================
   SAVE STORY CHARACTER
=========================== */

async function saveStoryCharacter(anime, arc, characterName){

    const { data:{session} } =
    await supabaseClient.auth.getSession();

    if(!session){

        return false;

    }

    const user = session.user;

    const { data } =
    await supabaseClient

    .from("story_progress")

    .select("id")

    .eq("user_id",user.id)

    .eq("anime",anime)

    .eq("arc",arc)

    .eq("character",characterName)

    .maybeSingle();

    if(data){

        return true;

    }

    const { error } =
    await supabaseClient

    .from("story_progress")

    .insert({

        user_id:user.id,

        anime:anime,

        arc:arc,

        character:characterName

    });

    if(error){

        console.error(error);

        return false;

    }

    return true;

}

/* ===========================
   LOAD COMPLETED
=========================== */

async function loadCompletedCharacters(anime,arc){

    const { data:{session} } =
    await supabaseClient.auth.getSession();

    if(!session){

        return [];

    }

    const user=session.user;

    const { data,error } =
    await supabaseClient

    .from("story_progress")

    .select("character")

    .eq("user_id",user.id)

    .eq("anime",anime)

    .eq("arc",arc);

    if(error){

        console.error(error);

        return [];

    }

    return data.map(item=>item.character);

}

/* ===========================
   RANDOM STORY CHARACTER
=========================== */

function pickRandomStoryCharacter(completed=[]){

    const remaining =

    characters.filter(character=>{

        return(

            character.arc===storyArc &&

            !completed.includes(

                character.character

            )

        );

    });

    if(remaining.length===0){

        return null;

    }

    return remaining[

        Math.floor(

            Math.random()*

            remaining.length

        )

    ];

}

/* ===========================
   STORY COMPLETE
=========================== */

async function storyCharacterCompleted(){

    const completed =

    await loadCompletedCharacters(

        "aot",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.arc===storyArc &&

            !completed.includes(

                character.character

            )

        );

    });

    secretCharacter =

    pickRandomStoryCharacter(completed);

    if(!secretCharacter){

        showStoryArcCompleted();

        return;

    }

    guessCount=0;

    arcHintShown=false;

    regimentHintShown=false;

    document.getElementById(

        "guessCounter"

    ).innerText="Guesses: 0";

    document.getElementById(

        "resultBody"

    ).innerHTML="";

    document.getElementById(

        "arcStatus"

    ).innerText="Arc Hint: Locked";

    document.getElementById(

        "regimentStatus"

    ).innerText="Regiment Hint: Locked";

    document.getElementById(

        "arcHint"

    ).innerHTML="Unlocks at 6 guesses";

    document.getElementById(

        "regimentHint"

    ).innerHTML="Unlocks at 9 guesses";

    input.disabled=false;

    input.value="";

    suggestions.innerHTML="";

    input.focus();

}

/* ===========================
   ARC COMPLETE
=========================== */

function showStoryArcCompleted(){

    document.getElementById(

        "winPopupText"

    ).innerHTML=`

        🏆 <strong>ARC COMPLETED!</strong>

        <br><br>

        ${storyArc}

        <br><br>

        Every character in this arc
        has been discovered.

        <br><br>

        Next arc unlocked!

    `;

    document

    .getElementById("winPopup")

    .classList.remove("hidden");

}

/* ===========================
   STORY INIT
=========================== */

async function initializeStoryMode(){

    if(

        !isStoryMode ||

        !storyArc

    ){

        return;

    }

    const completed =

    await loadCompletedCharacters(

        "aot",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.arc===storyArc &&

            !completed.includes(

                character.character

            )

        );

    });

    if(availableCharacters.length===0){

        showStoryArcCompleted();

        return;

    }

    secretCharacter =

    pickRandomStoryCharacter(

        completed

    );

}

initializeStoryMode();

console.log("AOT Story Ready");

/* ==========================================
   ATTACK ON TITAN
   PHASE 3
========================================== */

/* ===========================
   SUBMIT GUESS
=========================== */

async function submitGuess(){

    const guess = input.value.trim();

    if(guess==="") return;

    const source = isStoryMode
        ? availableCharacters
        : characters;

    const character = source.find(c =>
        c.character.toLowerCase() === guess.toLowerCase()
    );

    if(!character){

        alert("Character not found!");
        return;

    }

    guessCount++;

    addAOTGuess();

    document.getElementById("guessCounter").innerText =
    `Guesses: ${guessCount}`;

    if(guessCount>=6 && !arcHintShown){

        document.getElementById("arcStatus").innerText =
        "Arc Hint: Available";

    }

    if(guessCount>=9 && !regimentHintShown){

        document.getElementById("regimentStatus").innerText =
        "Regiment Hint: Available";

    }

    const row=document.createElement("tr");

    row.innerHTML=`

        <td>
            <div class="${compare(character.character,secretCharacter.character)}">
                ${character.character}
            </div>
        </td>

        <td>
            <div class="${compare(character.gender,secretCharacter.gender)}">
                ${character.gender}
            </div>
        </td>

        <td>
            ${arcDisplay(character.arc,secretCharacter.arc)}
        </td>

        <td>
            <div class="${compare(character.regiment,secretCharacter.regiment)}">
                ${character.regiment}
            </div>
        </td>

        <td>
            <div class="${compare(character.species,secretCharacter.species)}">
                ${character.species}
            </div>
        </td>

        <td>
            ${compareHeight(character.height,secretCharacter.height)}
        </td>

        <td>
            <div class="${compare(character.status,secretCharacter.status)}">
                ${character.status}
            </div>
        </td>

    `;

    document
    .getElementById("resultBody")
    .prepend(row);

    input.value="";
    suggestions.innerHTML="";

    /* =======================
       CORRECT GUESS
    ======================= */

    if(character.character===secretCharacter.character){

        if(isStoryMode){

            const saved =
            await saveStoryCharacter(

                "aot",

                storyArc,

                secretCharacter.character

            );

            if(saved){

                const completed =
                await loadCompletedCharacters(

                    "aot",

                    storyArc

                );

                input.disabled=true;

                document
                .getElementById("winPopupText")
                .innerHTML=`

                    🎉 <strong>CHARACTER DISCOVERED!</strong>

                    <br><br>

                    <span style="font-size:28px;color:#8BE9FD">

                        ${secretCharacter.character}

                    </span>

                    <br><br>

                    Added to your Story Collection.

                    <br><br>

                    Characters Found:
                    <strong>${completed.length}</strong>

                `;

                document
                .getElementById("winPopup")
                .classList.remove("hidden");

            }

            return;

        }

        showWinMessage();

    }

}

/* ===========================
   SHOW HINT
=========================== */

function showHint(){

    if(!arcHintShown){

        if(guessCount<6){

            alert("Arc Hint unlocks at 6 guesses.");

            return;

        }

        document.getElementById("arcHint").innerHTML=

        `<strong>${secretCharacter.arc}</strong>`;

        document.getElementById("arcStatus").innerText=

        "Arc Hint: Revealed";

        arcHintShown=true;

        return;

    }

    if(!regimentHintShown){

        if(guessCount<9){

            alert("Regiment Hint unlocks at 9 guesses.");

            return;

        }

        document.getElementById("regimentHint").innerHTML=

        `<strong>${secretCharacter.regiment}</strong>`;

        document.getElementById("regimentStatus").innerText=

        "Regiment Hint: Revealed";

        regimentHintShown=true;

        return;

    }

    alert("All hints unlocked.");

}

/* ===========================
   NORMAL WIN
=========================== */

function showWinMessage(){

    input.disabled=true;

    streak++;

    addAOTWin();

    updateAOTBestStreak(streak);

    if(typeof syncSupabaseWin==="function"){

        syncSupabaseWin();

    }

    document.getElementById("streakCounter").innerText=

    `Streak: ${streak}`;

    document.getElementById("winPopupText").innerHTML=`

        ✅ Correct!

        <br><br>

        <strong>${secretCharacter.character}</strong>

        <br><br>

        Guesses:
        <strong>${guessCount}</strong>

        <br><br>

        Current Streak:
        <strong>${streak}</strong>

    `;

    document
    .getElementById("winPopup")
    .classList.remove("hidden");

}

/* ==========================================
   ATTACK ON TITAN
   PHASE 4
========================================== */

/* ===========================
   GIVE UP
=========================== */

function giveUp(){

    input.disabled = true;

    streak = 0;

    document.getElementById("streakCounter").innerText =
    "Streak: 0";

    document.getElementById("winPopupText").innerHTML = `

        You gave up.

        <br><br>

        The answer was

        <strong>${secretCharacter.character}</strong>

        <br><br>

        Your streak has been broken.

    `;

    document
    .getElementById("winPopup")
    .classList.remove("hidden");

}

/* ===========================
   CONTINUE
=========================== */

async function continueStreak(){

    document
    .getElementById("winPopup")
    .classList.add("hidden");

    if(isStoryMode){

        window.location.href =
        `story.html?anime=${animeKey}`;

        return;

    }
    /* ---------- NORMAL MODE ---------- */

    secretCharacter =

    characters[

        Math.floor(

            Math.random() *

            characters.length

        )

    ];

    guessCount = 0;

    arcHintShown = false;

    regimentHintShown = false;

    document.getElementById("guessCounter").innerText =
    "Guesses: 0";

    document.getElementById("resultBody").innerHTML = "";

    document.getElementById("arcStatus").innerText =
    "Arc Hint: Locked";

    document.getElementById("regimentStatus").innerText =
    "Regiment Hint: Locked";

    document.getElementById("arcHint").innerHTML =
    "Unlocks at 6 guesses";

    document.getElementById("regimentHint").innerHTML =
    "Unlocks at 9 guesses";

    input.disabled = false;

    input.value = "";

    suggestions.innerHTML = "";

    input.focus();

}

/* ===========================
   STORY COMPLETE
=========================== */

async function storyCharacterCompleted(){

    const completed =

    await loadCompletedCharacters(

        "aot",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.arc===storyArc &&

            !completed.includes(

                character.character

            )

        );

    });

    if(

        availableCharacters.length===0

    ){

        showStoryArcCompleted();

        return;

    }

    secretCharacter =

    availableCharacters[

        Math.floor(

            Math.random() *

            availableCharacters.length

        )

    ];

    guessCount = 0;

    arcHintShown = false;

    regimentHintShown = false;

    document.getElementById("guessCounter").innerText =
    "Guesses: 0";

    document.getElementById("resultBody").innerHTML = "";

    document.getElementById("arcStatus").innerText =
    "Arc Hint: Locked";

    document.getElementById("regimentStatus").innerText =
    "Regiment Hint: Locked";

    document.getElementById("arcHint").innerHTML =
    "Unlocks at 6 guesses";

    document.getElementById("regimentHint").innerHTML =
    "Unlocks at 9 guesses";

    input.disabled = false;

    input.value = "";

    suggestions.innerHTML = "";

    input.focus();

    console.log(

        "Next Story Character:",

        secretCharacter.character

    );

}

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
   INITIALIZE STORY MODE
=========================== */

(async function(){

    if(

        !isStoryMode ||

        !storyArc

    ){

        return;

    }

    const completed =

    await loadCompletedCharacters(

        "aot",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.arc===storyArc &&

            !completed.includes(

                character.character

            )

        );

    });

    if(

        availableCharacters.length===0

    ){

        showStoryArcCompleted();

        return;

    }

    secretCharacter =

    availableCharacters[

        Math.floor(

            Math.random() *

            availableCharacters.length

        )

    ];

    console.log(

        "Story Loaded:",

        storyArc,

        availableCharacters.length

    );

})();

/* ===========================
   EXPORTS
=========================== */

window.submitGuess = submitGuess;

window.showHint = showHint;

window.giveUp = giveUp;

window.continueStreak = continueStreak;

/* ===========================
   DEBUG
=========================== */

console.log("================================");

console.log("AOT Engine Loaded");

console.log("Story Mode :",isStoryMode);

console.log("Story Arc :",storyArc);

console.log("Characters :",availableCharacters.length);

console.log("================================");