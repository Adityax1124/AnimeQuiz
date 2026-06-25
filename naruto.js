const characters = [
    {
        "name": "Naruto Uzumaki",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Uzumaki Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu, Sage Jutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind, Earth, Lava, Magnet, Boil",
        "attributes": "Jinchuriki, Sage Mode, Six Paths",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Sasuke Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure, Otogakure, Akatsuki",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Kenjutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan, Rinnegan",
        "natureTypes": "Fire, Lightning, Wind",
        "attributes": "Curse Mark, Susanoo, Amaterasu",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Sakura Haruno",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Medical Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water, Yin",
        "attributes": "Chakra Enhanced Strength, Byakugou Seal",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Kakashi Hatake",
        "gender": "Male",
        "affiliations": "Konohagakure, ANBU",
        "clan": "Hatake Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "None (Sharingan implanted)",
        "natureTypes": "Lightning, Fire, Earth, Water, Wind",
        "attributes": "Copy Ninja, Mangekyo Sharingan, Susanoo",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Hinata Hyuga",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Hyuga Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Byakugan",
        "natureTypes": "Fire, Lightning",
        "attributes": "Gentle Fist, Twin Lion Fists, Hamura's Chakra",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Neji Hyuga",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Hyuga Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Byakugan",
        "natureTypes": "Fire, Earth, Water",
        "attributes": "Gentle Fist, Eight Trigrams Sixty-Four Palms",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Rock Lee",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Eight Gates, Drunken Fist",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Tenten",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Bukijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Weapons Specialist, Bashosen User",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Shikamaru Nara",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Nara Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Yin",
        "attributes": "Shadow Possession, Genius Strategist",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Ino Yamanaka",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Yamanaka Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Yang, Yin",
        "attributes": "Mind Transfer, Mind Body Switch",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Choji Akimichi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Akimichi Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth",
        "attributes": "Multi-Size Technique, Butterfly Mode",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Gaara",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Magnet Release",
        "natureTypes": "Wind, Earth, Magnet",
        "attributes": "Jinchuriki (One-Tail), Absolute Defense",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Temari",
        "gender": "Female",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Wind Release",
        "natureTypes": "Wind",
        "attributes": "Giant Fan User, Wind Scythe Jutsu",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Kankuro",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Puppetry",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Puppet Master, Sasori's Puppets User",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Jiraiya",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Senjutsu, Summoning",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water, Wind, Lightning",
        "attributes": "Sage Mode, Toad Summoner, Toad Sage",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Tsunade",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Senju Clan",
        "jutsuTypes": "Medical Ninjutsu, Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Lightning, Water, Earth, Fire",
        "attributes": "Byakugou Seal, Chakra Enhanced Strength, Hokage",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Orochimaru",
        "gender": "Male",
        "affiliations": "Konohagakure, Otogakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Genjutsu, Kinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Wind, Lightning, Water, Yin, Yang",
        "attributes": "White Snake, Curse Marks, Immortality",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Itachi Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure, Akatsuki",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan",
        "natureTypes": "Fire, Water, Wind, Yin, Yang",
        "attributes": "Susanoo, Amaterasu, Tsukuyomi, Yata Mirror, Totsuka Blade",
        "debutArc": "Sasuke Recovery Mission"
    },
    {
        "name": "Kisame Hoshigaki",
        "gender": "Male",
        "affiliations": "Kirigakure, Akatsuki",
        "clan": "Hoshigaki Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth, Wind",
        "attributes": "Samehada, Chakra Absorption, Shark Jutsu",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Pain (Nagato)",
        "gender": "Male",
        "affiliations": "Amegakure, Akatsuki",
        "clan": "Uzumaki Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Rinnegan Jutsu",
        "kekkeiGenkai": "Rinnegan",
        "natureTypes": "All Nature Types",
        "attributes": "Six Paths of Pain, Chibaku Tensei, Shinra Tensei",
        "debutArc": "Pain's Assault"
    },
    {
        "name": "Konan",
        "gender": "Female",
        "affiliations": "Amegakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth",
        "attributes": "Paper Jutsu, Explosive Tags",
        "debutArc": "Pain's Assault"
    },
    {
        "name": "Shisui Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure, ANBU",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan",
        "natureTypes": "Fire, Wind, Lightning",
        "attributes": "Kotoamatsukami, Body Flicker, Susanoo",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Minato Namikaze",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Namikaze Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu, Fuinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind, Lightning, Yang",
        "attributes": "Flying Thunder God, Rasengan, Kurama Jinchuriki, Sage Mode",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Kushina Uzumaki",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Uzumaki Clan",
        "jutsuTypes": "Ninjutsu, Fuinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind, Water, Lightning",
        "attributes": "Jinchuriki (Nine-Tails), Adamantine Chains",
        "debutArc": "Pain's Assault"
    },
    {
        "name": "Madara Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure, Akatsuki",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan, Rinnegan",
        "natureTypes": "Fire, Wind, Lightning, Earth, Water, Yin, Yang",
        "attributes": "Susanoo, Perfect Susanoo, Kurama Control, Wood Style",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Hashirama Senju",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Senju Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu",
        "kekkeiGenkai": "Wood Release",
        "natureTypes": "Earth, Water, Wood, Fire, Wind, Lightning",
        "attributes": "Sage Mode, Wood Golem, Shinsu Senju, Hokage",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Tobirama Senju",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Senju Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Fuinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind, Water, Lightning, Earth",
        "attributes": "Flying Thunder God, Edo Tensei, Shadow Clone, Hokage",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Hiruzen Sarutobi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Sarutobi Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "All Nature Types",
        "attributes": "Monkey Summoning, Reaper Death Seal, Hokage",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Danzo Shimura",
        "gender": "Male",
        "affiliations": "Konohagakure, ANBU, Root",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Genjutsu, Fuinjutsu",
        "kekkeiGenkai": "None (Sharingan implanted)",
        "natureTypes": "Fire, Wind, Lightning, Earth, Water",
        "attributes": "Izanagi, Kotoamatsukami, Curse Marks",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Kabuto Yakushi",
        "gender": "Male",
        "affiliations": "Konohagakure, Otogakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Medical Ninjutsu, Ninjutsu, Kinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water, Lightning",
        "attributes": "Sage Mode, Edo Tensei, DNA Integration",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Sai",
        "gender": "Male",
        "affiliations": "Konohagakure, ANBU, Root",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water, Lightning, Wind",
        "attributes": "Super Beast Scroll, Ink Jutsu, Emotionless",
        "debutArc": "Tenchi Bridge Reconnaissance Mission"
    },
    {
        "name": "Yamato (Tenzo)",
        "gender": "Male",
        "affiliations": "Konohagakure, ANBU, Root",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Wood Release",
        "natureTypes": "Earth, Water, Wood",
        "attributes": "Wood Style, Hashirama Cells, Anbu Captain",
        "debutArc": "Tenchi Bridge Reconnaissance Mission"
    },
    {
        "name": "Killer Bee",
        "gender": "Male",
        "affiliations": "Kumogakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu, Kenjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Lightning, Water, Fire, Earth",
        "attributes": "Jinchuriki (Eight-Tails), Hachimon Tonko, Lariat, Rapper",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "A (Fourth Raikage)",
        "gender": "Male",
        "affiliations": "Kumogakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Lightning, Earth, Fire, Water, Wind",
        "attributes": "Lightning Armor, Lariat, Brutal Strength",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Onoki",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Particle Release",
        "natureTypes": "Earth, Fire, Wind, Lightning, Water, Dust",
        "attributes": "Jinton (Particle Style), Earth Golem, Flight, Tsuchikage",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Mei Terumi",
        "gender": "Female",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Boil Release, Lava Release",
        "natureTypes": "Fire, Earth, Water, Lightning, Wind, Boil, Lava",
        "attributes": "Twin Kekkei Genkai, Melting Jutsu, Mizukage",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Kurotsuchi",
        "gender": "Female",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Lava Release",
        "natureTypes": "Fire, Earth, Water, Lava",
        "attributes": "Tsuchikage, Granddaughter of Onoki",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Chojuro",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Kenjutsu, Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth, Lightning",
        "attributes": "Swordsman of the Mist, Hiramekarei User, Mizukage",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Darui",
        "gender": "Male",
        "affiliations": "Kumogakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Kenjutsu, Taijutsu",
        "kekkeiGenkai": "Storm Release",
        "natureTypes": "Lightning, Water, Storm",
        "attributes": "Black Panther, Raikage's Right Hand, Gale Style",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Obito Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure, Akatsuki",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan, Rinnegan",
        "natureTypes": "Fire, Wind, Water, Earth, Lightning, Yin, Yang",
        "attributes": "Kamui, Six Paths, Jinchuriki (Ten-Tails), Susanoo",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Zetsu (Black Zetsu)",
        "gender": "Male",
        "affiliations": "Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water, Yin",
        "attributes": "Spore Jutsu, Mayfly, Kaguya's Will",
        "debutArc": "Akatsuki Suppression Mission"
    },
    {
        "name": "Zetsu (White Zetsu)",
        "gender": "Male",
        "affiliations": "Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water",
        "attributes": "Spore Jutsu, Mayfly, Clone Army",
        "debutArc": "Akatsuki Suppression Mission"
    },
    {
        "name": "Deidara",
        "gender": "Male",
        "affiliations": "Iwagakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Explosion Release",
        "natureTypes": "Earth, Lightning, Fire, Explosion",
        "attributes": "Clay Explosives, C0-C4, Art is an Explosion",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Sasori",
        "gender": "Male",
        "affiliations": "Sunagakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Puppetry",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water, Wind",
        "attributes": "Puppet Master, Human Puppet, Hiruko, Third Kazekage Puppet",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Hidan",
        "gender": "Male",
        "affiliations": "Yugakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind",
        "attributes": "Immortality, Jashin Curse, Voodoo Ritual",
        "debutArc": "Akatsuki Suppression Mission"
    },
    {
        "name": "Kakuzu",
        "gender": "Male",
        "affiliations": "Takigakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind, Lightning, Earth, Water",
        "attributes": "Earth Grudge Fear, Five Hearts, Immortality",
        "debutArc": "Akatsuki Suppression Mission"
    },
    {
        "name": "Might Guy",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Lightning",
        "attributes": "Eight Gates (Seventh Gate, Eighth Gate), Daytime Tiger, Night Guy",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Asuma Sarutobi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Sarutobi Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Wind",
        "attributes": "Chakra Blades, Flying Swallow, Asuma's Will",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Kurenai Yuhi",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Genjutsu, Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Yin",
        "attributes": "Master Genjutsu User, Tree Binding Death",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Iruka Umino",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Water",
        "attributes": "Academy Instructor, Naruto's Father Figure",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Mizuki",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Traitor, Fuma Shuriken",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Zabuza Momochi",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Kenjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Demon of the Hidden Mist, Silent Killing, Executioner's Blade",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Haku",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "Yuki Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Ice Release",
        "natureTypes": "Water, Wind, Ice",
        "attributes": "Demonic Mirroring Ice Crystals, One-Handed Seals",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Third Hokage (Hiruzen)",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Sarutobi Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "All Nature Types",
        "attributes": "Monkey King Enma, Reaper Death Seal, Shadow Shuriken",
        "debutArc": "Land of Waves"
    },
    {
        "name": "Ebisu",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth",
        "attributes": "Academy Instructor, Konohamaru's Mentor",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Konohamaru Sarutobi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Sarutobi Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu, Genjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind, Earth",
        "attributes": "Rasengan, Shadow Clone, Sarutobi Legacy",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Might Duy",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Eight Gates (Eighth Gate), Guy's Father",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Rin Nohara",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Medical Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth",
        "attributes": "Kakashi's Teammate, Sanbi Jinchuriki",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Sakumo Hatake",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Hatake Clan",
        "jutsuTypes": "Ninjutsu, Kenjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Lightning",
        "attributes": "White Fang of Konoha, Kakashi's Father",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Fugaku Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu",
        "kekkeiGenkai": "Sharingan",
        "natureTypes": "Fire",
        "attributes": "Uchiha Clan Head, Sasuke's Father",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Mikoto Uchiha",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Sharingan",
        "natureTypes": "Fire",
        "attributes": "Sasuke's Mother, Itachi's Mother",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Izuna Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan",
        "natureTypes": "Fire",
        "attributes": "Madara's Brother, Susanoo",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Kagami Uchiha",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Uchiha Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu",
        "kekkeiGenkai": "Sharingan",
        "natureTypes": "Fire",
        "attributes": "Tobirama's Teammate, Shisui's Ancestor",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Torifu Akimichi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Akimichi Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Tobirama's Teammate, Akimichi Ancestor",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Hashimura Sarutobi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Sarutobi Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire",
        "attributes": "Tobirama's Teammate",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Mito Uzumaki",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Uzumaki Clan",
        "jutsuTypes": "Ninjutsu, Fuinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Wind",
        "attributes": "First Jinchuriki of Nine-Tails, Hashirama's Wife",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Homura Mitokado",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth",
        "attributes": "Council Elder, Hiruzen's Teammate",
        "debutArc": "Konoha Crush"
    },
    {
        "name": "Koharu Utatane",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind",
        "attributes": "Council Elder, Hiruzen's Teammate",
        "debutArc": "Konoha Crush"
    },
    {
        "name": "Kosuke Maruboshi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire",
        "attributes": "Eternal Genin, 50+ Years Service",
        "debutArc": "Boruto Era"
    },
    {
        "name": "Nawaki Senju",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Senju Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Water",
        "attributes": "Tsunade's Younger Brother, Senju Legacy",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Dan Kato",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth",
        "attributes": "Tsunade's Lover, Spirit Transformation Jutsu",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Shibi Aburame",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Aburame Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water",
        "attributes": "Aburame Clan Head, Shino's Father",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Shino Aburame",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Aburame Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water, Wind",
        "attributes": "Destruction Bugs, Bug Jutsu, Silent Killer",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Kiba Inuzuka",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Inuzuka Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth",
        "attributes": "Fang Over Fang, Akamaru Partner, Beast Transformation",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Akamaru",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Inuzuka Clan (Ninken)",
        "jutsuTypes": "None",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Ninken, Kiba's Partner, Sensing",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Hinata's Father (Hiashi Hyuga)",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Hyuga Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Byakugan",
        "natureTypes": "Fire, Earth",
        "attributes": "Hyuga Clan Head, Gentle Fist, Air Palm",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Hizashi Hyuga",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Hyuga Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Byakugan",
        "natureTypes": "Fire, Earth",
        "attributes": "Neji's Father, Cursed Seal, Sacrificed for Peace",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Hanabi Hyuga",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Hyuga Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Byakugan",
        "natureTypes": "Fire, Lightning",
        "attributes": "Hinata's Sister, Hyuga Heiress",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Hayate Gekko",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Kenjutsu, Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Sword User, Proctor, Ill",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Yugao Uzuki",
        "gender": "Female",
        "affiliations": "Konohagakure, ANBU",
        "clan": "None",
        "jutsuTypes": "Kenjutsu, Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind, Fire",
        "attributes": "ANBU Member, Hayate's Girlfriend",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Genma Shiranui",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind",
        "attributes": "Senbon User, Former Hokage Guard",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Raido Namiashi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Kenjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Lightning",
        "attributes": "Former Hokage Guard",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Iwashi Tatami",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth",
        "attributes": "Former Hokage Guard",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Kotetsu Hagane",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire",
        "attributes": "Gate Guard, Chunin",
        "debutArc": "Konoha Crush"
    },
    {
        "name": "Izumo Kamizuki",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Gate Guard, Chunin",
        "debutArc": "Konoha Crush"
    },
    {
        "name": "Shikaku Nara",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Nara Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Yin",
        "attributes": "Nara Clan Head, Shikamaru's Father, Genius Strategist",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Yoshino Nara",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "Nara Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire",
        "attributes": "Shikamaru's Mother",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Inoichi Yamanaka",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Yamanaka Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Yin",
        "attributes": "Yamanaka Clan Head, Ino's Father, Mind Transfer",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Choza Akimichi",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Akimichi Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Akimichi Clan Head, Choji's Father, Butterfly Mode",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Mebuki Haruno",
        "gender": "Female",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "None",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Sakura's Mother",
        "debutArc": "Boruto Era"
    },
    {
        "name": "Kizashi Haruno",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "None",
        "jutsuTypes": "None",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Sakura's Father",
        "debutArc": "Boruto Era"
    },
    {
        "name": "Pakura",
        "gender": "Female",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Scorch Release",
        "natureTypes": "Fire, Wind, Scorch",
        "attributes": "Scorch Style User, Hero of Suna",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Gari",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Explosion Release",
        "natureTypes": "Earth, Lightning, Explosion",
        "attributes": "Explosion Corps, Onoki's Teammate",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Muu",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Particle Release",
        "natureTypes": "Earth, Fire, Wind, Lightning, Water, Dust",
        "attributes": "Second Tsuchikage, Invisibility, Jinton",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Gengetsu Hozuki",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "Hozuki Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Fire, Earth",
        "attributes": "Second Mizukage, Clam Summoning, Steam Jutsu",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Rasa",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "Magnet Release",
        "natureTypes": "Wind, Earth, Magnet",
        "attributes": "Fourth Kazekage, Gaara's Father, Gold Dust",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Yagura Karatachi",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Fourth Mizukage, Jinchuriki (Three-Tails), Obito's Puppet",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Utakata",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Water",
        "attributes": "Jinchuriki (Six-Tails), Bubble Jutsu",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Han",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Boil Release",
        "natureTypes": "Fire, Water, Boil",
        "attributes": "Jinchuriki (Five-Tails), Steam Armor",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Roshi",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "Lava Release",
        "natureTypes": "Fire, Earth, Lava",
        "attributes": "Jinchuriki (Four-Tails), Lava Armor",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Fuu",
        "gender": "Female",
        "affiliations": "Takigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind",
        "attributes": "Jinchuriki (Seven-Tails), Clan Leader, Hero of Taki",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Ikkaku",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Gaara's Teammate, Bodyguard",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Elder Chiyo",
        "gender": "Female",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Puppetry, Medical Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water",
        "attributes": "Grandmaster Puppeteer, Sasori's Grandmother, Chikamatsu",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Ebizo",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Elder, Chiyo's Brother, Information Specialist",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Baki",
        "gender": "Male",
        "affiliations": "Sunagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Sunagakure Jonin, Gaara's Sensei",
        "debutArc": "Chunin Exams"
    },
    {
        "name": "Yura",
        "gender": "Male",
        "affiliations": "Sunagakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Kenjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Sunagakure Jonin, Itachi's Spy, Deidara's Pawn",
        "debutArc": "Kazekage Rescue Mission"
    },
    {
        "name": "Shin",
        "gender": "Male",
        "affiliations": "Konohagakure, Root",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Sai's Brother, Root Member",
        "debutArc": "Tenchi Bridge Reconnaissance Mission"
    },
    {
        "name": "Nono Yakushi",
        "gender": "Female",
        "affiliations": "Konohagakure, Root",
        "clan": "None",
        "jutsuTypes": "Medical Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Kabuto's Adopted Mother, Root Member",
        "debutArc": "Tenchi Bridge Reconnaissance Mission"
    },
    {
        "name": "Jugo",
        "gender": "Male",
        "affiliations": "Otogakure, Akatsuki",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Earth, Water",
        "attributes": "Curse Mark Origin, Sage Transformation, Sasuke's Ally",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Suigetsu Hozuki",
        "gender": "Male",
        "affiliations": "Kirigakure, Otogakure",
        "clan": "Hozuki Clan",
        "jutsuTypes": "Ninjutsu, Kenjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Liquefication, Zabuza's Successor, Sword of the Mist",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Karin",
        "gender": "Female",
        "affiliations": "Otogakure, Konohagakure",
        "clan": "Uzumaki Clan",
        "jutsuTypes": "Medical Ninjutsu, Sensor Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Yang",
        "attributes": "Healing Bite, Sensor, Uzumaki Bloodline",
        "debutArc": "Itachi Pursuit Mission"
    },
    {
        "name": "Cee",
        "gender": "Male",
        "affiliations": "Kumogakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Sensor Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Lightning",
        "attributes": "Raikage's Bodyguard, Sensor",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Ao",
        "gender": "Male",
        "affiliations": "Kirigakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Sensor Ninjutsu",
        "kekkeiGenkai": "Byakugan (Implanted)",
        "natureTypes": "Water, Lightning",
        "attributes": "Mizukage's Bodyguard, Byakugan User",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Fuu (Kumogakure)",
        "gender": "Male",
        "affiliations": "Kumogakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Lightning",
        "attributes": "Raikage's Bodyguard",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Mifune",
        "gender": "Male",
        "affiliations": "Land of Iron",
        "clan": "None",
        "jutsuTypes": "Kenjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Samurai Leader, Sword Saint",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Tsuchikage's Son (Akatsuchi)",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Onoki's Bodyguard, Stone Golem",
        "debutArc": "Five Kage Summit"
    },
    {
        "name": "Kurotsuchi's Partner (Kitsuchi)",
        "gender": "Male",
        "affiliations": "Iwagakure",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Onoki's Son, Kurotsuchi's Father",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Toneri Otsutsuki",
        "gender": "Male",
        "affiliations": "Moon",
        "clan": "Otsutsuki Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu, Kenjutsu, Puppetry",
        "kekkeiGenkai": "Byakugan, Tenseigan",
        "natureTypes": "Fire, Wind, Earth, Water, Lightning, Yin, Yang",
        "attributes": "Moon's Prince, Tenseigan Chakra Mode, Golden Wheel Reincarnation",
        "debutArc": "Boruto Era"
    },
    {
        "name": "Hagoromo Otsutsuki",
        "gender": "Male",
        "affiliations": "None",
        "clan": "Otsutsuki Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu",
        "kekkeiGenkai": "Rinnegan",
        "natureTypes": "All Nature Types",
        "attributes": "Sage of Six Paths, Ten-Tails Jinchuriki, Creator of Ninshu",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Hamura Otsutsuki",
        "gender": "Male",
        "affiliations": "Moon",
        "clan": "Otsutsuki Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu",
        "kekkeiGenkai": "Byakugan, Tenseigan",
        "natureTypes": "All Nature Types",
        "attributes": "Sage of Six Paths' Brother, Byakugan Master",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Kaguya Otsutsuki",
        "gender": "Female",
        "affiliations": "None",
        "clan": "Otsutsuki Clan",
        "jutsuTypes": "Ninjutsu, Genjutsu",
        "kekkeiGenkai": "Byakugan, Rinnegan, Rinne Sharingan",
        "natureTypes": "All Nature Types",
        "attributes": "Ten-Tails Origin, Rabbit Goddess, Infinite Tsukuyomi, All-Killing Ash Bones",
        "debutArc": "Kaguya Otsutsuki Strikes"
    },
    {
        "name": "Indra Otsutsuki",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Otsutsuki Clan, Uchiha Clan Ancestor",
        "jutsuTypes": "Ninjutsu, Genjutsu, Taijutsu",
        "kekkeiGenkai": "Sharingan, Mangekyo Sharingan",
        "natureTypes": "Fire, Lightning, Wind",
        "attributes": "Susanoo, Amaterasu, Tsukuyomi",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Ashura Otsutsuki",
        "gender": "Male",
        "affiliations": "Konohagakure",
        "clan": "Otsutsuki Clan, Senju Clan Ancestor",
        "jutsuTypes": "Ninjutsu, Senjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "All Nature Types",
        "attributes": "Sage Mode, Six Paths Chakra, Wood Style",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Hidan's God (Jashin)",
        "gender": "Unknown",
        "affiliations": "None",
        "clan": "None",
        "jutsuTypes": "None",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "God of Jashinism, Immortality Bestower",
        "debutArc": "Akatsuki Suppression Mission"
    },
    {
        "name": "Gamabunta",
        "gender": "Male",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Water",
        "attributes": "Chief Toad, Boss Summon, Oil Jutsu",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Gamatatsu",
        "gender": "Male",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Gamabunta's Son, Gamakichi's Brother",
        "debutArc": "Sasuke Recovery Mission"
    },
    {
        "name": "Gamakichi",
        "gender": "Male",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind, Water",
        "attributes": "Naruto's Summon, Gamabunta's Son",
        "debutArc": "Sasuke Recovery Mission"
    },
    {
        "name": "Gerotora",
        "gender": "Male",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Fuinjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "None",
        "attributes": "Scroll Toad, Key to Kurama's Seal",
        "debutArc": "Pain's Assault"
    },
    {
        "name": "Shima (Toad)",
        "gender": "Female",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind",
        "attributes": "Toad Sage, Jiraiya's Summon, Fukasaku's Wife",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Fukasaku (Toad)",
        "gender": "Male",
        "affiliations": "Mount Myoboku",
        "clan": "Toad Clan",
        "jutsuTypes": "Ninjutsu, Senjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Fire, Wind, Water",
        "attributes": "Toad Sage, Jiraiya's Summon, Naruto's Trainer",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Manda",
        "gender": "Male",
        "affiliations": "Ryuchi Cave",
        "clan": "Snake Clan",
        "jutsuTypes": "Ninjutsu, Taijutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth, Water",
        "attributes": "Snake Boss, Orochimaru's Summon",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Aoda",
        "gender": "Male",
        "affiliations": "Ryuchi Cave",
        "clan": "Snake Clan",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Earth",
        "attributes": "Sasuke's Summon, Snake",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Katsuyu",
        "gender": "Female",
        "affiliations": "Shikkotsu Forest",
        "clan": "Slug Clan",
        "jutsuTypes": "Medical Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water",
        "attributes": "Slug Boss, Tsunade's Summon, Healing",
        "debutArc": "Search for Tsunade"
    },
    {
        "name": "Saiken",
        "gender": "Male",
        "affiliations": "None",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Water, Earth",
        "attributes": "Six-Tails, Jinchuriki (Utakata), Slug Beast",
        "debutArc": "Fourth Shinobi World War"
    },
    {
        "name": "Chomei",
        "gender": "Male",
        "affiliations": "None",
        "clan": "None",
        "jutsuTypes": "Ninjutsu",
        "kekkeiGenkai": "None",
        "natureTypes": "Wind",
        "attributes": "Seven-Tails, Jinchuriki (Fuu), Giant Beetle",
        "debutArc": "Fourth Shinobi World War"
    }
];


