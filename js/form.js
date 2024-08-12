const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: function(callback) {
        fetch('https://ipinfo.io/json?token=5305fb7102a847', { headers: { 'Accept': 'application/json' }}).then(function(resp) {
            return resp.json();
        }).then(function(resp) {
            const countryCode = (resp && resp.country) ? resp.country : "us";
            callback(countryCode);
        });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});


const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        if (!phoneInput.isValidNumber()) {
            event.preventDefault();
            alert("Please enter a valid phone number.");
        }
    });

    