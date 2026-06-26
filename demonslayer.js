const characters = [
    {
        "name": "Nezuko Kamado",
        "gender": "Female",
        "race": "Demon",
        "age": "14",
        "fought": "Daki",
        "style": "Blood Demon Art",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Tanjiro Kamado",
        "gender": "Male",
        "race": "Human",
        "age": "15",
        "fought": "Muzan Kibutsuji",
        "style": "Water Breathing, Sun Breathing (Hinokami Kagura)",
        "affiliation": "Demon Slayer Corps",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Zenitsu Agatsuma",
        "gender": "Male",
        "race": "Human",
        "age": "16",
        "fought": "Kaigaku",
        "style": "Thunder Breathing",
        "affiliation": "Demon Slayer Corps",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Inosuke Hashibira",
        "gender": "Male",
        "race": "Human",
        "age": "15",
        "fought": "Gyutaro",
        "style": "Beast Breathing",
        "affiliation": "Demon Slayer Corps",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Giyu Tomioka",
        "gender": "Male",
        "race": "Human",
        "age": "21",
        "fought": "Akaza",
        "style": "Water Breathing",
        "affiliation": "Demon Slayer Corps (Water Hashira)",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Sakonji Urokodaki",
        "gender": "Male",
        "race": "Human",
        "age": "70+",
        "fought": "None (Retired)",
        "style": "Water Breathing",
        "affiliation": "Demon Slayer Corps (Former Water Hashira)",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Sabito",
        "gender": "Male",
        "race": "Spirit",
        "age": "13 (deceased)",
        "fought": "The Hand Demon",
        "style": "Water Breathing",
        "affiliation": "Demon Slayer Corps (Former)",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Makomo",
        "gender": "Female",
        "race": "Spirit",
        "age": "13 (deceased)",
        "fought": "The Hand Demon",
        "style": "Water Breathing",
        "affiliation": "Demon Slayer Corps (Former)",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Kiyo",
        "gender": "Female",
        "race": "Human",
        "age": "16",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family / Urokodaki's House",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Sumi",
        "gender": "Female",
        "race": "Human",
        "age": "16",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family / Urokodaki's House",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Naho",
        "gender": "Female",
        "race": "Human",
        "age": "16",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family / Urokodaki's House",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Muzan Kibutsuji",
        "gender": "Male",
        "race": "Demon",
        "age": "1000+",
        "fought": "Yoriichi Tsugikuni",
        "style": "Blood Demon Art (Biokinesis, Memory Manipulation)",
        "affiliation": "None (King of Demons)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Rui",
        "gender": "Male",
        "race": "Demon",
        "age": "100+ (appears 13)",
        "fought": "Giyu Tomioka",
        "style": "Blood Demon Art (Spider Threads)",
        "affiliation": "Spider Demon Family",
        "firstArc": "Mount Natagumo Arc"
    },
    {
        "name": "The Spider Demon (Father)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Inosuke Hashibira",
        "style": "Blood Demon Art (Spider Transformation)",
        "affiliation": "Spider Demon Family",
        "firstArc": "Mount Natagumo Arc"
    },
    {
        "name": "The Spider Demon (Mother)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Zenitsu Agatsuma",
        "style": "Blood Demon Art (Spider Webs)",
        "affiliation": "Spider Demon Family",
        "firstArc": "Mount Natagumo Arc"
    },
    {
        "name": "The Spider Demon (Brother)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Spider Poison)",
        "affiliation": "Spider Demon Family",
        "firstArc": "Mount Natagumo Arc"
    },
    {
        "name": "The Spider Demon (Sister)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Nezuko Kamado",
        "style": "Blood Demon Art (Spider Illusions)",
        "affiliation": "Spider Demon Family",
        "firstArc": "Mount Natagumo Arc"
    },
    {
        "name": "Kyojuro Rengoku",
        "gender": "Male",
        "race": "Human",
        "age": "20",
        "fought": "Akaza",
        "style": "Flame Breathing",
        "affiliation": "Demon Slayer Corps (Flame Hashira)",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Tengen Uzui",
        "gender": "Male",
        "race": "Human",
        "age": "23",
        "fought": "Gyutaro",
        "style": "Sound Breathing",
        "affiliation": "Demon Slayer Corps (Sound Hashira)",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Gyutaro",
        "gender": "Male",
        "race": "Demon",
        "age": "100+ (appears 15)",
        "fought": "Tengen Uzui",
        "style": "Blood Demon Art (Sickles and Poison)",
        "affiliation": "Demon (Upper Moon 6)",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Daki",
        "gender": "Female",
        "race": "Demon",
        "age": "100+ (appears 15)",
        "fought": "Nezuko Kamado",
        "style": "Blood Demon Art (Obi and Belts)",
        "affiliation": "Demon (Upper Moon 6)",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Makio",
        "gender": "Female",
        "race": "Human",
        "age": "19",
        "fought": "None",
        "style": "None",
        "affiliation": "Uzui Family",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Suma",
        "gender": "Female",
        "race": "Human",
        "age": "19",
        "fought": "None",
        "style": "None",
        "affiliation": "Uzui Family",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Hinatsuru",
        "gender": "Female",
        "race": "Human",
        "age": "20",
        "fought": "None",
        "style": "None",
        "affiliation": "Uzui Family",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Muichiro Tokito",
        "gender": "Male",
        "race": "Human",
        "age": "14",
        "fought": "Kokushibo",
        "style": "Mist Breathing",
        "affiliation": "Demon Slayer Corps (Mist Hashira)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Mitsuri Kanroji",
        "gender": "Female",
        "race": "Human",
        "age": "19",
        "fought": "Hantengu",
        "style": "Love Breathing",
        "affiliation": "Demon Slayer Corps (Love Hashira)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Gyokko",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Muichiro Tokito",
        "style": "Blood Demon Art (Fish and Water Manipulation)",
        "affiliation": "Demon (Upper Moon 5)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Hantengu",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Mitsuri Kanroji",
        "style": "Blood Demon Art (Emotion Manifestation)",
        "affiliation": "Demon (Upper Moon 4)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Sekido",
        "gender": "Male",
        "race": "Demon (Hantengu's Emotion)",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Lightning and Anger)",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Karaku",
        "gender": "Male",
        "race": "Demon (Hantengu's Emotion)",
        "age": "Unknown",
        "fought": "Mitsuri Kanroji",
        "style": "Blood Demon Art (Wind and Pleasure)",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Aizetsu",
        "gender": "Male",
        "race": "Demon (Hantengu's Emotion)",
        "age": "Unknown",
        "fought": "Mitsuri Kanroji",
        "style": "Blood Demon Art (Spear and Sorrow)",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Urogi",
        "gender": "Male",
        "race": "Demon (Hantengu's Emotion)",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Flight and Joy)",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Zohakuten",
        "gender": "Male",
        "race": "Demon (Hantengu's Merged Emotion)",
        "age": "Unknown",
        "fought": "Mitsuri Kanroji",
        "style": "Blood Demon Art (Wood and Hate)",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Hotaru Haganezuka",
        "gender": "Male",
        "race": "Human",
        "age": "30+",
        "fought": "None",
        "style": "None",
        "affiliation": "Swordsmith Village",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Tetsuido",
        "gender": "Male",
        "race": "Human",
        "age": "25+",
        "fought": "None",
        "style": "None",
        "affiliation": "Swordsmith Village",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Kotetsu",
        "gender": "Male",
        "race": "Human",
        "age": "10",
        "fought": "None",
        "style": "None",
        "affiliation": "Swordsmith Village",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Shinobu Kocho",
        "gender": "Female",
        "race": "Human",
        "age": "18",
        "fought": "Douma",
        "style": "Insect Breathing",
        "affiliation": "Demon Slayer Corps (Insect Hashira)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Kanae Kocho",
        "gender": "Female",
        "race": "Human",
        "age": "20 (deceased)",
        "fought": "Douma",
        "style": "Flower Breathing",
        "affiliation": "Demon Slayer Corps (Former Flower Hashira)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Kanao Tsuyuri",
        "gender": "Female",
        "race": "Human",
        "age": "16",
        "fought": "Douma",
        "style": "Flower Breathing",
        "affiliation": "Demon Slayer Corps (Kocho Family)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Aoi Kanzaki",
        "gender": "Female",
        "race": "Human",
        "age": "17",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Butterfly Mansion)",
        "firstArc": "Rehabilitation Training Arc"
    },
    {
        "name": "Shinjurou Rengoku",
        "gender": "Male",
        "race": "Human",
        "age": "50+",
        "fought": "None (Retired)",
        "style": "Flame Breathing",
        "affiliation": "Demon Slayer Corps (Former Flame Hashira)",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Senjurou Rengoku",
        "gender": "Male",
        "race": "Human",
        "age": "16",
        "fought": "None",
        "style": "Flame Breathing",
        "affiliation": "Rengoku Family",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Akaza",
        "gender": "Male",
        "race": "Demon",
        "age": "300+",
        "fought": "Giyu Tomioka",
        "style": "Blood Demon Art (Shockwave and Martial Arts)",
        "affiliation": "Demon (Upper Moon 3)",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Enmu",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Dream Manipulation)",
        "affiliation": "Demon (Lower Moon 1)",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Yushiro",
        "gender": "Male",
        "race": "Demon",
        "age": "100+ (appears 18)",
        "fought": "None (Allied with Slayers)",
        "style": "Blood Demon Art (Illusions, Tag)",
        "affiliation": "Demon (Tamayo's Companion)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Tamayo",
        "gender": "Female",
        "race": "Demon",
        "age": "500+",
        "fought": "Muzan Kibutsuji",
        "style": "Blood Demon Art (Biokinesis, Memory Manipulation)",
        "affiliation": "Demon (Muzan's Former Associate)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Yoriichi Tsugikuni",
        "gender": "Male",
        "race": "Human",
        "age": "80+ (deceased)",
        "fought": "Muzan Kibutsuji",
        "style": "Sun Breathing (Hinokami Kagura)",
        "affiliation": "Demon Slayer Corps (Original Sun Breathing User)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Kokushibo (Michikatsu Tsugikuni)",
        "gender": "Male",
        "race": "Demon",
        "age": "500+",
        "fought": "Muichiro Tokito",
        "style": "Moon Breathing",
        "affiliation": "Demon (Upper Moon 1)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Gyomei Himejima",
        "gender": "Male",
        "race": "Human",
        "age": "27",
        "fought": "Kokushibo",
        "style": "Stone Breathing",
        "affiliation": "Demon Slayer Corps (Stone Hashira)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Sanemi Shinazugawa",
        "gender": "Male",
        "race": "Human",
        "age": "21",
        "fought": "Kokushibo",
        "style": "Wind Breathing",
        "affiliation": "Demon Slayer Corps (Wind Hashira)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Obanai Iguro",
        "gender": "Male",
        "race": "Human",
        "age": "21",
        "fought": "Muzan Kibutsuji",
        "style": "Serpent Breathing",
        "affiliation": "Demon Slayer Corps (Serpent Hashira)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Genya Shinazugawa",
        "gender": "Male",
        "race": "Human (Demon Eater)",
        "age": "16",
        "fought": "Kokushibo",
        "style": "None (Demon Eating)",
        "affiliation": "Demon Slayer Corps (Sanemi's Brother)",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Nakime",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Yushiro",
        "style": "Blood Demon Art (Portal/Infinity Castle Manipulation)",
        "affiliation": "Demon (Upper Moon 4 - Replacement)",
        "firstArc": "Infinity Castle Arc"
    },
    {
        "name": "Kaigaku",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown (appears 17)",
        "fought": "Zenitsu Agatsuma",
        "style": "Thunder Breathing (Former), Blood Demon Art (Electricity)",
        "affiliation": "Demon (Upper Moon 6 - Replacement)",
        "firstArc": "Infinity Castle Arc"
    },
    {
        "name": "Douma",
        "gender": "Male",
        "race": "Demon",
        "age": "200+",
        "fought": "Shinobu Kocho",
        "style": "Blood Demon Art (Ice and Frost)",
        "affiliation": "Demon (Upper Moon 2)",
        "firstArc": "Infinity Castle Arc"
    },
    {
        "name": "Tengen Uzui's Father",
        "gender": "Male",
        "race": "Human",
        "age": "50+",
        "fought": "None",
        "style": "None (Shinobi Arts)",
        "affiliation": "Uzui Clan",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Tengen Uzui's Brother (Kashitaro)",
        "gender": "Male",
        "race": "Human",
        "age": "23",
        "fought": "None",
        "style": "None (Shinobi Arts)",
        "affiliation": "Uzui Clan",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Kotoha Hashibira",
        "gender": "Female",
        "race": "Human",
        "age": "25+ (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Hashibira Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Jigoro Kuwajima",
        "gender": "Male",
        "race": "Human",
        "age": "60+ (deceased)",
        "fought": "None (Committed Seppuku)",
        "style": "Thunder Breathing",
        "affiliation": "Demon Slayer Corps (Former Thunder Hashira)",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Hakuji (Akaza's Human Form)",
        "gender": "Male",
        "race": "Human",
        "age": "18 (deceased)",
        "fought": "None",
        "style": "None (Martial Arts)",
        "affiliation": "None",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Koyuki (Akaza's Lover)",
        "gender": "Female",
        "race": "Human",
        "age": "16 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "None",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "The Temari Demon (Asakusa)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Temari Balls)",
        "affiliation": "Demon",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "The Arrow Demon (Asakusa)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tamayo",
        "style": "Blood Demon Art (Arrow Arrows)",
        "affiliation": "Demon",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Matsuo (Asakusa)",
        "gender": "Male",
        "race": "Human",
        "age": "50+",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family (Landlord)",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Tomo (Asakusa)",
        "gender": "Male",
        "race": "Human",
        "age": "20+",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Muzan's Wife",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown",
        "fought": "None",
        "style": "None",
        "affiliation": "Muzan Kibutsuji",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Muzan's Daughter (Ruka)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown (appears 8)",
        "fought": "None",
        "style": "None",
        "affiliation": "Muzan Kibutsuji",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Muzan's Daughter (Ran)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown (appears 6)",
        "fought": "None",
        "style": "None",
        "affiliation": "Muzan Kibutsuji",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Muzan's Daughter (Sayo)",
        "gender": "Female",
        "race": "Demon",
        "age": "Unknown (appears 4)",
        "fought": "None",
        "style": "None",
        "affiliation": "Muzan Kibutsuji",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Tanjiro's Mother (Kie)",
        "gender": "Female",
        "race": "Human",
        "age": "30+ (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Tanjiro's Brother (Takeo)",
        "gender": "Male",
        "race": "Human",
        "age": "10 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Tanjiro's Sister (Hanako)",
        "gender": "Female",
        "race": "Human",
        "age": "8 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Tanjiro's Brother (Shigeru)",
        "gender": "Male",
        "race": "Human",
        "age": "6 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Tanjiro's Brother (Rokuta)",
        "gender": "Male",
        "race": "Human",
        "age": "3 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Kamado Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Giyu's Sister (Hiroko)",
        "gender": "Female",
        "race": "Human",
        "age": "15 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Tomioka Family",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "The Hand Demon (Final Selection)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Hand Manipulation)",
        "affiliation": "Demon",
        "firstArc": "Final Selection Arc"
    },
    {
        "name": "Kagaya Ubuyashiki",
        "gender": "Male",
        "race": "Human",
        "age": "30+",
        "fought": "None (Leader, non-combatant)",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Leader)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Amane Ubuyashiki",
        "gender": "Female",
        "race": "Human",
        "age": "28",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Wife)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Hinaki Ubuyashiki",
        "gender": "Female",
        "race": "Human",
        "age": "8",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Daughter)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Nichika Ubuyashiki",
        "gender": "Female",
        "race": "Human",
        "age": "8",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Daughter)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Kiriya Ubuyashiki",
        "gender": "Male",
        "race": "Human",
        "age": "15",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Son)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Kuina Ubuyashiki",
        "gender": "Female",
        "race": "Human",
        "age": "13",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Daughter)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Kanata Ubuyashiki",
        "gender": "Female",
        "race": "Human",
        "age": "11",
        "fought": "None",
        "style": "None",
        "affiliation": "Demon Slayer Corps (Kagaya's Daughter)",
        "firstArc": "Hashira Training Arc"
    },
    {
        "name": "Ruka Rengoku",
        "gender": "Female",
        "race": "Human",
        "age": "30+ (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Rengoku Family",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "Tengen's Swordsmith",
        "gender": "Male",
        "race": "Human",
        "age": "40+",
        "fought": "None",
        "style": "None",
        "affiliation": "Swordsmith Village",
        "firstArc": "Entertainment District Arc"
    },
    {
        "name": "Muichiro's Twin Brother (Yuichiro)",
        "gender": "Male",
        "race": "Human",
        "age": "14 (deceased)",
        "fought": "None",
        "style": "None",
        "affiliation": "Tokito Family",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Hantengu's Wife",
        "gender": "Female",
        "race": "Human",
        "age": "Unknown",
        "fought": "None",
        "style": "None",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Gyokko's Pot Demons",
        "gender": "Various",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Muichiro Tokito",
        "style": "Blood Demon Art",
        "affiliation": "Gyokko",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Enmu's Train Attendants (Demons)",
        "gender": "Various",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado, Zenitsu Agatsuma, Inosuke Hashibira",
        "style": "Blood Demon Art",
        "affiliation": "Enmu",
        "firstArc": "Mugen Train Arc"
    },
    {
        "name": "The Swamp Demon (Kidnapper's Bog)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Swamp Manipulation)",
        "affiliation": "Demon",
        "firstArc": "Kidnapper's Bog Arc"
    },
    {
        "name": "The Tsuzumi Mansion Demon (Kyogai)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art (Tsuzumi/Drum Manipulation)",
        "affiliation": "Demon",
        "firstArc": "Tsuzumi Mansion Arc"
    },
    {
        "name": "The Tongue Demon (Rehabilitation)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Zenitsu Agatsuma, Inosuke Hashibira",
        "style": "Blood Demon Art",
        "affiliation": "Demon",
        "firstArc": "Rehabilitation Training Arc"
    },
    {
        "name": "Muzan's Human Disguise (Asakusa)",
        "gender": "Male",
        "race": "Demon",
        "age": "1000+",
        "fought": "Yoriichi Tsugikuni",
        "style": "Blood Demon Art",
        "affiliation": "None",
        "firstArc": "Asakusa Arc"
    },
    {
        "name": "Doma's Followers (Demons)",
        "gender": "Various",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Shinobu Kocho, Kanao Tsuyuri",
        "style": "Blood Demon Art",
        "affiliation": "Douma",
        "firstArc": "Infinity Castle Arc"
    },
    {
        "name": "Hantengu's Original Body (Main)",
        "gender": "Male",
        "race": "Demon",
        "age": "Unknown",
        "fought": "Tanjiro Kamado",
        "style": "Blood Demon Art",
        "affiliation": "Hantengu",
        "firstArc": "Swordsmith Village Arc"
    },
    {
        "name": "Kokushibo's Swordsmanship (Technique)",
        "gender": "Male",
        "race": "Demon",
        "age": "500+",
        "fought": "All Hashira in Infinity Castle",
        "style": "Moon Breathing",
        "affiliation": "Demon (Upper Moon 1)",
        "firstArc": "Infinity Castle Arc"
    }
];

