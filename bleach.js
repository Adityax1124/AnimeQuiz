const characters = [
    {
        "name": "Ichigo Kurosaki",
        "gender": "Male",
        "race": "Human / Shinigami / Hollow / Quincy",
        "age": 15,
        "height": "174 cm",
        "hairColor": "Orange",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Rukia Kuchiki",
        "gender": "Female",
        "race": "Shinigami",
        "age": "150+",
        "height": "144 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Orihime Inoue",
        "gender": "Female",
        "race": "Human",
        "age": 15,
        "height": "157 cm",
        "hairColor": "Orange",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Uryu Ishida",
        "gender": "Male",
        "race": "Quincy",
        "age": 15,
        "height": "171 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Yasutora Sado (Chad)",
        "gender": "Male",
        "race": "Human",
        "age": 15,
        "height": "183 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Kisuke Urahara",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "183 cm",
        "hairColor": "Blonde",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Yoruichi Shihoin",
        "gender": "Female",
        "race": "Shinigami",
        "age": "200+",
        "height": "156 cm",
        "hairColor": "Purple",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Isshin Kurosaki",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "186 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Tatsuki Arisawa",
        "gender": "Female",
        "race": "Human",
        "age": 15,
        "height": "165 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Keigo Asano",
        "gender": "Male",
        "race": "Human",
        "age": 15,
        "height": "168 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Mizuiro Kojima",
        "gender": "Male",
        "race": "Human",
        "age": 15,
        "height": "165 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Don Kanonji",
        "gender": "Male",
        "race": "Human",
        "age": "Unknown",
        "height": "185 cm",
        "hairColor": "Gray",
        "location": "Karakura Town",
        "firstArc": "Substitute Shinigami Arc"
    },
    {
        "name": "Byakuya Kuchiki",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Renji Abarai",
        "gender": "Male",
        "race": "Shinigami",
        "age": "150+",
        "height": "188 cm",
        "hairColor": "Red",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Toshiro Hitsugaya",
        "gender": "Male",
        "race": "Shinigami",
        "age": "100+",
        "height": "133 cm",
        "hairColor": "White",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Rangiku Matsumoto",
        "gender": "Female",
        "race": "Shinigami",
        "age": "150+",
        "height": "172 cm",
        "hairColor": "Blonde",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Kenpachi Zaraki",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "202 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Yachiru Kusajishi",
        "gender": "Female",
        "race": "Shinigami",
        "age": "100+",
        "height": "109 cm",
        "hairColor": "Pink",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Shunsui Kyoraku",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "192 cm",
        "hairColor": "Brown",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Jushiro Ukitake",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "187 cm",
        "hairColor": "White",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Genryusai Shigekuni Yamamoto",
        "gender": "Male",
        "race": "Shinigami",
        "age": "1000+",
        "height": "168 cm",
        "hairColor": "Gray",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Sajin Komamura",
        "gender": "Male",
        "race": "Shinigami (Wolf)", 
        "age": "200+",
        "height": "250 cm",
        "hairColor": "Brown",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Kaname Tosen",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "176 cm",
        "hairColor": "Brown",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Mayuri Kurotsuchi",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "174 cm",
        "hairColor": "Blue/White",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Nemu Kurotsuchi",
        "gender": "Female",
        "race": "Artificial Shinigami",
        "age": "50+",
        "height": "167 cm",
        "hairColor": "Pink",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Gin Ichimaru",
        "gender": "Male",
        "race": "Shinigami",
        "age": "130+",
        "height": "185 cm",
        "hairColor": "White",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Sosuke Aizen",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "186 cm",
        "hairColor": "Brown",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Tetsuzaemon Iba",
        "gender": "Male",
        "race": "Shinigami",
        "age": "120+",
        "height": "182 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Marechiyo Omaeda",
        "gender": "Male",
        "race": "Shinigami",
        "age": "130+",
        "height": "210 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Isane Kotetsu",
        "gender": "Female",
        "race": "Shinigami",
        "age": "100+",
        "height": "187 cm",
        "hairColor": "Blonde",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Kiyone Kotetsu",
        "gender": "Female",
        "race": "Shinigami",
        "age": "100+",
        "height": "157 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Sentaro Kotsubaki",
        "gender": "Male",
        "race": "Shinigami",
        "age": "100+",
        "height": "178 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Yumichika Ayasegawa",
        "gender": "Male",
        "race": "Shinigami",
        "age": "150+",
        "height": "169 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Ikkaku Madarame",
        "gender": "Male",
        "race": "Shinigami",
        "age": "150+",
        "height": "182 cm",
        "hairColor": "Bald",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Hanataro Yamada",
        "gender": "Male",
        "race": "Shinigami",
        "age": "100+",
        "height": "153 cm",
        "hairColor": "Brown",
        "location": "Soul Society",
        "firstArc": "Soul Society Arc"
    },
    {
        "name": "Grimmjow Jaegerjaquez",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "186 cm",
        "hairColor": "Blue",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Ulquiorra Cifer",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "169 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Tier Harribel",
        "gender": "Female",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "175 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Neliel Tu Oderschvank (Nel)",
        "gender": "Female",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "147 cm (child) / 176 cm (adult)",
        "hairColor": "Green",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Nnoitra Gilga",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "205 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Szayelaporro Granz",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "173 cm",
        "hairColor": "Pink",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Barragan Luisenbarn",
        "gender": "Male",
        "race": "Arrancar",
        "age": "1000+",
        "height": "190 cm",
        "hairColor": "Gray",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Aaroniero Arruruerie",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "193 cm",
        "hairColor": "White",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Zommari Rureaux",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Luppi Antenor",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "160 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Yammy Llargo",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "250 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Wonderweiss Margela",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "150 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Dondochakka Birstanne",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "200 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Pesche Guatiche",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "160 cm",
        "hairColor": "Brown",
        "location": "Hueco Mundo",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Shinji Hirako",
        "gender": "Male",
        "race": "Shinigami (Vizard)",
        "age": "150+",
        "height": "176 cm",
        "hairColor": "Blonde",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Mashiro Kuna",
        "gender": "Female",
        "race": "Shinigami (Vizard)",
        "age": "100+",
        "height": "153 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Love Aikawa",
        "gender": "Male",
        "race": "Shinigami (Vizard)",
        "age": "150+",
        "height": "188 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Rojuro Otoribashi (Rose)",
        "gender": "Male",
        "race": "Shinigami (Vizard)",
        "age": "150+",
        "height": "175 cm",
        "hairColor": "Blonde",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Hiyori Sarugaki",
        "gender": "Female",
        "race": "Shinigami (Vizard)",
        "age": "100+",
        "height": "133 cm",
        "hairColor": "Blonde",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Lisa Yadomaru",
        "gender": "Female",
        "race": "Shinigami (Vizard)",
        "age": "130+",
        "height": "162 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Kensei Muguruma",
        "gender": "Male",
        "race": "Shinigami (Vizard)",
        "age": "150+",
        "height": "177 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Tessai Tsukabishi",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "196 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Arrancar Arc"
    },
    {
        "name": "Coyote Starrk",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "183 cm",
        "hairColor": "Brown",
        "location": "Hueco Mundo",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Lilynette Gingerbuck",
        "gender": "Female",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "140 cm",
        "hairColor": "Brown",
        "location": "Hueco Mundo",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Jushiro Ukitake",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "187 cm",
        "hairColor": "White",
        "location": "Soul Society",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Chojiro Sasakibe",
        "gender": "Male",
        "race": "Shinigami",
        "age": "1000+",
        "height": "179 cm",
        "hairColor": "Gray",
        "location": "Soul Society",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Koga Kuchiki",
        "gender": "Male",
        "race": "Shinigami",
        "age": "200+",
        "height": "181 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Kazeshini (Hisagi's Zanpakuto)",
        "gender": "Male",
        "race": "Zanpakuto Spirit",
        "age": "Unknown",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Mue (Senna)",
        "gender": "Female",
        "race": "Spirit",
        "age": "Unknown",
        "height": "160 cm",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Fake Karakura Town Arc"
    },
    {
        "name": "Ashido Kano",
        "gender": "Male",
        "race": "Shinigami",
        "age": "150+",
        "height": "185 cm",
        "hairColor": "Brown",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Rudbornn Chelute",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "190 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Gantenbainne Mosqueda",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "205 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Chuhlhourne Punch",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "165 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Findorr Calius",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "170 cm",
        "hairColor": "Black",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Poison (Posion)",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "160 cm",
        "hairColor": "Green",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Charlotte Chuhlhourne",
        "gender": "Male",
        "race": "Arrancar",
        "age": "Unknown",
        "height": "178 cm",
        "hairColor": "Blonde",
        "location": "Hueco Mundo",
        "firstArc": "Hueco Mundo Arc"
    },
    {
        "name": "Yukio Hans Vorarlberna",
        "gender": "Male",
        "race": "Human (Fullbringer)",
        "age": 17,
        "height": "167 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Riruka Dokugamine",
        "gender": "Female",
        "race": "Human (Fullbringer)",
        "age": 17,
        "height": "148 cm",
        "hairColor": "Pink",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Jackie Tristan",
        "gender": "Female",
        "race": "Human (Fullbringer)",
        "age": 22,
        "height": "171 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Shukuro Tsukishima",
        "gender": "Male",
        "race": "Human (Fullbringer)",
        "age": "Unknown",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Giriko Kutsuzawa",
        "gender": "Male",
        "race": "Human (Fullbringer)",
        "age": 43,
        "height": "175 cm",
        "hairColor": "Brown",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Moe Shishigawara",
        "gender": "Male",
        "race": "Human (Fullbringer)",
        "age": 17,
        "height": "174 cm",
        "hairColor": "Blonde",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Aura Michibane",
        "gender": "Female",
        "race": "Human (Fullbringer)",
        "age": "Unknown",
        "height": "165 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Kugo Ginjo",
        "gender": "Male",
        "race": "Human (Fullbringer) / Substitute Shinigami",
        "age": "Unknown",
        "height": "182 cm",
        "hairColor": "Silver",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Shishigawara's Friend (Obuta)",
        "gender": "Male",
        "race": "Human",
        "age": 17,
        "height": "170 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Lost Agent Arc"
    },
    {
        "name": "Yhwach",
        "gender": "Male",
        "race": "Quincy",
        "age": "1200+",
        "height": "185 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Jugram Haschwalth",
        "gender": "Male",
        "race": "Quincy",
        "age": "1000+",
        "height": "185 cm",
        "hairColor": "Blonde",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Askin Nakk Le Vaar",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "185 cm",
        "hairColor": "Green",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Pernida Parnkgjas",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Gerard Valkyrie",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "250 cm",
        "hairColor": "Blonde",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Lille Barro",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "190 cm",
        "hairColor": "Brown",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Bambietta Basterbine",
        "gender": "Female",
        "race": "Quincy",
        "age": "Unknown",
        "height": "165 cm",
        "hairColor": "Brown",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Candice Catnipp",
        "gender": "Female",
        "race": "Quincy",
        "age": "Unknown",
        "height": "167 cm",
        "hairColor": "Blonde",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Gremmy Thoumeaux",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "170 cm",
        "hairColor": "Brown",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Bazz-B",
        "gender": "Male",
        "race": "Quincy",
        "age": "1000+",
        "height": "175 cm",
        "hairColor": "Red",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "As Nodt",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "170 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Quilge Opie",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "190 cm",
        "hairColor": "Blonde",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Nianzol Weizol",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "155 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "PePe Waccabrada",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "140 cm",
        "hairColor": "Gray",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Driscoll Berci",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "190 cm",
        "hairColor": "Brown",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Mask De Masculine",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "190 cm",
        "hairColor": "Blonde",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Cang Du",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "175 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "BG9",
        "gender": "Male",
        "race": "Quincy (Cyborg)",
        "age": "Unknown",
        "height": "250 cm",
        "hairColor": "Unknown",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Robert Accutrone",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "170 cm",
        "hairColor": "White",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "NaNaNa Najahkoop",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "180 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Shaz Domino",
        "gender": "Male",
        "race": "Quincy",
        "age": "Unknown",
        "height": "170 cm",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Ryuken Ishida",
        "gender": "Male",
        "race": "Quincy",
        "age": "40+",
        "height": "177 cm",
        "hairColor": "Black",
        "location": "Karakura Town",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Soken Ishida",
        "gender": "Male",
        "race": "Quincy",
        "age": "70+ (deceased)",
        "height": "170 cm",
        "hairColor": "Gray",
        "location": "Karakura Town",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Mimihagi",
        "gender": "Male",
        "race": "Spirit (Right Arm of the Soul King)",
        "age": "Unknown",
        "height": "Variable",
        "hairColor": "Black",
        "location": "Soul Society",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Pernida (Left Arm of the Soul King)",
        "gender": "Male",
        "race": "Spirit / Quincy",
        "age": "Unknown",
        "height": "Variable",
        "hairColor": "Black",
        "location": "Wandenreich",
        "firstArc": "Thousand-Year Blood War Arc"
    },
    {
        "name": "Soul King (Reio)",
        "gender": "Male",
        "race": "Unknown",
        "age": "1000+",
        "height": "Unknown",
        "hairColor": "Unknown",
        "location": "Soul Society",
        "firstArc": "Thousand-Year Blood War Arc"
    }
]

