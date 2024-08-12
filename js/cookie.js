document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("cookie-consent-overlay").style.display = "block";
    document.getElementById("cookie-consent").style.display = "block";


    document.querySelector(".cookie-button.accept").addEventListener("click", function() {
        hideCookieConsent();
    });


    document.querySelector(".cookie-button.reject").addEventListener("click", function() {
        hideCookieConsent();
    });


    document.querySelector(".cookie-button.settings").addEventListener("click", function() {
        alert("Settings clicked");
    });
});

function hideCookieConsent() {
    document.getElementById("cookie-consent").style.display = "none";
    document.getElementById("cookie-consent-overlay").style.display = "none";
}

