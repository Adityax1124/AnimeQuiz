const characters = [
    {
        "name": "Monkey D. Luffy",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "Hito-Hito no Mi, Model: Nika",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "3000000000",
        "height": "174",
        "origin": "East Blue",
        "firstArc": "Romance Dawn"
    },
    {
        "name": "Nami",
        "gender": "Female",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "366000000",
        "height": "170",
        "origin": "East Blue",
        "firstArc": "Orange Town"
    },
    {
        "name": "Usopp",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "None",
        "haki": "Observation",
        "bounty": "500000000",
        "height": "176",
        "origin": "East Blue",
        "firstArc": "Syrup Village"
    },
    {
        "name": "Sanji",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "1032000000",
        "height": "180",
        "origin": "North Blue",
        "firstArc": "Baratie"
    },
    {
        "name": "Tony Tony Chopper",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "Hito-Hito no Mi",
        "haki": "None",
        "bounty": "1000",
        "height": "90",
        "origin": "Grand Line",
        "firstArc": "Drum Island"
    },
    {
        "name": "Nico Robin",
        "gender": "Female",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "Hana-Hana no Mi",
        "haki": "None",
        "bounty": "930000000",
        "height": "188",
        "origin": "West Blue",
        "firstArc": "Water 7"
    },
    {
        "name": "Franky",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "394000000",
        "height": "240",
        "origin": "South Blue",
        "firstArc": "Water 7"
    },
    {
        "name": "Brook",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "Yomi-Yomi no Mi",
        "haki": "None",
        "bounty": "383000000",
        "height": "277",
        "origin": "West Blue",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Jinbe",
        "gender": "Male",
        "affiliation": "Straw Hat Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "1100000000",
        "height": "301",
        "origin": "Fish-Man Island",
        "firstArc": "Impel Down"
    },
    {
        "name": "Shanks",
        "gender": "Male",
        "affiliation": "Red Hair Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "4048900000",
        "height": "199",
        "origin": "West Blue",
        "firstArc": "Romance Dawn"
    },
    {
        "name": "Buggy",
        "gender": "Male",
        "affiliation": "Buggy Pirates",
        "devilFruit": "Bara-Bara no Mi",
        "haki": "None",
        "bounty": "3189000000",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Orange Town"
    },
    {
        "name": "Dracule Mihawk",
        "gender": "Male",
        "affiliation": "Cross Guild",
        "devilFruit": "None",
        "haki": "Observation, Armament (Conqueror implied)",
        "bounty": "3590000000",
        "height": "198",
        "origin": "Unknown",
        "firstArc": "Baratie"
    },
    {
        "name": "Crocodile",
        "gender": "Male",
        "affiliation": "Cross Guild",
        "devilFruit": "Suna-Suna no Mi",
        "haki": "Unknown",
        "bounty": "1965000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Alabasta"
    },
    {
        "name": "Portgas D. Ace",
        "gender": "Male",
        "affiliation": "Whitebeard Pirates",
        "devilFruit": "Mera-Mera no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "550000000",
        "height": "Unknown",
        "origin": "South Blue",
        "firstArc": "Alabasta"
    },
    {
        "name": "Sabo",
        "gender": "Male",
        "affiliation": "Revolutionary Army",
        "devilFruit": "Mera-Mera no Mi",
        "haki": "Observation, Armament",
        "bounty": "602000000",
        "height": "187",
        "origin": "East Blue",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Trafalgar D. Water Law",
        "gender": "Male",
        "affiliation": "Heart Pirates",
        "devilFruit": "Ope-Ope no Mi",
        "haki": "Observation, Armament",
        "bounty": "3000000000",
        "height": "Unknown",
        "origin": "North Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Eustass Kid",
        "gender": "Male",
        "affiliation": "Kid Pirates",
        "devilFruit": "Jiki-Jiki no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "3000000000",
        "height": "Unknown",
        "origin": "South Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Boa Hancock",
        "gender": "Female",
        "affiliation": "Kuja Pirates",
        "devilFruit": "Mero-Mero no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "1659000000",
        "height": "Unknown",
        "origin": "Amazon Lily",
        "firstArc": "Amazon Lily"
    },
    {
        "name": "Donquixote Doflamingo",
        "gender": "Male",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Ito-Ito no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "340000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Jaya"
    },
    {
        "name": "Gecko Moria",
        "gender": "Male",
        "affiliation": "Thriller Bark Pirates",
        "devilFruit": "Kage-Kage no Mi",
        "haki": "Unknown",
        "bounty": "320000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Bartholomew Kuma",
        "gender": "Male",
        "affiliation": "Revolutionary Army",
        "devilFruit": "Nikyu-Nikyu no Mi",
        "haki": "Unknown",
        "bounty": "296000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Jewelry Bonney",
        "gender": "Female",
        "affiliation": "Bonney Pirates",
        "devilFruit": "Toshi-Toshi no Mi",
        "haki": "Armament",
        "bounty": "320000000",
        "height": "Unknown",
        "origin": "South Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Basil Hawkins",
        "gender": "Male",
        "affiliation": "Hawkins Pirates",
        "devilFruit": "Wara-Wara no Mi",
        "haki": "Observation, Armament",
        "bounty": "320000000",
        "height": "Unknown",
        "origin": "North Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Scratchmen Apoo",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Oto-Oto no Mi",
        "haki": "Observation, Armament",
        "bounty": "350000000",
        "height": "Unknown",
        "origin": "Grand Line",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "X. Drake",
        "gender": "Male",
        "affiliation": "SWORD",
        "devilFruit": "Ryu-Ryu no Mi, Model: Allosaurus",
        "haki": "Unknown",
        "bounty": "222000000",
        "height": "233",
        "origin": "North Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Killer",
        "gender": "Male",
        "affiliation": "Kid Pirates",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "200000000",
        "height": "Unknown",
        "origin": "South Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Urouge",
        "gender": "Male",
        "affiliation": "Urouge Pirates",
        "devilFruit": "Unknown",
        "haki": "Unknown",
        "bounty": "108000000",
        "height": "Unknown",
        "origin": "Sky Island",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Capone Bege",
        "gender": "Male",
        "affiliation": "Fire Tank Pirates",
        "devilFruit": "Shiro-Shiro no Mi",
        "haki": "Unknown",
        "bounty": "350000000",
        "height": "Unknown",
        "origin": "West Blue",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Charlotte Katakuri",
        "gender": "Male",
        "affiliation": "Big Mom Pirates",
        "devilFruit": "Mochi-Mochi no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "1057000000",
        "height": "Unknown",
        "origin": "Grand Line",
        "firstArc": "Whole Cake Island"
    },
    {
        "name": "Charlotte Cracker",
        "gender": "Male",
        "affiliation": "Big Mom Pirates",
        "devilFruit": "Bisu-Bisu no Mi",
        "haki": "Observation, Armament",
        "bounty": "860000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Whole Cake Island"
    },
    {
        "name": "Charlotte Perospero",
        "gender": "Male",
        "affiliation": "Big Mom Pirates",
        "devilFruit": "Pero-Pero no Mi",
        "haki": "Unknown",
        "bounty": "700000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Whole Cake Island"
    },
    {
        "name": "Charlotte Smoothie",
        "gender": "Female",
        "affiliation": "Big Mom Pirates",
        "devilFruit": "Shibo-Shibo no Mi",
        "haki": "Unknown",
        "bounty": "932000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Whole Cake Island"
    },
    {
        "name": "Marco",
        "gender": "Male",
        "affiliation": "Whitebeard Pirates",
        "devilFruit": "Tori-Tori no Mi, Model: Phoenix",
        "haki": "Observation, Armament",
        "bounty": "1374000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Marineford"
    },
    {
        "name": "Edward Newgate (Whitebeard)",
        "gender": "Male",
        "affiliation": "Whitebeard Pirates",
        "devilFruit": "Gura-Gura no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "5046000000",
        "height": "666",
        "origin": "Unknown",
        "firstArc": "Marineford"
    },
    {
        "name": "Gol D. Roger",
        "gender": "Male",
        "affiliation": "Roger Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "5564800000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Loguetown"
    },
    {
        "name": "Silvers Rayleigh",
        "gender": "Male",
        "affiliation": "Roger Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Akainu (Sakazuki)",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "Magu-Magu no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Marineford"
    },
    {
        "name": "Aokiji (Kuzan)",
        "gender": "Male",
        "affiliation": "Marines (former)",
        "devilFruit": "Hie-Hie no Mi",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Water 7"
    },
    {
        "name": "Kizaru (Borsalino)",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "Pika-Pika no Mi",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Fujitora (Issho)",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "Zushi-Zushi no Mi",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Ryokugyu (Aramaki)",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "Mori-Mori no Mi",
        "haki": "Unknown",
        "bounty": "None",
        "height": "308",
        "origin": "South Blue",
        "firstArc": "Wano"
    },
    {
        "name": "Kaido",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Uo Uo no Mi, Model: Seiryu",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "4611100000",
        "height": "710",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Charlotte Linlin (Big Mom)",
        "gender": "Female",
        "affiliation": "Big Mom Pirates",
        "devilFruit": "Soru-Soru no Mi",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "4388000000",
        "height": "880",
        "origin": "Unknown",
        "firstArc": "Whole Cake Island"
    },
    {
        "name": "Marshall D. Teach (Blackbeard)",
        "gender": "Male",
        "affiliation": "Blackbeard Pirates",
        "devilFruit": "Yami-Yami no Mi, Gura-Gura no Mi",
        "haki": "Observation, Armament",
        "bounty": "3996000000",
        "height": "344",
        "origin": "Unknown",
        "firstArc": "Jaya"
    },
    {
        "name": "King",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Ryu-Ryu no Mi, Model: Pteranodon",
        "haki": "Observation, Armament",
        "bounty": "1390000000",
        "height": "613",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Queen",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Ryu-Ryu no Mi, Model: Brachiosaurus",
        "haki": "Observation, Armament",
        "bounty": "1320000000",
        "height": "612",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Jack",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Zou-Zou no Mi, Model: Mammoth",
        "haki": "Observation, Armament",
        "bounty": "1000000000",
        "height": "830",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Yamato",
        "gender": "Female",
        "affiliation": "Beasts Pirates (former)",
        "devilFruit": "Inu Inu no Mi, Model: Okuchi no Makami",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "None",
        "height": "263",
        "origin": "Unclear",
        "firstArc": "Wano"
    },
    {
        "name": "Who's Who",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Neko-Neko no Mi, Model: Saber Tiger",
        "haki": "Observation, Armament",
        "bounty": "546000000",
        "height": "336",
        "origin": "North Blue",
        "firstArc": "Wano"
    },
    {
        "name": "Black Maria",
        "gender": "Female",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Kumo-Kumo no Mi, Model: Rosamygale Grauvogeli",
        "haki": "Observation, Armament",
        "bounty": "480000000",
        "height": "820",
        "origin": "Wano",
        "firstArc": "Wano"
    },
    {
        "name": "Sasaki",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Ryu-Ryu no Mi, Model: Triceratops",
        "haki": "Observation, Armament",
        "bounty": "472000000",
        "height": "318",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Ulti",
        "gender": "Female",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Ryu-Ryu no Mi, Model: Pachycephalosaurus",
        "haki": "Observation, Armament",
        "bounty": "400000000",
        "height": "173",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Page One",
        "gender": "Male",
        "affiliation": "Beasts Pirates",
        "devilFruit": "Ryu-Ryu no Mi, Model: Spinosaurus",
        "haki": "Observation, Armament",
        "bounty": "290000000",
        "height": "171",
        "origin": "Grand Line",
        "firstArc": "Wano"
    },
    {
        "name": "Kurozumi Orochi",
        "gender": "Male",
        "affiliation": "Kurozumi Clan",
        "devilFruit": "Hebi-Hebi no Mi, Model: Yamata no Orochi",
        "haki": "None",
        "bounty": "None",
        "height": "350",
        "origin": "Wano",
        "firstArc": "Wano"
    },
    {
        "name": "Kozuki Oden",
        "gender": "Male",
        "affiliation": "Kozuki Clan",
        "devilFruit": "None",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Wano",
        "firstArc": "Wano"
    },
    {
        "name": "Denjiro",
        "gender": "Male",
        "affiliation": "Wano Country",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "None",
        "height": "306",
        "origin": "Wano",
        "firstArc": "Wano"
    },
    {
        "name": "Komurasaki",
        "gender": "Female",
        "affiliation": "Wano Country",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Wano",
        "firstArc": "Wano"
    },
    {
        "name": "Caribou",
        "gender": "Male",
        "affiliation": "Caribou Pirates",
        "devilFruit": "Numa-Numa no Mi",
        "haki": "Unknown",
        "bounty": "210000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Coribou",
        "gender": "Male",
        "affiliation": "Caribou Pirates",
        "devilFruit": "Unknown",
        "haki": "Unknown",
        "bounty": "190000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Bellamy",
        "gender": "Male",
        "affiliation": "Bellamy Pirates",
        "devilFruit": "Bane-Bane no Mi",
        "haki": "Observation, Armament",
        "bounty": "195000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Jaya"
    },
    {
        "name": "Don Chinjao",
        "gender": "Male",
        "affiliation": "Chinjao Family",
        "devilFruit": "None",
        "haki": "Observation, Armament, Conqueror",
        "bounty": "542000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Sai",
        "gender": "Male",
        "affiliation": "Chinjao Family",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "210000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Bartolomeo",
        "gender": "Male",
        "affiliation": "Barto Club",
        "devilFruit": "Bari-Bari no Mi",
        "haki": "Unknown",
        "bounty": "200000000",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Cavendish",
        "gender": "Male",
        "affiliation": "Beautiful Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "330000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Orlumbus",
        "gender": "Male",
        "affiliation": "Yonta Maria Grand Fleet",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "148000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Hajrudin",
        "gender": "Male",
        "affiliation": "New Giant Warrior Pirates",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Elbaf",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Leo",
        "gender": "Male",
        "affiliation": "Tonta Corps",
        "devilFruit": "None",
        "haki": "Unknown",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Dressrosa",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Foxy",
        "gender": "Male",
        "affiliation": "Foxy Pirates",
        "devilFruit": "Noro-Noro no Mi",
        "haki": "None",
        "bounty": "24000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Long Ring Long Land"
    },
    {
        "name": "Kuro",
        "gender": "Male",
        "affiliation": "Black Cat Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "16000000",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Syrup Village"
    },
    {
        "name": "Don Krieg",
        "gender": "Male",
        "affiliation": "Krieg Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "17000000",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Baratie"
    },
    {
        "name": "Arlong",
        "gender": "Male",
        "affiliation": "Arlong Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "20000000",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Arlong Park"
    },
    {
        "name": "Alvida",
        "gender": "Female",
        "affiliation": "Alvida Pirates",
        "devilFruit": "Sube-Sube no Mi",
        "haki": "None",
        "bounty": "5000000",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Romance Dawn"
    },
    {
        "name": "Cabaji",
        "gender": "Male",
        "affiliation": "Buggy Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Orange Town"
    },
    {
        "name": "Mohji",
        "gender": "Male",
        "affiliation": "Buggy Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Orange Town"
    },
    {
        "name": "Kuroobi",
        "gender": "Male",
        "affiliation": "Arlong Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "9000000",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Arlong Park"
    },
    {
        "name": "Chew",
        "gender": "Male",
        "affiliation": "Arlong Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "5500000",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Arlong Park"
    },
    {
        "name": "Hatchan",
        "gender": "Male",
        "affiliation": "Arlong Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "8000000",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Arlong Park"
    },
    {
        "name": "Smoker",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "Moku-Moku no Mi",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Loguetown"
    },
    {
        "name": "Tashigi",
        "gender": "Female",
        "affiliation": "Marines",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "East Blue",
        "firstArc": "Loguetown"
    },
    {
        "name": "Galdino (Mr. 3)",
        "gender": "Male",
        "affiliation": "Baroque Works",
        "devilFruit": "Doru-Doru no Mi",
        "haki": "None",
        "bounty": "24000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Little Garden"
    },
    {
        "name": "Bentham (Mr. 2)",
        "gender": "Male",
        "affiliation": "Baroque Works",
        "devilFruit": "Mane-Mane no Mi",
        "haki": "None",
        "bounty": "32000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Alabasta"
    },
    {
        "name": "Daz Bonez (Mr. 1)",
        "gender": "Male",
        "affiliation": "Baroque Works",
        "devilFruit": "Supi-Supi no Mi",
        "haki": "Observation, Armament",
        "bounty": "75000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Alabasta"
    },
    {
        "name": "Zala (Miss Doublefinger)",
        "gender": "Female",
        "affiliation": "Baroque Works",
        "devilFruit": "Toge-Toge no Mi",
        "haki": "None",
        "bounty": "35000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Alabasta"
    },
    {
        "name": "Marianne (Miss Goldenweek)",
        "gender": "Female",
        "affiliation": "Baroque Works",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "29000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Little Garden"
    },
    {
        "name": "Enel",
        "gender": "Male",
        "affiliation": "Skypiea",
        "devilFruit": "Goro-Goro no Mi",
        "haki": "Observation (Mantra)",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Skypiea",
        "firstArc": "Skypiea"
    },
    {
        "name": "Wyper",
        "gender": "Male",
        "affiliation": "Shandia",
        "devilFruit": "None",
        "haki": "Observation (Mantra)",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Skypiea",
        "firstArc": "Skypiea"
    },
    {
        "name": "Rob Lucci",
        "gender": "Male",
        "affiliation": "CP0",
        "devilFruit": "Neko-Neko no Mi, Model: Leopard",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Water 7"
    },
    {
        "name": "Kaku",
        "gender": "Male",
        "affiliation": "CP0",
        "devilFruit": "Ushi-Ushi no Mi, Model: Giraffe",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Water 7"
    },
    {
        "name": "Jyabura",
        "gender": "Male",
        "affiliation": "CP9",
        "devilFruit": "Inu-Inu no Mi, Model: Wolf",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Water 7"
    },
    {
        "name": "Blueno",
        "gender": "Male",
        "affiliation": "CP9",
        "devilFruit": "Doa-Doa no Mi",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Water 7"
    },
    {
        "name": "Iceburg",
        "gender": "Male",
        "affiliation": "Galley-La Company",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Water 7",
        "firstArc": "Water 7"
    },
    {
        "name": "Tom",
        "gender": "Male",
        "affiliation": "Tom's Workers",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Water 7"
    },
    {
        "name": "Perona",
        "gender": "Female",
        "affiliation": "Thriller Bark Pirates",
        "devilFruit": "Horo-Horo no Mi",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Absalom",
        "gender": "Male",
        "affiliation": "Thriller Bark Pirates",
        "devilFruit": "Suke-Suke no Mi",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Hogback",
        "gender": "Male",
        "affiliation": "Thriller Bark Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Cindry",
        "gender": "Female",
        "affiliation": "Thriller Bark Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Thriller Bark"
    },
    {
        "name": "Emporio Ivankov",
        "gender": "Male",
        "affiliation": "Revolutionary Army",
        "devilFruit": "Horu-Horu no Mi",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Impel Down"
    },
    {
        "name": "Inazuma",
        "gender": "Non-binary",
        "affiliation": "Revolutionary Army",
        "devilFruit": "Choki-Choki no Mi",
        "haki": "Unknown",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Impel Down"
    },
    {
        "name": "Sentomaru",
        "gender": "Male",
        "affiliation": "Marines",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Sabaody Archipelago"
    },
    {
        "name": "Hody Jones",
        "gender": "Male",
        "affiliation": "New Fish-Man Pirates",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Vander Decken IX",
        "gender": "Male",
        "affiliation": "Flying Pirates",
        "devilFruit": "Mato-Mato no Mi",
        "haki": "Unknown",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Fisher Tiger",
        "gender": "Male",
        "affiliation": "Sun Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "230000000",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Shirahoshi",
        "gender": "Female",
        "affiliation": "Ryugu Kingdom",
        "devilFruit": "None",
        "haki": "None",
        "bounty": "None",
        "height": "Unknown",
        "origin": "Fish-Man Island",
        "firstArc": "Fish-Man Island"
    },
    {
        "name": "Caesar Clown",
        "gender": "Male",
        "affiliation": "None",
        "devilFruit": "Gasu-Gasu no Mi",
        "haki": "None",
        "bounty": "300000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Punk Hazard"
    },
    {
        "name": "Monet",
        "gender": "Female",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Yuki-Yuki no Mi",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Punk Hazard"
    },
    {
        "name": "Vergo",
        "gender": "Male",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "None",
        "haki": "Observation, Armament",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Punk Hazard"
    },
    {
        "name": "Sugar",
        "gender": "Female",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Hobi-Hobi no Mi",
        "haki": "None",
        "bounty": "Unknown",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Trebol",
        "gender": "Male",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Beta-Beta no Mi",
        "haki": "Observation, Armament",
        "bounty": "99000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Diamante",
        "gender": "Male",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Hira-Hira no Mi",
        "haki": "Observation, Armament",
        "bounty": "99000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
        "name": "Pica",
        "gender": "Male",
        "affiliation": "Donquixote Pirates",
        "devilFruit": "Ishi-Ishi no Mi",
        "haki": "Observation, Armament",
        "bounty": "99000000",
        "height": "Unknown",
        "origin": "Unknown",
        "firstArc": "Dressrosa"
    },
    {
    name:"Zoro",
    gender:"Male",
    affiliation:"Straw Hat Pirates",
    devilFruit:"None",
    haki:"Observation, Armament, Conqueror",
    bounty:"1111000000",
    height:"181",
    origin:"East Blue",
    firstArc:"Romance Dawn"
}
];

