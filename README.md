# Anime Guesser 🎌⚔️

Anime Guesser is a browser-based anime character guessing game built with **HTML, CSS, JavaScript, and Supabase**.
Players can test their anime knowledge by guessing characters from multiple anime universes, unlock ranks through correct guesses, view their profile stats, and even challenge friends in a **real-time 1v1 duel mode**.

---

## ✨ Features

### 🎮 Single Player Guessing

Play character guessing modes across multiple anime worlds:

* **One Piece**
* **Naruto**
* **Bleach**
* **Demon Slayer**
* **Dragon Ball Z**
* **Attack on Titan**

Each mode challenges the player to guess the hidden character using comparison-based hints.

---

### 🏆 Rank Progression System

Your rank increases based on **correct guesses**.

#### Current Rank Ladder

| Correct Guesses | Rank           |
| --------------- | -------------- |
| 0–49            | Unranked       |
| 50–99           | Rookie Guesser |
| 100–149         | Scout          |
| 150–199         | Slayer         |
| 200–249         | Shinobi        |
| 250–299         | Soul Reaper    |
| 300–349         | Saiyan         |
| 350–399         | Titan Hunter   |
| 400–449         | Pirate Captain |
| 450–499         | Anime Master   |
| 500+            | Anime God      |

---

### 👤 Player Profile

Each player has a profile page that tracks:

* Total guesses across all anime
* Best streaks
* Current rank
* Rank icon / rank showcase

---

### 🌐 Online Login + Leaderboard

The game uses **Supabase Authentication** and **Supabase Database** to support:

* account signup/login
* online player profiles
* synced wins and rank
* global leaderboard

---

### ⚔️ 1v1 Duel Mode

Anime Guesser also includes a **real-time multiplayer duel mode**.

#### Duel Features

* Create private duel rooms
* Join using a room code
* Choose an anime mode
* Both players guess the same hidden character
* First correct guess wins
* Give Up button supported
* Live result sync between both players

---

## 🧩 How the Guessing System Works

Each guess compares the selected character against the hidden target character.

Depending on the anime, attributes can include:

* gender
* affiliation
* race
* devil fruit / powers
* arc / debut arc
* bounty / episode / age / height
* clan / nature type / fighting style
* and more

### Hint Colors

* **Green** → Correct match
* **Orange** → Close / partially matching numeric value
* **Red** → Wrong

---

## 🛠️ Tech Stack

### Frontend

* **HTML**
* **CSS**
* **JavaScript**

### Backend / Database / Auth

* **Supabase**

  * Authentication
  * Realtime match sync
  * Profiles table
  * Matches table
  * Leaderboard data

---

## 📂 Project Structure

```bash
AnimeGuesser/
│
├── index.html                # Splash / intro page
├── home.html                 # Main anime selection page
├── login.html                # Login page
├── signup.html               # Signup page
├── profile.html              # Player profile
├── leaderboard.html          # Global leaderboard
├── duel.html                 # 1v1 duel lobby
├── duel-match.html           # Live duel match page
│
├── onepiece.html
├── naruto.html
├── bleach.html
├── demonslayer.html
├── dbz.html
├── aot.html
│
├── style.css
├── profile.css
├── leaderboard.css
├── duel.css
├── duel-match.css
│
├── profile.js
├── leaderboard.js
├── duel.js
├── duel-match.js
├── wins-sync.js
├── backbutton.js
│
├── onepiece-data.js
├── naruto-data.js
├── bleach-data.js
├── demonslayer-data.js
├── dbz-data.js
├── aot-data.js
│
└── supabase.js
```

---

## 🗄️ Supabase Tables

### `profiles`

Stores player data such as:

* `id`
* `username`
* `total_wins`
* `current_rank`
* timestamps

### `matches`

Stores duel room data such as:

* `id`
* `room_code`
* `host_id`
* `guest_id`
* `anime_mode`
* `status`
* `secret_character`
* `winner_id`
* `winner_name`
* `finish_reason`
* timestamps

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/anime-guesser.git
cd anime-guesser
```

### 2. Set up Supabase

Create a Supabase project and configure:

* Authentication
* `profiles` table
* `matches` table
* Row Level Security policies

Then add your project credentials in `supabase.js`.

Example:

```javascript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

---

### 3. Run the app

You can open the project with:

* **VS Code Live Server**, or
* any local web server

Example:

```bash
npx serve
```

---

## 📌 Current Game Modes

### Single Player

* One Piece
* Naruto
* Bleach
* Demon Slayer
* Dragon Ball Z
* Attack on Titan

### Multiplayer

* 1v1 room duel mode with shared anime selection

---

## 🔮 Planned Improvements

Future upgrades may include:

* more anime datasets
* better mobile optimization
* reconnect/resume duel support
* richer player profiles
* improved animations and UI polish
* more hint systems and challenge modes

---

## 📜 License

This project is for learning / personal development / portfolio use.
You can customize the license section depending on how you want to publish the project.

---

## 👨‍💻 Author

Built by **Aditya**
If you liked the project, feel free to fork it, star it, or contribute ideas.
