const characters = [
    {
        character: "Jiren",
        gender: "Male",
        hair: "Bald",
        origin: "Universe 11",
        race: "Alien",
        episode: 85,
        saga: "Tournament of Power Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Goku",
        gender: "Male",
        hair: "Black",
        origin: "Earth (Saiyan)",
        race: "Saiyan",
        episode: 1,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Vegeta",
        gender: "Male",
        hair: "Black",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: 5,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Gohan",
        gender: "Male",
        hair: "Black",
        origin: "Earth (Saiyan)",
        race: "Half-Saiyan",
        episode: 1,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Piccolo",
        gender: "Male",
        hair: "None (White Head)",
        origin: "Namek",
        race: "Namekian",
        episode: 14,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Krillin",
        gender: "Male",
        hair: "None (Bald)",
        origin: "Earth",
        race: "Human",
        episode: 14,
        saga: "Tournament Arc",
        series: "Dragon Ball"
    },
    {
        character: "Bulma",
        gender: "Female",
        hair: "Blue",
        origin: "Earth",
        race: "Human",
        episode: 1,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Frieza",
        gender: "Male",
        hair: "None (White/Purple)",
        origin: "Planet Frieza 79",
        race: "Frieza Race",
        episode: 44,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Trunks",
        gender: "Male",
        hair: "Lavender",
        origin: "Earth (Saiyan)",
        race: "Half-Saiyan",
        episode: 119,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Goten",
        gender: "Male",
        hair: "Black",
        origin: "Earth (Saiyan)",
        race: "Half-Saiyan",
        episode: 200,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Beerus",
        gender: "Male",
        hair: "None (Purple)",
        origin: "Other World",
        race: "God of Destruction",
        episode: 1,
        saga: "Battle of Gods Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Whis",
        gender: "Male",
        hair: "White",
        origin: "Other World",
        race: "Angel",
        episode: 1,
        saga: "Battle of Gods Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Master Roshi",
        gender: "Male",
        hair: "White (Bald)",
        origin: "Earth",
        race: "Human",
        episode: 3,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Tien Shinhan",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human (Three-Eyed)",
        episode: 82,
        saga: "Tournament Arc",
        series: "Dragon Ball"
    },
    {
        character: "Yamcha",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 5,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Chi-Chi",
        gender: "Female",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 11,
        saga: "Tournament Arc",
        series: "Dragon Ball"
    },
    {
        character: "Videl",
        gender: "Female",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 200,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Hercule (Mr. Satan)",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 172,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Android 17",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Android",
        episode: 128,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Android 18",
        gender: "Female",
        hair: "Blonde",
        origin: "Earth",
        race: "Android",
        episode: 133,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Cell",
        gender: "Male",
        hair: "None (Green/Black)",
        origin: "Earth",
        race: "Bio-Android",
        episode: 139,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Majin Buu",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Other World",
        race: "Majin",
        episode: 219,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Kid Buu",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Other World",
        race: "Majin",
        episode: 277,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Uub",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 290,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Pan",
        gender: "Female",
        hair: "Black",
        origin: "Earth (Saiyan)",
        race: "Half-Saiyan",
        episode: 1,
        saga: "Black Star Dragon Balls Arc",
        series: "Dragon Ball GT"
    },
    {
        character: "Baby",
        gender: "Male",
        hair: "Black",
        origin: "Planet Tuffle",
        race: "Tuffle",
        episode: 22,
        saga: "Baby Arc",
        series: "Dragon Ball GT"
    },
    {
        character: "Super 17",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Android",
        episode: 42,
        saga: "Super 17 Arc",
        series: "Dragon Ball GT"
    },
    {
        character: "Omega Shenron",
        gender: "Male",
        hair: "None (Brown)",
        origin: "Earth",
        race: "Shadow Dragon",
        episode: 48,
        saga: "Shadow Dragons Arc",
        series: "Dragon Ball GT"
    },
    {
        character: "Goku Black",
        gender: "Male",
        hair: "Black",
        origin: "Other World",
        race: "Saiyan (Zamasu)",
        episode: 47,
        saga: "Goku Black Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Zamasu",
        gender: "Male",
        hair: "Green",
        origin: "Other World",
        race: "Supreme Kai",
        episode: 53,
        saga: "Goku Black Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Toppo",
        gender: "Male",
        hair: "Black",
        origin: "Universe 11",
        race: "Alien",
        episode: 86,
        saga: "Tournament of Power Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Dyspo",
        gender: "Male",
        hair: "White",
        origin: "Universe 11",
        race: "Alien",
        episode: 95,
        saga: "Tournament of Power Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Hit",
        gender: "Male",
        hair: "Purple",
        origin: "Universe 6",
        race: "Alien",
        episode: 32,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Cabba",
        gender: "Male",
        hair: "Black",
        origin: "Universe 6",
        race: "Saiyan",
        episode: 29,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Kale",
        gender: "Female",
        hair: "Black",
        origin: "Universe 6",
        race: "Saiyan",
        episode: 89,
        saga: "Tournament of Power Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Caulifla",
        gender: "Female",
        hair: "Black",
        origin: "Universe 6",
        race: "Saiyan",
        episode: 89,
        saga: "Tournament of Power Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Broly",
        gender: "Male",
        hair: "Green (Legendary)",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 8 / Super Movie",
        series: "Dragon Ball Z / Super"
    },
    {
        character: "Bardock",
        gender: "Male",
        hair: "Black",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: "Special",
        saga: "Bardock Special",
        series: "Dragon Ball Z"
    },
    {
        character: "King Vegeta",
        gender: "Male",
        hair: "Black",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: 78,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Nappa",
        gender: "Male",
        hair: "Black (Bald)",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: 5,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Raditz",
        gender: "Male",
        hair: "Black",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: 1,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "King Kai",
        gender: "Male",
        hair: "White",
        origin: "Other World",
        race: "Deity",
        episode: 18,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Grand Supreme Kai",
        gender: "Male",
        hair: "None (Brown)",
        origin: "Other World",
        race: "Deity",
        episode: 219,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Supreme Kai",
        gender: "Male",
        hair: "Pink",
        origin: "Other World",
        race: "Deity",
        episode: 200,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Kibito",
        gender: "Male",
        hair: "White",
        origin: "Other World",
        race: "Deity",
        episode: 200,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Gowasu",
        gender: "Male",
        hair: "White",
        origin: "Universe 10",
        race: "Supreme Kai",
        episode: 53,
        saga: "Goku Black Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Champa",
        gender: "Male",
        hair: "None (Purple)",
        origin: "Universe 6",
        race: "God of Destruction",
        episode: 28,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Vados",
        gender: "Female",
        hair: "White",
        origin: "Universe 6",
        race: "Angel",
        episode: 28,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Mercenary Tao",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 55,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "Commander Red",
        gender: "Male",
        hair: "Red",
        origin: "Earth",
        race: "Human",
        episode: 29,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "General Blue",
        gender: "Male",
        hair: "Blue",
        origin: "Earth",
        race: "Human",
        episode: 36,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "Colonel Silver",
        gender: "Male",
        hair: "White",
        origin: "Earth",
        race: "Human",
        episode: 29,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "Android 8",
        gender: "Male",
        hair: "None (Bald)",
        origin: "Earth",
        race: "Android",
        episode: 38,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "King Piccolo",
        gender: "Male",
        hair: "White",
        origin: "Namek",
        race: "Namekian",
        episode: 113,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Drum",
        gender: "Male",
        hair: "None (Green)",
        origin: "Namek",
        race: "Namekian",
        episode: 119,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Tambourine",
        gender: "Male",
        hair: "None (Green)",
        origin: "Namek",
        race: "Namekian",
        episode: 117,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Cymbal",
        gender: "Male",
        hair: "None (Green)",
        origin: "Namek",
        race: "Namekian",
        episode: 120,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Kami",
        gender: "Male",
        hair: "White",
        origin: "Namek",
        race: "Namekian",
        episode: 126,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Mr. Popo",
        gender: "Male",
        hair: "None (Bald)",
        origin: "Earth",
        race: "Unknown",
        episode: 126,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Yajirobe",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 89,
        saga: "King Piccolo Arc",
        series: "Dragon Ball"
    },
    {
        character: "Korin",
        gender: "Male",
        hair: "White",
        origin: "Earth",
        race: "Cat (Deity)",
        episode: 72,
        saga: "Red Ribbon Army Arc",
        series: "Dragon Ball"
    },
    {
        character: "Chiaotzu",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human (Psychic)",
        episode: 82,
        saga: "Tournament Arc",
        series: "Dragon Ball"
    },
    {
        character: "Emperor Pilaf",
        gender: "Male",
        hair: "Blue",
        origin: "Earth",
        race: "Human",
        episode: 2,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Mai",
        gender: "Female",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 2,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Shu",
        gender: "Male",
        hair: "None (Dog)",
        origin: "Earth",
        race: "Animal Humanoid",
        episode: 2,
        saga: "Emperor Pilaf Arc",
        series: "Dragon Ball"
    },
    {
        character: "Grand Elder Guru",
        gender: "Male",
        hair: "None (White)",
        origin: "Namek",
        race: "Namekian",
        episode: 59,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Nail",
        gender: "Male",
        hair: "None (White)",
        origin: "Namek",
        race: "Namekian",
        episode: 56,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Dende",
        gender: "Male",
        hair: "None (White)",
        origin: "Namek",
        race: "Namekian",
        episode: 56,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Zarbon",
        gender: "Male",
        hair: "Green",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 48,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Dodoria",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 48,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Cui",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 46,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Captain Ginyu",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 62,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Jeice",
        gender: "Male",
        hair: "Red",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 62,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Burter",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 62,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Recoome",
        gender: "Male",
        hair: "Red",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 62,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Guldo",
        gender: "Male",
        hair: "None (Green)",
        origin: "Planet Frieza 79",
        race: "Frieza Force",
        episode: 62,
        saga: "Namek/Frieza Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "King Cold",
        gender: "Male",
        hair: "None (White/Purple)",
        origin: "Planet Frieza 79",
        race: "Frieza Race",
        episode: 118,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Cooler",
        gender: "Male",
        hair: "None (White/Purple)",
        origin: "Planet Frieza 79",
        race: "Frieza Race",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 5",
        series: "Dragon Ball Z"
    },
    {
        character: "Turles",
        gender: "Male",
        hair: "Black",
        origin: "Planet Vegeta",
        race: "Saiyan",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 3",
        series: "Dragon Ball Z"
    },
    {
        character: "Lord Slug",
        gender: "Male",
        hair: "None (White)",
        origin: "Unknown",
        race: "Namekian",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 4",
        series: "Dragon Ball Z"
    },
    {
        character: "Janemba",
        gender: "Male",
        hair: "None (Red/Blue)",
        origin: "Other World",
        race: "Demon",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 12",
        series: "Dragon Ball Z"
    },
    {
        character: "Gogeta",
        gender: "Male",
        hair: "Black (SSJ: Gold)",
        origin: "Earth (Saiyan)",
        race: "Saiyan (Fusion)",
        episode: "Movie",
        saga: "Dragon Ball Z Movie 12 / Super Movie",
        series: "Dragon Ball Z / Super"
    },
    {
        character: "Vegito",
        gender: "Male",
        hair: "Black (SSJ: Gold)",
        origin: "Earth (Saiyan)",
        race: "Saiyan (Fusion)",
        episode: 268,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Grand Priest",
        gender: "Male",
        hair: "White (Long)",
        origin: "Other World",
        race: "Angel (Grand Priest)",
        episode: 41,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Omni-King (Zeno)",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Other World",
        race: "Omni-King",
        episode: 41,
        saga: "Universe 6 Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Future Zeno",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Other World (Future)",
        race: "Omni-King",
        episode: 67,
        saga: "Goku Black Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Future Mai",
        gender: "Female",
        hair: "Black",
        origin: "Earth (Future)",
        race: "Human",
        episode: 47,
        saga: "Goku Black Arc",
        series: "Dragon Ball Super"
    },
    {
        character: "Future Trunks",
        gender: "Male",
        hair: "Lavender",
        origin: "Earth (Saiyan - Future)",
        race: "Half-Saiyan",
        episode: 119,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Future Gohan",
        gender: "Male",
        hair: "Black",
        origin: "Earth (Saiyan - Future)",
        race: "Half-Saiyan",
        episode: 119,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Good Buu",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Other World",
        race: "Majin",
        episode: 231,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Evil Buu",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Other World",
        race: "Majin",
        episode: 241,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Super Buu",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Other World",
        race: "Majin",
        episode: 250,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Dabura",
        gender: "Male",
        hair: "Black",
        origin: "Demon Realm",
        race: "Demon",
        episode: 222,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Spopovich",
        gender: "Male",
        hair: "Black",
        origin: "Earth",
        race: "Human",
        episode: 207,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Yamu",
        gender: "Male",
        hair: "White",
        origin: "Earth",
        race: "Human",
        episode: 207,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Pui Pui",
        gender: "Male",
        hair: "None (Blue)",
        origin: "Other World",
        race: "Demon",
        episode: 212,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Yakon",
        gender: "Male",
        hair: "None (Red)",
        origin: "Other World",
        race: "Demon",
        episode: 213,
        saga: "Majin Buu Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Dr. Gero",
        gender: "Male",
        hair: "White",
        origin: "Earth",
        race: "Human/Android",
        episode: 125,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Android 19",
        gender: "Male",
        hair: "None (Pink)",
        origin: "Earth",
        race: "Android",
        episode: 125,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Android 16",
        gender: "Male",
        hair: "None (Bald)",
        origin: "Earth",
        race: "Android",
        episode: 128,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Android 20",
        gender: "Male",
        hair: "White",
        origin: "Earth",
        race: "Android",
        episode: 125,
        saga: "Android/Cell Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Gregory",
        gender: "Male",
        hair: "None (Green)",
        origin: "Other World",
        race: "Deity (Attendant)",
        episode: 18,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    },
    {
        character: "Bubbles",
        gender: "Male",
        hair: "Brown",
        origin: "Other World",
        race: "Monkey",
        episode: 18,
        saga: "Saiyan Arc",
        series: "Dragon Ball Z"
    }
];