const arcOrder = {
    "Romance Dawn": 1,
    "Orange Town": 2,
    "Syrup Village": 3,
    "Baratie": 4,
    "Arlong Park": 5,
    "Loguetown": 6,
    "Little Garden": 7,
    "Drum Island": 8,
    "Alabasta": 9,
    "Jaya": 10,
    "Skypiea": 11,
    "Long Ring Long Land": 12,
    "Water 7": 13,
    "Thriller Bark": 14,
    "Sabaody Archipelago": 15,
    "Amazon Lily": 16,
    "Impel Down": 17,
    "Marineford": 18,
    "Fish-Man Island": 19,
    "Punk Hazard": 20,
    "Dressrosa": 21,
    "Whole Cake Island": 22,
    "Wano": 23,
    "Wano Country": 24,
    "Egghead": 25
};

let secretCharacter = characters[Math.floor(Math.random() * characters.length)];
let guessCount = 0;
let arcHintShown = false;
let hakiHintShown = false;

const input = document.getElementById("guessInput");
const suggestions = document.getElementById("suggestions");

// --- Auto-suggest ---
input.addEventListener("input", function() {
    const value = input.value.toLowerCase().trim();
    suggestions.innerHTML = "";

    if (value === "") return;

    const matches = characters.filter(character =>
        character.name.toLowerCase().includes(value)
    );

    matches.forEach(character => {
        const div = document.createElement("div");
        div.className = "suggestion";
        div.innerText = character.name;
        div.onclick = function() {
            input.value = character.name;
            suggestions.innerHTML = "";
            input.focus();
        };
        suggestions.appendChild(div);
    });
});