const arcOrder = {
    "Land of Waves":1,
    "Chunin Exams":2,
    "Konoha Crush":3,
    "Search for Tsunade":4,
    "Sasuke Recovery Mission":5,
    "Kazekage Rescue Mission":6,
    "Tenchi Bridge Reconnaissance Mission":7,
    "Akatsuki Suppression Mission":8,
    "Itachi Pursuit Mission":9,
    "Pain's Assault":10,
    "Five Kage Summit":11,
    "Fourth Shinobi World War":12,
    "Kaguya Otsutsuki Strikes":13,
    "Sasuke Shinden":14,
    "Boruto Era":15
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
let natureHintShown = false;

function getNarutoStat(key){
    return Number(localStorage.getItem(key)) || 0;
}

function setNarutoStat(key, value){
    localStorage.setItem(key, value);
}

function addNarutoGuess(){
    const total = getNarutoStat("naruto_total_guesses");
    setNarutoStat("naruto_total_guesses", total + 1);
}

function updateNarutoBestStreak(currentStreak){
    const best = getNarutoStat("naruto_best_streak");

    if(currentStreak > best){
        setNarutoStat("naruto_best_streak", currentStreak);
    }
}

const input = document.getElementById("guessInput");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", function(){

    const value = input.value.toLowerCase().trim();
    suggestions.innerHTML = "";

    if(value === "") return;

    const matches = characters.filter(character =>
        character.name.toLowerCase().includes(value)
    );

    matches.forEach(character => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.innerText = character.name;

        div.onclick = function(){
            input.value = character.name;
            suggestions.innerHTML = "";
        };

        suggestions.appendChild(div);
    });
});

