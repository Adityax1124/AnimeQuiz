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
   CHANNEL LINKS
========================= */
const CHANNEL_URL = "https://www.youtube.com/@IndJinX";
const visitChannelBtn = document.getElementById("visitChannelBtn");

if(visitChannelBtn){
    visitChannelBtn.href = CHANNEL_URL;
    visitChannelBtn.target = "_blank";
}

/* =========================
   YOUTUBE API CONFIG
========================= */
const API_KEY = "";
const CHANNEL_ID = "UC22bUQGVKHrVfxX7h4L983w";
const YT_STATS_CACHE_KEY = "youtube_channel_stats_cache";
const YT_VIDEOS_CACHE_KEY = "youtube_latest_videos_cache";
const YT_LIVE_CACHE_KEY = "youtube_live_video_cache";
/* =========================
   DOM REFERENCES
========================= */
const liveContainer = document.getElementById("liveContainer");
const latestVideosGrid = document.getElementById("latestVideosGrid");
const subCountEl = document.getElementById("subCount");
const videoCountEl = document.getElementById("videoCount");

/* =========================
   HELPERS
========================= */
function formatDate(dateString){
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
function getRelativeTime(dateString){
    const now = new Date();
    const then = new Date(dateString);

    const diffMs = now - then;
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if(seconds < 60){
        return "Just now";
    }

    if(minutes < 60){
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    }

    if(hours < 24){
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    }

    if(days < 7){
        return `${days} day${days === 1 ? "" : "s"} ago`;
    }

    if(days < 30){
        const weeks = Math.floor(days / 7);
        return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
    }

    if(days < 365){
        const months = Math.floor(days / 30);
        return `${months} month${months === 1 ? "" : "s"} ago`;
    }

    const years = Math.floor(days / 365);
    return `${years} year${years === 1 ? "" : "s"} ago`;
}
function getBestThumbnail(thumbnails){
    if(thumbnails?.high?.url) return thumbnails.high.url;
    if(thumbnails?.medium?.url) return thumbnails.medium.url;
    if(thumbnails?.default?.url) return thumbnails.default.url;
    return "subscribe.jpg";
}
function formatCount(count){
    const num = Number(count) || 0;

    if(num >= 1000000){
        return (num / 1000000).toFixed(2).replace(/\.00$/, "") + "M";
    }

    if(num >= 1000){
        return (num / 1000).toFixed(2).replace(/\.00$/, "") + "K";
    }

    return String(num);
}

function renderChannelStats(subscriberCount, videoCount){
    if(subCountEl){
        subCountEl.innerText = formatCount(subscriberCount);
    }

    if(videoCountEl){
        videoCountEl.innerText = formatCount(videoCount);
    }
}
function saveCache(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

function loadCache(key){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    }catch(err){
        return null;
    }
}
/* =========================
   LIVE SECTION RENDER
========================= */
function renderLiveSection(liveVideo){
    if(!liveContainer) return;

    if(!liveVideo){
        liveContainer.innerHTML = `
            <div class="live-thumb-wrap">
                <div class="live-badge">LIVE</div>
                <img src="subscribe.jpg" alt="Live Thumbnail" class="live-thumb">
            </div>

            <div class="live-content">
                <h3>No live stream right now</h3>
                <p>When you go live, your stream title and thumbnail will show here.</p>
                <button class="watch-live-btn" disabled>Waiting for Live</button>
            </div>
        `;
        return;
    }

    liveContainer.innerHTML = `
        <div class="live-thumb-wrap">
            <div class="live-badge">LIVE</div>
            <img src="${liveVideo.thumbnail}" alt="${liveVideo.title}" class="live-thumb">
        </div>

        <div class="live-content">
            <h3>${liveVideo.title}</h3>
            <p>${liveVideo.meta || "Streaming now on JinX Ind"}</p>
            <button class="watch-live-btn" id="watchLiveBtn">Watch Live</button>
        </div>
    `;

    const watchLiveBtn = document.getElementById("watchLiveBtn");
    if(watchLiveBtn){
        watchLiveBtn.addEventListener("click", function(){
            window.open(liveVideo.url, "_blank");
        });
    }
}

/* =========================
   LATEST VIDEOS RENDER
========================= */
function renderLatestVideos(videos){
    if(!latestVideosGrid) return;

    latestVideosGrid.innerHTML = "";

if(!videos.length){
    latestVideosGrid.innerHTML = `
        <div class="video-card">
            <div class="video-info">
                <h3>Couldn’t load videos right now</h3>
                <p>Please try again later or open the channel directly on YouTube.</p>
                <button class="watch-video-btn" id="openChannelFallbackBtn">Open Channel</button>
            </div>
        </div>
    `;

    const openChannelFallbackBtn = document.getElementById("openChannelFallbackBtn");
    if(openChannelFallbackBtn){
        openChannelFallbackBtn.addEventListener("click", function(){
            window.open(CHANNEL_URL, "_blank");
        });
    }

    return;
}

    videos.slice(0, 5).forEach((video) => {
        const card = document.createElement("div");
        card.className = "video-card";

        card.innerHTML = `
            <div class="video-thumb-wrap">
                <img src="${video.thumbnail}" alt="${video.title}" class="video-thumb">
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.meta}</p>
                <button class="watch-video-btn">Watch Video</button>
            </div>
        `;

        const watchBtn = card.querySelector(".watch-video-btn");
        watchBtn.addEventListener("click", function(){
            window.open(video.url, "_blank");
        });

        latestVideosGrid.appendChild(card);
    });
}

/* =========================
   FETCH YOUTUBE DATA
========================= */
async function fetchYouTubeVideos(){
    if(API_KEY === "PASTE_YOUR_YOUTUBE_API_KEY_HERE"){
        const cachedLive = loadCache(YT_LIVE_CACHE_KEY);
        const cachedVideos = loadCache(YT_VIDEOS_CACHE_KEY);

        renderLiveSection(cachedLive || null);
        renderLatestVideos(cachedVideos || []);
        return;
    }

    try{
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if(!data.items || !Array.isArray(data.items)){
            throw new Error("Unexpected YouTube API response");
        }

        let liveVideo = null;
        const latestVideos = [];

        data.items.forEach(item => {
            const videoId = item.id?.videoId;
            const snippet = item.snippet;

            if(!videoId || !snippet) return;

const videoObj = {
    title: snippet.title,
    meta: getRelativeTime(snippet.publishedAt),
    thumbnail: getBestThumbnail(snippet.thumbnails),
    url: `https://www.youtube.com/watch?v=${videoId}`
};
            if(snippet.liveBroadcastContent === "live" && !liveVideo){
                liveVideo = {
                    ...videoObj,
                    meta: "Live now on JinX Ind"
                };
            }else{
                latestVideos.push(videoObj);
            }
        });

        const finalVideos = latestVideos.slice(0, 5);

        renderLiveSection(liveVideo);
        renderLatestVideos(finalVideos);

        saveCache(YT_LIVE_CACHE_KEY, liveVideo);
        saveCache(YT_VIDEOS_CACHE_KEY, finalVideos);

    }catch(error){
        console.error("Failed to fetch YouTube videos:", error);

        const cachedLive = loadCache(YT_LIVE_CACHE_KEY);
        const cachedVideos = loadCache(YT_VIDEOS_CACHE_KEY);

        renderLiveSection(cachedLive || null);
        renderLatestVideos(cachedVideos || []);
    }
}
async function fetchChannelStats(){
    if(API_KEY === "PASTE_YOUR_YOUTUBE_API_KEY_HERE"){
        const cachedStats = loadCache(YT_STATS_CACHE_KEY);

        if(cachedStats){
            renderChannelStats(cachedStats.subscriberCount, cachedStats.videoCount);
        }else{
            renderChannelStats(0, 0);
        }
        return;
    }

    try{
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        const stats = data?.items?.[0]?.statistics;

        if(!stats){
            throw new Error("No channel stats returned");
        }

        renderChannelStats(stats.subscriberCount, stats.videoCount);

        saveCache(YT_STATS_CACHE_KEY, {
            subscriberCount: stats.subscriberCount,
            videoCount: stats.videoCount
        });

    }catch(error){
        console.error("Failed to fetch channel stats:", error);

        const cachedStats = loadCache(YT_STATS_CACHE_KEY);

        if(cachedStats){
            renderChannelStats(cachedStats.subscriberCount, cachedStats.videoCount);
        }else{
            renderChannelStats(0, 0);
        }
    }
}
/* =========================
   INIT
========================= */
fetchChannelStats();
fetchYouTubeVideos();