// --- Enter key ---
input.addEventListener("keydown", function(e) {
    if (e.key !== "Enter") return;

    const value = input.value.toLowerCase().trim();
    const matches = characters.filter(character =>
        character.name.toLowerCase().includes(value)
    );

    if (matches.length === 1) {
        input.value = matches[0].name;
    }

    submitGuess();
});

// --- Comparison helpers ---
function compare(a, b) {
    return a === b ? "correct" : "wrong";
}

function compareHaki(guessHaki, secretHaki) {
    const guessList = guessHaki.toLowerCase().split(",").map(h => h.trim());
    const secretList = secretHaki.toLowerCase().split(",").map(h => h.trim());

    const exactMatch = guessList.length === secretList.length &&
                       guessList.every(h => secretList.includes(h));

    if (exactMatch) return "correct";

    const sharedHaki = guessList.some(h => secretList.includes(h));
    return sharedHaki ? "partial" : "wrong";
}

function bountyDisplay(guess, secret) {
    const guessed = Number(guess);
    const target = Number(secret);

    if (guessed === target) return `<span class="correct">${guess}</span>`;
    if (guessed < target) return `<span class="wrong">${guess} ⬆️</span>`;
    return `<span class="wrong">${guess} ⬇️</span>`;
}

function heightDisplay(guess, secret) {
    const guessed = Number(guess);
    const target = Number(secret);

    if (guessed === target) return `<span class="correct">${guess}</span>`;
    if (guessed < target) return `<span class="wrong">${guess} ⬆️</span>`;
    return `<span class="wrong">${guess} ⬇️</span>`;
}

