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
        passwordFeedback.textContent = 'Password must be at least 8 characters long.';
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

const UserData = [];

function handleSubmit(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (isUserAlreadyRegistered(name)) {
    alert(`Sorry, you are already registered with the username: ${name}`);
  } else {
    const user = {
      name,
      password,
      email
    };

    UserData.push(user);

    alert(`Hello ${name}. That's your password: ${password}`);

    document.getElementById('contactForm').reset();
  }
}


const userData = [
    { name: "User1", email: "user1@example.com", password: "password1" },
    { name: "User2", email: "user2@example.com", password: "password2" },
    // Add more user data as needed
];

export { userData };


function isUserAlreadyRegistered(name) {
  return UserData.some(user => user.name === name);
}

document.getElementById('sendButton').addEventListener('click', handleSubmit);

function submitForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill in all required fields.');
    } else {
        alert('Form submitted successfully' + UserData[0]);
    }
}

export { UserData };

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