const arcOrder = {
    "Final Selection Arc":1,
    "Kidnapper's Bog Arc":2,
    "Asakusa Arc":3,
    "Tsuzumi Mansion Arc":4,
    "Mount Natagumo Arc":5,
    "Rehabilitation Training Arc":6,
    "Mugen Train Arc":7,
    "Entertainment District Arc":8,
    "Swordsmith Village Arc":9,
    "Hashira Training Arc":10,
    "Infinity Castle Arc":11,
    "Sunrise Countdown Arc":12
};

/* ==========================================
   DEMON SLAYER CHARACTER GUESS
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

/* ===========================
   STORY FILTER
=========================== */

let availableCharacters = characters;

if(isStoryMode && storyArc){

    availableCharacters =
    characters.filter(character=>{

        return character.firstArc===storyArc;

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

let raceHintShown = false;

/* ===========================
   LOCAL STATS
=========================== */

function getDSStat(key){

    return Number(
        localStorage.getItem(key)
    ) || 0;

}

function setDSStat(key,value){

    localStorage.setItem(
        key,
        value
    );

}

function addDSGuess(){

    setDSStat(

        "demonslayer_total_guesses",

        getDSStat(
            "demonslayer_total_guesses"
        )+1

    );

}

function addDSWin(){

    setDSStat(

        "demonslayer_total_wins",

        getDSStat(
            "demonslayer_total_wins"
        )+1

    );

}

function updateDSBestStreak(current){

    const best =
    getDSStat(
        "demonslayer_best_streak"
    );

    if(current>best){

        setDSStat(

            "demonslayer_best_streak",

            current

        );

    }

}

/* ===========================
   DOM
=========================== */

const input =
document.getElementById("guessInput");

const suggestions =
document.getElementById("suggestions");

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

        character.name
        .toLowerCase()
        .includes(value)

    );

    matches.forEach(character=>{

        const div =
        document.createElement("div");

        div.className =
        "suggestion";

        div.innerText =
        character.name;

        div.onclick=function(){

            input.value =
            character.name;

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

    const value =
    input.value
    .toLowerCase()
    .trim();

    const source =

    isStoryMode

    ? availableCharacters

    : characters;

    const matches =

    source.filter(character=>

        character.name
        .toLowerCase()
        .includes(value)

    );

    if(matches.length===1){

        input.value =
        matches[0].name;

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
   NUMBER DISPLAY
=========================== */

function numberDisplay(

    guess,

    secret

){

    const guessed =
    Number(guess);

    const target =
    Number(secret);

    if(guessed===target){

        return `
        <div class="correct">
        ${guess}
        </div>
        `;

    }

    if(guessed<target){

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
   ARC DISPLAY
=========================== */

function arcDisplay(

    guessArc,

    secretArc

){

    const guessPos =
    arcOrder[guessArc];

    const secretPos =
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

    if(guessPos===secretPos){

        return `
        <div class="correct">
        ${guessArc}
        </div>
        `;

    }

    if(guessPos<secretPos){

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

console.log("Demon Slayer Loaded");

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
secretCharacter.name
);

/* ==========================================
   DEMON SLAYER CHARACTER GUESS
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

    const user = session.user;

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
   PICK RANDOM STORY CHARACTER
=========================== */

function pickRandomStoryCharacter(completed=[]){

    const remaining =

    characters.filter(character=>{

        return(

            character.firstArc===storyArc &&

            !completed.includes(

                character.name

            )

        );

    });

    if(remaining.length===0){

        return null;

    }

    return remaining[
        Math.floor(
            Math.random() *
            remaining.length
        )
    ];

}

/* ===========================
   STORY CHARACTER COMPLETED
=========================== */

async function storyCharacterCompleted(){

    const completed =

    await loadCompletedCharacters(

        "demonslayer",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.firstArc===storyArc &&

            !completed.includes(

                character.name

            )

        );

    });

    secretCharacter =

    pickRandomStoryCharacter(

        completed

    );

    if(!secretCharacter){

        showStoryArcCompleted();

        return;

    }

    guessCount = 0;

    arcHintShown = false;

    raceHintShown = false;

    document.getElementById("guessCounter").innerText =
    "Guesses: 0";

    document.getElementById("resultBody").innerHTML = "";

    document.getElementById("arcStatus").innerText =
    "First Arc Hint: Locked";

    document.getElementById("raceStatus").innerText =
    "Race Hint: Locked";

    document.getElementById("arcHint").innerHTML =
    "Unlocks at 6 guesses";

    document.getElementById("raceHint").innerHTML =
    "Unlocks at 9 guesses";

    input.disabled = false;

    input.value = "";

    suggestions.innerHTML = "";

    input.focus();

}

/* ===========================
   ARC COMPLETE
=========================== */

function showStoryArcCompleted(){

    document.getElementById("winPopupText").innerHTML = `

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
   INITIALIZE STORY MODE
=========================== */

async function initializeStoryMode(){

    if(!isStoryMode || !storyArc){

        return;

    }

    const completed =

    await loadCompletedCharacters(

        "demonslayer",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.firstArc===storyArc &&

            !completed.includes(

                character.name

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

console.log("Demon Slayer Story Ready");

/* ==========================================
   DEMON SLAYER CHARACTER GUESS
   PHASE 3
========================================== */

/* ===========================
   SUBMIT GUESS
=========================== */

async function submitGuess(){

    const guess = input.value.trim();

    if(guess==="") return;

    const source =

    isStoryMode

    ? availableCharacters

    : characters;

    const character =

    source.find(character=>

        character.name.toLowerCase()===

        guess.toLowerCase()

    );

    if(!character){

        alert("Character not found!");

        return;

    }

    guessCount++;

    addDSGuess();

    document.getElementById("guessCounter").innerText =
    `Guesses: ${guessCount}`;

    if(guessCount>=6 && !arcHintShown){

        document.getElementById("arcStatus").innerText =
        "First Arc Hint: Available";

    }

    if(guessCount>=9 && !raceHintShown){

        document.getElementById("raceStatus").innerText =
        "Race Hint: Available";

    }

    const row=document.createElement("tr");

    row.innerHTML=`

        <td>

            <div class="${compare(character.name,secretCharacter.name)}">

                ${character.name}

            </div>

        </td>

        <td>

            <div class="${compare(character.gender,secretCharacter.gender)}">

                ${character.gender}

            </div>

        </td>

        <td>

            <div class="${compare(character.race,secretCharacter.race)}">

                ${character.race}

            </div>

        </td>

        <td>

            ${numberDisplay(character.age,secretCharacter.age)}

        </td>

        <td>

            <div class="${compare(character.fought,secretCharacter.fought)}">

                ${character.fought}

            </div>

        </td>

        <td>

            <div class="${compare(character.style,secretCharacter.style)}">

                ${character.style}

            </div>

        </td>

        <td>

            <div class="${compare(character.affiliation,secretCharacter.affiliation)}">

                ${character.affiliation}

            </div>

        </td>

        <td>

            ${arcDisplay(character.firstArc,secretCharacter.firstArc)}

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

    if(character.name===secretCharacter.name){

        if(isStoryMode){

            const saved =

            await saveStoryCharacter(

                "demonslayer",

                storyArc,

                secretCharacter.name

            );

            if(saved){

                const completed =

                await loadCompletedCharacters(

                    "demonslayer",

                    storyArc

                );

                input.disabled = true;

                document
                .getElementById("winPopupText")
                .innerHTML=`

                    🎉

                    <strong>

                    CHARACTER DISCOVERED!

                    </strong>

                    <br><br>

                    <span style="font-size:28px;color:#FFD54F">

                        ${secretCharacter.name}

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

            alert("First Arc Hint unlocks at 6 guesses.");

            return;

        }

        document.getElementById("arcHint").innerHTML=

        `<strong>${secretCharacter.firstArc}</strong>`;

        document.getElementById("arcStatus").innerText=

        "First Arc Hint: Revealed";

        arcHintShown=true;

        return;

    }

    if(!raceHintShown){

        if(guessCount<9){

            alert("Race Hint unlocks at 9 guesses.");

            return;

        }

        document.getElementById("raceHint").innerHTML=

        `<strong>${secretCharacter.race}</strong>`;

        document.getElementById("raceStatus").innerText=

        "Race Hint: Revealed";

        raceHintShown=true;

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

    addDSWin();

    updateDSBestStreak(streak);

    if(typeof syncSupabaseWin==="function"){

        syncSupabaseWin();

    }

    document.getElementById("streakCounter").innerText=

    `Streak: ${streak}`;

    document.getElementById("winPopupText").innerHTML=`

        ✅ Correct!

        <br><br>

        <strong>${secretCharacter.name}</strong>

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
   DEMON SLAYER CHARACTER GUESS
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

        <strong>${secretCharacter.name}</strong>

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

    /* ---------- STORY MODE ---------- */

    if(isStoryMode){

        await storyCharacterCompleted();

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

    raceHintShown = false;

    document.getElementById("guessCounter").innerText =
    "Guesses: 0";

    document.getElementById("resultBody").innerHTML = "";

    document.getElementById("arcStatus").innerText =
    "First Arc Hint: Locked";

    document.getElementById("raceStatus").innerText =
    "Race Hint: Locked";

    document.getElementById("arcHint").innerHTML =
    "Unlocks at 6 guesses";

    document.getElementById("raceHint").innerHTML =
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

        "demonslayer",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.firstArc===storyArc &&

            !completed.includes(

                character.name

            )

        );

    });

    if(availableCharacters.length===0){

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

    raceHintShown = false;

    document.getElementById("guessCounter").innerText =
    "Guesses: 0";

    document.getElementById("resultBody").innerHTML = "";

    document.getElementById("arcStatus").innerText =
    "First Arc Hint: Locked";

    document.getElementById("raceStatus").innerText =
    "Race Hint: Locked";

    document.getElementById("arcHint").innerHTML =
    "Unlocks at 6 guesses";

    document.getElementById("raceHint").innerHTML =
    "Unlocks at 9 guesses";

    input.disabled = false;

    input.value = "";

    suggestions.innerHTML = "";

    input.focus();

    console.log(

        "Next Story Character:",

        secretCharacter.name

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

        "demonslayer",

        storyArc

    );

    availableCharacters =

    characters.filter(character=>{

        return(

            character.firstArc===storyArc &&

            !completed.includes(

                character.name

            )

        );

    });

    if(availableCharacters.length===0){

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

console.log("Demon Slayer Engine Loaded");

console.log("Story Mode :",isStoryMode);

console.log("Story Arc :",storyArc);

console.log("Characters :",availableCharacters.length);

console.log("================================");