const arcOrder = {
    "Substitute Shinigami Arc":1,
    "Soul Society Arc":2,
    "Arrancar Arc":3,
    "Hueco Mundo Arc":4,
    "Fake Karakura Town Arc":5,
    "Lost Agent Arc":6,
    "Thousand-Year Blood War Arc":7
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
let raceHintShown = false;

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
    document.getElementById("guessCounter").innerText = `Guesses: ${guessCount}`;

    if(guessCount >= 6 && !arcHintShown){
        document.getElementById("arcStatus").innerText = "First Arc Hint: Available";
    }

    if(guessCount >= 9 && !raceHintShown){
        document.getElementById("raceStatus").innerText = "Race Hint: Available";
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><div class="${compare(character.name, secretCharacter.name)}">${character.name}</div></td>
        <td><div class="${compare(character.gender, secretCharacter.gender)}">${character.gender}</div></td>
        <td><div class="${compare(character.race, secretCharacter.race)}">${character.race}</div></td>
        <td>${numberDisplay(character.age, secretCharacter.age)}</td>
        <td>${numberDisplay(character.height, secretCharacter.height)}</td>
        <td><div class="${compare(character.hairColor, secretCharacter.hairColor)}">${character.hairColor}</div></td>
        <td><div class="${compare(character.location, secretCharacter.location)}">${character.location}</div></td>
        <td>${arcDisplay(character.firstArc, secretCharacter.firstArc)}</td>
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
            alert("First Arc hint unlocks at 6 guesses.");
            return;
        }

        document.getElementById("arcHint").innerHTML =
        `<strong>${secretCharacter.firstArc}</strong>`;

        document.getElementById("arcStatus").innerText =
        "First Arc Hint: Revealed";

        arcHintShown = true;
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
    raceHintShown = false;

    document.getElementById("guessCounter").innerText = "Guesses: 0";
    document.getElementById("arcStatus").innerText = "First Arc Hint: Locked";
    document.getElementById("raceStatus").innerText = "Race Hint: Locked";

    document.getElementById("arcHint").innerHTML = "Unlocks at 6 guesses";
    document.getElementById("raceHint").innerHTML = "Unlocks at 9 guesses";

    document.getElementById("resultBody").innerHTML = "";

    input.disabled = false;
    input.value = "";
    suggestions.innerHTML = "";
    input.focus();
}