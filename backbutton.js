document.addEventListener("DOMContentLoaded", function () {
    setupAndroidBackHandler();
});

function setupAndroidBackHandler() {
    if (window.__animeBackHandlerReady) return;
    window.__animeBackHandlerReady = true;

    const isCapacitor = !!window.Capacitor;
    if (!isCapacitor) return;

    let App = null;

    if (window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
        App = window.Capacitor.Plugins.App;
    }

    if (!App || !App.addListener) return;

    App.addListener("backButton", () => {
        const currentPage = getCurrentPageName();

        /* If a modal/popup is open, close it first */
        if (closeOpenModalIfAny()) {
            return;
        }

        /* If not on home page, go back in history if possible */
        if (currentPage !== "home.html" && currentPage !== "index.html") {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "home.html";
            }
            return;
        }

        /* If on home page, exit app */
        App.exitApp();
    });
}

function getCurrentPageName() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf("/") + 1);

    if (!file || file.trim() === "") {
        return "index.html";
    }

    return file.toLowerCase();
}

/* optional modal closer so back closes popup before leaving page */
function closeOpenModalIfAny() {
    const openWinPopup = document.querySelector(".win-popup:not(.hidden)");
    if (openWinPopup) {
        openWinPopup.classList.add("hidden");
        return true;
    }

    const openRanksModal = document.getElementById("allRanksModal");
    if (openRanksModal && !openRanksModal.classList.contains("hidden")) {
        openRanksModal.classList.add("hidden");
        return true;
    }

    const promoPopup = document.getElementById("promoPopup");
    if (promoPopup && !promoPopup.classList.contains("hidden")) {
        promoPopup.classList.add("hidden");
        return true;
    }

    return false;
}