function arcDisplay(guessArc, secretArc) {
    const guessPos = arcOrder[guessArc];
    const secretPos = arcOrder[secretArc];

    if (!guessPos || !secretPos) return `<span class="wrong">${guessArc} ❓</span>`;

    if (guessPos === secretPos) return `<span class="correct">${guessArc}</span>`;
    if (guessPos < secretPos) return `<span class="wrong">${guessArc} ➡️</span>`;
    return `<span class="wrong">${guessArc} ⬅️</span>`;
}

// --- Submit guess ---
function submitGuess() {
    const guess = input.value.trim();

    if (guess === "") {
        alert("Please enter a character name.");
        return;
    }

    const character = characters.find(c =>
        c.name.toLowerCase() === guess.toLowerCase()
    );

    if (!character) {
        alert("Character not found! Try using the autocomplete suggestions.");
        return;
    }

    guessCount++;

    document.getElementById("guessCounter").innerText = `Guesses: ${guessCount}`;

    // Hints unlock logic
    if (guessCount >= 6 && !arcHintShown) {
        document.getElementById("arcStatus").innerText = "Arc Hint: Available";
    }

    if (guessCount >= 9 && !hakiHintShown) {
        document.getElementById("hakiStatus").innerText = "Haki Hint: Available";
    }

    const row = document.createElement("tr");

    // IMPORTANT: These MUST be in the SAME ORDER as your table headers!
    // Headers: Character | Gender | Affiliation | Devil Fruit | Haki | Bounty | Height | Origin | First Arc
    row.innerHTML = `
    <td><div class="${compare(character.name, secretCharacter.name)}">${character.name}</div></td>
    <td><div class="${compare(character.gender, secretCharacter.gender)}">${character.gender}</div></td>
    <td><div class="${compare(character.affiliation, secretCharacter.affiliation)}">${character.affiliation}</div></td>
    <td><div class="${compare(character.devilFruit, secretCharacter.devilFruit)}">${character.devilFruit}</div></td>
    <td><div class="${compareHaki(character.haki, secretCharacter.haki)}">${character.haki}</div></td>
    <td>${bountyDisplay(character.bounty, secretCharacter.bounty)}</td>
    <td>${heightDisplay(character.height, secretCharacter.height)}</td>
    <td><div class="${compare(character.origin, secretCharacter.origin)}">${character.origin}</div></td>
    <td>${arcDisplay(character.firstArc, secretCharacter.firstArc)}</td>
`;

    // Check win condition BEFORE appending
    if (character.name === secretCharacter.name) {
        input.value = "";
        suggestions.innerHTML = "";
        showWinMessage();
        return;
    }

    document.getElementById("resultBody").prepend(row);
    input.value = "";
    suggestions.innerHTML = "";
    input.focus();
}

