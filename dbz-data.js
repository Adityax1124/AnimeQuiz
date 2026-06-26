const dbzCharacters = [
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