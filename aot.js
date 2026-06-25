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

let secretCharacter =
characters[
    Math.floor(
        Math.random() *
        characters.length
    )
];

let guessCount = 0;
let streak = 0;
let arcHintShown = false;
let speciesHintShown = false;

/* =========================
   STATS STORAGE
========================= */
function getAotStat(key){
    return Number(localStorage.getItem(key)) || 0;
}

function setAotStat(key, value){
    localStorage.setItem(key, value);
}

function addAotGuess(){
    const total = getAotStat("aot_total_guesses");
    setAotStat("aot_total_guesses", total + 1);

    /* optional profile sync */
    localStorage.setItem("profile_aot_guesses", total + 1);
}

function updateAotBestStreak(currentStreak){
    const best = getAotStat("aot_best_streak");

    if(currentStreak > best){
        setAotStat("aot_best_streak", currentStreak);
        localStorage.setItem("profile_aot_best_streak", currentStreak);
    }
}

const input = document.getElementById("guessInput");
const suggestions = document.getElementById("suggestions");

/* load saved streak if you want persistent streak */
streak = getAotStat("aot_current_streak");
document.getElementById("streakCounter").innerText = `Streak: ${streak}`;

input.addEventListener("input", function(){

    const value = input.value.toLowerCase().trim();
    suggestions.innerHTML = "";

    if(value === "") return;

    const matches = characters.filter(character =>
        character.character.toLowerCase().includes(value)
    );

    matches.forEach(character => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.innerText = character.character;

        div.onclick = function(){
            input.value = character.character;
            suggestions.innerHTML = "";
        };

        suggestions.appendChild(div);
    });
});

input.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const value = input.value.toLowerCase().trim();

    const matches = characters.filter(character =>
        character.character.toLowerCase().includes(value)
    );

    if(matches.length === 1){
        input.value = matches[0].character;
    }

    submitGuess();
});

function compare(a, b){
    return a === b ? "correct" : "wrong";
}

function arcDisplay(guessArc, secretArc){

    const guessPos = arcOrder[guessArc];
    const secretPos = arcOrder[secretArc];

    if(guessPos === undefined || secretPos === undefined){
        return `<div class="wrong">${guessArc}</div>`;
    }

    if(guessPos === secretPos){
        return `<div class="correct">${guessArc}</div>`;
    }

    if(guessPos < secretPos){
        return `<div class="wrong">${guessArc} ➡️</div>`;
    }

    return `<div class="wrong">${guessArc} ⬅️</div>`;
}

function submitGuess(){

    const guess = input.value.trim();

    if(guess === "") return;

    const character = characters.find(character =>
        character.character.toLowerCase() === guess.toLowerCase()
    );

    if(!character){
        alert("Character not found!");
        return;
    }

    guessCount++;
    addAotGuess();
    document.getElementById("guessCounter").innerText = `Guesses: ${guessCount}`;

    function addAotWin(){
    const wins = getAotStat("aot_total_wins");
    setAotStat("aot_total_wins", wins + 1);

    /* optional profile sync */
    localStorage.setItem("profile_aot_wins", wins + 1);
}

    if(guessCount >= 6 && !arcHintShown){
        document.getElementById("arcStatus").innerText = "Arc Hint: Available";
    }

    if(guessCount >= 9 && !speciesHintShown){
        document.getElementById("speciesStatus").innerText = "Species Hint: Available";
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><div class="${compare(character.character, secretCharacter.character)}">${character.character}</div></td>
        <td><div class="${compare(character.gender, secretCharacter.gender)}">${character.gender}</div></td>
        <td>${arcDisplay(character.arc, secretCharacter.arc)}</td>
        <td><div class="${compare(character.regiment, secretCharacter.regiment)}">${character.regiment}</div></td>
        <td><div class="${compare(character.species, secretCharacter.species)}">${character.species}</div></td>
        <td><div class="${compare(character.height, secretCharacter.height)}">${character.height}</div></td>
        <td><div class="${compare(character.status, secretCharacter.status)}">${character.status}</div></td>
    `;

    if(character.character === secretCharacter.character){
        document.getElementById("resultBody").prepend(row);
        input.value = "";
        suggestions.innerHTML = "";
        showWinMessage();
        return;
    }

    document.getElementById("resultBody").prepend(row);

    input.value = "";
    suggestions.innerHTML = "";
}

function showHint(){

    if(!arcHintShown){

        if(guessCount < 6){
            alert("Arc hint unlocks at 6 guesses.");
            return;
        }

        document.getElementById("arcHint").innerHTML =
        `<strong>${secretCharacter.arc}</strong>`;

        document.getElementById("arcStatus").innerText =
        "Arc Hint: Revealed";

        arcHintShown = true;
        return;
    }

    if(!speciesHintShown){

        if(guessCount < 9){
            alert("Species hint unlocks at 9 guesses.");
            return;
        }

        document.getElementById("speciesHint").innerHTML =
        `<strong>${secretCharacter.species}</strong>`;

        document.getElementById("speciesStatus").innerText =
        "Species Hint: Revealed";

        speciesHintShown = true;
        return;
    }

    alert("All hints unlocked.");
}

function showWinMessage(){

    input.disabled = true;

    streak++;
    addAotWin();
    setAotStat("aot_current_streak", streak);
    updateAotBestStreak(streak);
    syncSupabaseWin();
    
    document.getElementById("streakCounter").innerText =
    `Streak: ${streak}`;

    document.getElementById("winPopupText").innerHTML = `
        Correct! The answer was <strong>${secretCharacter.character}</strong><br>
        Guesses this round: <strong>${guessCount}</strong><br>
        Current Streak: <strong>${streak}</strong>
    `;

    document
    .getElementById("winPopup")
    .classList.remove("hidden");
}
function addAotWin(){
    const wins = getAotStat("aot_total_wins");
    setAotStat("aot_total_wins", wins + 1);
}
function giveUp(){

    input.disabled = true;

    streak = 0;
    setAotStat("aot_current_streak", 0);

    document.getElementById("streakCounter").innerText =
    "Streak: 0";

    document.getElementById("winPopupText").innerHTML = `
        You gave up.<br>
        The secret character was <strong>${secretCharacter.character}</strong><br>
        Your streak has been broken.
    `;

    document
    .getElementById("winPopup")
    .classList.remove("hidden");
}

function continueStreak(){

    document
    .getElementById("winPopup")
    .classList.add("hidden");

    secretCharacter =
    characters[
        Math.floor(
            Math.random() *
            characters.length
        )
    ];

    guessCount = 0;
    arcHintShown = false;
    speciesHintShown = false;

    document.getElementById("guessCounter").innerText = "Guesses: 0";
    document.getElementById("arcStatus").innerText = "Arc Hint: Locked";
    document.getElementById("speciesStatus").innerText = "Species Hint: Locked";

    document.getElementById("arcHint").innerHTML = "Unlocks at 6 guesses";
    document.getElementById("speciesHint").innerHTML = "Unlocks at 9 guesses";

    document.getElementById("resultBody").innerHTML = "";

    input.disabled = false;
    input.value = "";
    suggestions.innerHTML = "";
    input.focus();
}

/* =========================
   MENU DROPDOWN
========================= */
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

/* =========================
   PROMO TRIGGER
========================= */
if(typeof handleYouTubePromoTrigger === "function"){
    handleYouTubePromoTrigger();
}