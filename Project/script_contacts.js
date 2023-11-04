const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
    } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }
}

function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
    } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
    }
}

sendButton.addEventListener('click', submitForm);

function submitForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill in all required fields.');
    } else {
        alert('Form submitted successfully!');
    }
}

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