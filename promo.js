const PROMO_TARGET_KEY = "yt_promo_target_page";
const PROMO_COUNT_KEY = "yt_promo_current_count";
const PROMO_SHOWN_KEY = "yt_promo_shown";
const PROMO_COOLDOWN_KEY = "yt_promo_cooldown";
const PROMO_COOLDOWN_VISITS = 3;

function getPromoValue(key, fallback = null){
    const value = localStorage.getItem(key);
    return value !== null ? value : fallback;
}

function setPromoValue(key, value){
    localStorage.setItem(key, value);
}

function getRandomPromoTarget(){
    return Math.floor(Math.random() * 4) + 1; // 1 to 4
}

function initPromoCycle(){
    const target = getRandomPromoTarget();
    setPromoValue(PROMO_TARGET_KEY, target);
    setPromoValue(PROMO_COUNT_KEY, 0);
    setPromoValue(PROMO_SHOWN_KEY, "false");
}

function resetPromoCycle(){
    initPromoCycle();
}
function startPromoCooldown(){
    setPromoValue(PROMO_COOLDOWN_KEY, PROMO_COOLDOWN_VISITS);
}
function createPromoPopup(){
    if(document.getElementById("ytPromoOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "ytPromoOverlay";
    overlay.className = "yt-promo-overlay";

    overlay.innerHTML = `
        <div class="yt-promo-modal">
            <button class="yt-promo-close" id="ytPromoCloseBtn">×</button>

            <div class="yt-promo-banner">
                <img src="subscribe.jpg" alt="JinX YouTube Banner">
            </div>

            <div class="yt-promo-content">
                <div class="yt-promo-logo-wrap">
                    <img src="logo.jpg" alt="JinX Logo" class="yt-promo-logo">
                </div>

                <h2>Check Out JinX Ind</h2>
                <p>
                    Anime quizzes, gaming content, live streams, and challenge videos —
                    all in one place.
                </p>

                <div class="yt-promo-actions">
                    <button id="ytPromoVisitBtn" class="yt-promo-btn primary">
                        Visit Channel
                    </button>
                    <button id="ytPromoLaterBtn" class="yt-promo-btn secondary">
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = document.getElementById("ytPromoCloseBtn");
    const laterBtn = document.getElementById("ytPromoLaterBtn");
    const visitBtn = document.getElementById("ytPromoVisitBtn");

function closePromoAndReset(){
    overlay.remove();
    setPromoValue(PROMO_SHOWN_KEY, "true");
    startPromoCooldown();
    resetPromoCycle();
}

    if(closeBtn){
        closeBtn.addEventListener("click", closePromoAndReset);
    }

    if(laterBtn){
        laterBtn.addEventListener("click", closePromoAndReset);
    }

if(visitBtn){
    visitBtn.addEventListener("click", function(){
        setPromoValue(PROMO_SHOWN_KEY, "true");
        startPromoCooldown();
        resetPromoCycle();
        window.location.href = "youtube.html";
    });
}

    overlay.addEventListener("click", function(e){
        if(e.target === overlay){
            closePromoAndReset();
        }
    });
}

function handleYouTubePromoTrigger(){
    let cooldown = Number(getPromoValue(PROMO_COOLDOWN_KEY, 0));

    if(cooldown > 0){
        cooldown -= 1;
        setPromoValue(PROMO_COOLDOWN_KEY, cooldown);
        return;
    }

    let target = Number(getPromoValue(PROMO_TARGET_KEY));
    let count = Number(getPromoValue(PROMO_COUNT_KEY));
    let shown = getPromoValue(PROMO_SHOWN_KEY);

    if(!target || shown === null){
        initPromoCycle();
        target = Number(getPromoValue(PROMO_TARGET_KEY));
        count = Number(getPromoValue(PROMO_COUNT_KEY));
        shown = getPromoValue(PROMO_SHOWN_KEY);
    }

    if(shown === "true") return;

    count += 1;
    setPromoValue(PROMO_COUNT_KEY, count);

    if(count >= target){
        createPromoPopup();
    }
}
document.addEventListener("DOMContentLoaded", function(){
    handleYouTubePromoTrigger();
});