const sagaOrder = {
    "Saiyan Saga": 1,
    "Namek Saga": 2,
    "Android Saga": 3,
    "Cell Saga": 4,
    "Buu Saga": 5,
    "Battle of Gods": 6,
    "Tournament of Power": 7,
    "Broly Movie": 8
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
let sagaHintShown = false;
let raceHintShown = false;

/* =========================
   STATS STORAGE
========================= */
function getDbzStat(key){
    return Number(localStorage.getItem(key)) || 0;
}

function setDbzStat(key, value){
    localStorage.setItem(key, value);
}

function addDbzGuess(){
    const total = getDbzStat("dbz_total_guesses");
    setDbzStat("dbz_total_guesses", total + 1);

    /* optional profile sync */
    localStorage.setItem("profile_dbz_guesses", total + 1);
}

function updateDbzBestStreak(currentStreak){
    const best = getDbzStat("dbz_best_streak");

    if(currentStreak > best){
        setDbzStat("dbz_best_streak", currentStreak);
        localStorage.setItem("profile_dbz_best_streak", currentStreak);
    }
}

const input = document.getElementById("guessInput");
const suggestions = document.getElementById("suggestions");

/* load saved streak if you want persistent streak */
streak = getDbzStat("dbz_current_streak");
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

function numberDisplay(guess, secret){

    const guessed = Number(guess);
    const target = Number(secret);

    if(guessed === target){
        return `<div class="correct">${guess}</div>`;
    }

    if(guessed < target){
        return `<div class="wrong">${guess} ⬆️</div>`;
    }

    return `<div class="wrong">${guess} ⬇️</div>`;
}

function sagaDisplay(guessSaga, secretSaga){

    const guessPos = sagaOrder[guessSaga];
    const secretPos = sagaOrder[secretSaga];

    if(guessPos === undefined || secretPos === undefined){
        return `<div class="wrong">${guessSaga}</div>`;
    }

    if(guessPos === secretPos){
        return `<div class="correct">${guessSaga}</div>`;
    }

    if(guessPos < secretPos){
        return `<div class="wrong">${guessSaga} ➡️</div>`;
    }

    return `<div class="wrong">${guessSaga} ⬅️</div>`;
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
    addDbzGuess();
    document.getElementById("guessCounter").innerText = `Guesses: ${guessCount}`;
    
    function addDbzWin(){
    const wins = getDbzStat("dbz_total_wins");
    setDbzStat("dbz_total_wins", wins + 1);
}

    if(guessCount >= 6 && !sagaHintShown){
        document.getElementById("sagaStatus").innerText = "Saga Hint: Available";
    }

    if(guessCount >= 9 && !raceHintShown){
        document.getElementById("raceStatus").innerText = "Race Hint: Available";
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><div class="${compare(character.character, secretCharacter.character)}">${character.character}</div></td>
        <td><div class="${compare(character.gender, secretCharacter.gender)}">${character.gender}</div></td>
        <td><div class="${compare(character.hair, secretCharacter.hair)}">${character.hair}</div></td>
        <td><div class="${compare(character.origin, secretCharacter.origin)}">${character.origin}</div></td>
        <td><div class="${compare(character.race, secretCharacter.race)}">${character.race}</div></td>
        <td>${numberDisplay(character.episode, secretCharacter.episode)}</td>
        <td>${sagaDisplay(character.saga, secretCharacter.saga)}</td>
        <td><div class="${compare(character.series, secretCharacter.series)}">${character.series}</div></td>
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

    if(!sagaHintShown){

        if(guessCount < 6){
            alert("Saga hint unlocks at 6 guesses.");
            return;
        }

        document.getElementById("sagaHint").innerHTML =
        `<strong>${secretCharacter.saga}</strong>`;

        document.getElementById("sagaStatus").innerText =
        "Saga Hint: Revealed";

        sagaHintShown = true;
        return;
    }

    if(!raceHintShown){

        if(guessCount < 9){
            alert("Race hint unlocks at 9 guesses.");
            return;
        }

        document.getElementById("raceHint").innerHTML =
        `<strong>${secretCharacter.race}</strong>`;

        document.getElementById("raceStatus").innerText =
        "Race Hint: Revealed";

        raceHintShown = true;
        return;
    }

    alert("All hints unlocked.");
}

function showWinMessage(){

    input.disabled = true;

    streak++;
    addDbzWin();
    setDbzStat("dbz_current_streak", streak);
    updateDbzBestStreak(streak);
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
function addDbzWin(){
    const wins = getDbzStat("dbz_total_wins");
    setDbzStat("dbz_total_wins", wins + 1);
}
function giveUp(){

    input.disabled = true;

    streak = 0;
    setDbzStat("dbz_current_streak", 0);

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
    sagaHintShown = false;
    raceHintShown = false;

    document.getElementById("guessCounter").innerText = "Guesses: 0";
    document.getElementById("sagaStatus").innerText = "Saga Hint: Locked";
    document.getElementById("raceStatus").innerText = "Race Hint: Locked";

    document.getElementById("sagaHint").innerHTML = "Unlocks at 6 guesses";
    document.getElementById("raceHint").innerHTML = "Unlocks at 9 guesses";

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