input.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const value = input.value.toLowerCase().trim();

    const matches = characters.filter(character =>
        character.name.toLowerCase().includes(value)
    );

    if(matches.length === 1){
        input.value = matches[0].name;
    }

    submitGuess();
});

function compare(a, b){
    return a === b ? "correct" : "wrong";
}

function compareList(guessValue, secretValue){

    const guessText = guessValue.toLowerCase().trim();
    const secretText = secretValue.toLowerCase().trim();

    if(guessText === secretText){
        return "correct";
    }

    const guessList = guessText
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    const secretList = secretText
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    if(guessList.length === 0 || secretList.length === 0){
        return "wrong";
    }

    if(guessList.length === 1 && guessList[0] === "none" && secretList.length === 1 && secretList[0] === "none"){
        return "correct";
    }

    if(guessList.length === 1 && guessList[0] === "none"){
        return "wrong";
    }

    if(secretList.length === 1 && secretList[0] === "none"){
        return "wrong";
    }

    const hasShared = guessList.some(item => secretList.includes(item));

    if(hasShared){
        return "partial";
    }

    return "wrong";
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
        character.name.toLowerCase() === guess.toLowerCase()
    );

    if(!character){
        alert("Character not found!");
        return;
    }

guessCount++;
addNarutoGuess();
document.getElementById("guessCounter").innerText = `Guesses: ${guessCount}`;
function addNarutoWin(){
    const wins = getNarutoStat("naruto_total_wins");
    setNarutoStat("naruto_total_wins", wins + 1);
}
    if(guessCount >= 6 && !arcHintShown){
        document.getElementById("arcStatus").innerText = "Debut Arc Hint: Available";
    }

    if(guessCount >= 9 && !natureHintShown){
        document.getElementById("natureStatus").innerText = "Nature Hint: Available";
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><div class="${compare(character.name, secretCharacter.name)}">${character.name}</div></td>
        <td><div class="${compare(character.gender, secretCharacter.gender)}">${character.gender}</div></td>
        <td><div class="${compareList(character.affiliations, secretCharacter.affiliations)}">${character.affiliations}</div></td>
        <td><div class="${compare(character.clan, secretCharacter.clan)}">${character.clan}</div></td>
        <td><div class="${compareList(character.jutsuTypes, secretCharacter.jutsuTypes)}">${character.jutsuTypes}</div></td>
        <td><div class="${compareList(character.kekkeiGenkai, secretCharacter.kekkeiGenkai)}">${character.kekkeiGenkai}</div></td>
        <td><div class="${compareList(character.natureTypes, secretCharacter.natureTypes)}">${character.natureTypes}</div></td>
        <td><div class="${compareList(character.attributes, secretCharacter.attributes)}">${character.attributes}</div></td>
        <td>${arcDisplay(character.debutArc, secretCharacter.debutArc)}</td>
    `;

    if(character.name === secretCharacter.name){
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
            alert("Debut Arc hint unlocks at 6 guesses.");
            return;
        }

        document.getElementById("arcHint").innerHTML =
        `<strong>${secretCharacter.debutArc}</strong>`;

        document.getElementById("arcStatus").innerText =
        "Debut Arc Hint: Revealed";

        arcHintShown = true;
        return;
    }

    if(!natureHintShown){

        if(guessCount < 9){
            alert("Nature Types hint unlocks at 9 guesses.");
            return;
        }

        document.getElementById("natureHint").innerHTML =
        `<strong>${secretCharacter.natureTypes}</strong>`;

        document.getElementById("natureStatus").innerText =
        "Nature Hint: Revealed";

        natureHintShown = true;
        return;
    }

    alert("All hints unlocked.");
}

function showWinMessage(){

    input.disabled = true;

    streak++;
    addNarutoWin();
    updateNarutoBestStreak(streak);
    syncSupabaseWin();
    document.getElementById("streakCounter").innerText =
    `Streak: ${streak}`;

    document.getElementById("winPopupText").innerHTML = `
        Correct! The answer was <strong>${secretCharacter.name}</strong><br>
        Guesses this round: <strong>${guessCount}</strong><br>
        Current Streak: <strong>${streak}</strong>
    `;

    document
    .getElementById("winPopup")
    .classList.remove("hidden");
}
function addNarutoWin(){
    const wins = getNarutoStat("naruto_total_wins");
    setNarutoStat("naruto_total_wins", wins + 1);
}
function giveUp(){

    input.disabled = true;

    streak = 0;
    document.getElementById("streakCounter").innerText =
    "Streak: 0";

    document.getElementById("winPopupText").innerHTML = `
        You gave up.<br>
        The secret character was <strong>${secretCharacter.name}</strong><br>
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
    natureHintShown = false;

    document.getElementById("guessCounter").innerText = "Guesses: 0";
    document.getElementById("arcStatus").innerText = "Debut Arc Hint: Locked";
    document.getElementById("natureStatus").innerText = "Nature Hint: Locked";

    document.getElementById("arcHint").innerHTML = "Unlocks at 6 guesses";
    document.getElementById("natureHint").innerHTML = "Unlocks at 9 guesses";

    document.getElementById("resultBody").innerHTML = "";

    input.disabled = false;
    input.value = "";
    suggestions.innerHTML = "";
    input.focus();
}
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