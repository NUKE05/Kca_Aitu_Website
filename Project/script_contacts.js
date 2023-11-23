const nameInput = document.getElementById('name');
const nameFeedback = document.getElementById('name-feedback')
const emailInput = document.getElementById('email');
const sendButton = document.getElementById('submit');
const emailLabel = document.getElementById('email-label')
const passwordLabel = document.getElementById('password-label')
const passwordConfLabel = document.getElementById('password-conf-label')
const nameLabel = document.getElementById('name-label')

emailInput.addEventListener('blur', validateEmail);
nameInput.addEventListener('blur', validateName);

function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameFeedback.textContent = 'Write you name please.';
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

const passwordInput = document.getElementById('password');
const passwordValidationInput = document.getElementById('passwordValidation');
const passwordFeedback = document.getElementById('password-feedback');
const passwordValidationFeedback = document.getElementById('passwordValidation-feedback');

passwordInput.addEventListener('blur', validatePassword);
passwordValidationInput.addEventListener('blur', validatePasswordValidation);

function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        passwordFeedback.textContent = 'Password must have 8 characters.';

    } else {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        passwordFeedback.textContent = '';
    }
}

function validatePasswordValidation() {
    const passwordValue = passwordInput.value.trim();
    const passwordValidationValue = passwordValidationInput.value.trim();
    
    if (passwordValidationValue !== passwordValue) {
        passwordValidationInput.classList.add('is-invalid');
        passwordValidationInput.classList.remove('is-valid');
        passwordValidationFeedback.textContent = 'Passwords do not match.';
    } else {
        passwordValidationInput.classList.remove('is-invalid');
        passwordValidationInput.classList.add('is-valid');
        passwordValidationFeedback.textContent = '';
    }
}


document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = {
        name: name,
        email: email,
        password: password,
    };

    var existingData = JSON.parse(localStorage.getItem("myData")) || [];
    if (isUserAlreadyRegistered(email)) {
        alert('Sorry, you are already registered with this username')
    }
    else {
        existingData.push(data);
        var dataToUpdate = {
            elementId_main: 'login-conf',
            newText_main: name,
            elementId_brn: 'login-conf-brn',
            newText_brn: name
        };
        
        localStorage.setItem('updateInfo', JSON.stringify(dataToUpdate));
    }
  
    localStorage.setItem("myData", JSON.stringify(existingData));
    
    document.getElementById("name").value = "";
    document.getElementById("email").value= "";
    document.getElementById("password").value = "";

function isUserAlreadyRegistered(email) {
    return existingData.some(data => data.email === email)
}    
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