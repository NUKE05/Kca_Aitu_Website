document.getElementById("sendButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert(formData);

    document.getElementById("contactForm").reset();
});

function redirectWithAlert(link, destination) {
        if (alert('You will be redirected to ' + destination + '.')) {
            window.location.href = link;
        }
    }

const instagramLink = document.getElementById('instagram-link');
const tiktokLink = document.getElementById('tiktok-link');
const telegramLink = document.getElementById('telegram-link');

if (instagramLink) {
    instagramLink.addEventListener('click', function () {
        redirectWithAlert('https://instagram.com/kca_aitu?igshid=MzRlODBiNWFlZA==', 'Instagram');
    });
}

if (tiktokLink) {
    tiktokLink.addEventListener('click', function () {
        redirectWithAlert('https://www.tiktok.com/@bultaoreune_kca?_t=8fiQ3v1ZEDG&_r=1', 'Tiktok');
    });
}

if (telegramLink) {
    telegramLink.addEventListener('click', function () {
        redirectWithAlert('https://t.me/+UkXBxUkgeeNLQCAL', 'Telegram');
    });
}