// --- Hints ---
function showHint() {
    if (!arcHintShown) {
        if (guessCount < 6) {
            alert("Arc hint unlocks at 6 guesses.");
            return;
        }

        document.getElementById("arcHint").innerHTML = `<strong>${secretCharacter.firstArc}</strong>`;
        document.getElementById("arcStatus").innerText = "Arc Hint: Revealed";
        arcHintShown = true;
        return;
    }

    if (!hakiHintShown) {
        if (guessCount < 9) {
            alert("Haki hint unlocks at 9 guesses.");
            return;
        }

        document.getElementById("hakiHint").innerHTML = `<strong>${secretCharacter.haki}</strong>`;
        document.getElementById("hakiStatus").innerText = "Haki Hint: Revealed";
        hakiHintShown = true;
        return;
    }

    alert("All hints already unlocked.");
}

// --- Win ---
function showWinMessage() {
    input.disabled = true;

    document.getElementById("winPopupText").innerHTML = `
        🎉 You got it!<br>
        The answer was <strong>${secretCharacter.name}</strong><br>
        Total Guesses: <strong>${guessCount}</strong>
    `;

    document.getElementById("winPopup").classList.remove("hidden");
}

// --- Restart ---
function continueStreak() {
    document.getElementById("winPopup").classList.add("hidden");

    secretCharacter = characters[Math.floor(Math.random() * characters.length)];
    guessCount = 0;
    arcHintShown = false;
    hakiHintShown = false;

    document.getElementById("guessCounter").innerText = "Guesses: 0";
    document.getElementById("arcStatus").innerText = "Arc Hint: Locked";
    document.getElementById("hakiStatus").innerText = "Haki Hint: Locked";
    document.getElementById("arcHint").innerHTML = "Unlocks at 6 guesses";
    document.getElementById("hakiHint").innerHTML = "Unlocks at 9 guesses";
    document.getElementById("resultBody").innerHTML = "";

    input.disabled = false;
    input.value = "";
    suggestions.innerHTML = "";
    input.focus();
}