/*carousel*/
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicators li");

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");
        currentSlide = index;
        slides[currentSlide].classList.add("active");
        indicators[currentSlide].classList.add("active");
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            showSlide(index);
        });
    });

    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    prevButton.addEventListener("click", () => {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    });

    nextButton.addEventListener("click", () => {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    });
});

/*register button*/
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerButton');
  
    registerButton.addEventListener('click', function () {
      const userInput = prompt('Please enter your Telegram ID or Email:');
  
      if (userInput !== null && userInput !== '') {
        alert('Registration successful. Telegram ID or Email: ' + userInput);
      }
    });
  });

/*countdown*/
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = 2024;

const peperoTime = new Date(`February 25 ${currentYear} 00:00:00`);

// update Countdown timer
function updateCountdown() {
    const currentTime = new Date();
    const diff = peperoTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

const scrollToTopButton = document.getElementById("scrollToTopButton");

function toggleScrollToTopButton() {
    if (window.pageYOffset > 500) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

window.addEventListener("scroll", toggleScrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

toggleScrollToTopButton();

function toggleLoginButton() {
    var loginButton = document.querySelector('.btnLogin-popup');
    if (window.innerWidth <= 992) {
        loginButton.style.display = 'none'; 
    } else {
        loginButton.style.display = 'inline-block'; 
    }
}
toggleLoginButton();

window.addEventListener('resize', function() {
    toggleLoginButton();
});

/*word of the day*/

var words = ["안녕하세요 (annyeong haseyo) - “Hello”","주세요 (juseyo) - “Please”", "몰라요 (mollayo) - “I don't know”", "아니요 (aniyo) - “No”", "예 (ye) - “Yes”"];
var wordIndex;

function getWordOfTheDay() {
    // get the current date in the format YYYY-MM-DD
    var currentDate = new Date().toISOString().split('T')[0];

    // use localStorage to store and retrieve the index based on the date
    var storedIndex = localStorage.getItem(currentDate);

    // if an index is already stored for today, return the corresponding word; otherwise, set the index to 0
    wordIndex = storedIndex ? parseInt(storedIndex) : 0;
    return words[wordIndex];
}

function setWordOfTheDay() {
    var wordNotification = new bootstrap.Toast(document.getElementById('wordNotification'));
    var wordOfTheDayElement = document.getElementById('wordOfTheDay');

    var wordOfTheDay = getWordOfTheDay();

    // update the content of the toast
    wordOfTheDayElement.textContent = wordOfTheDay;

    // save the current index in localStorage for the current date
    var currentDate = new Date().toISOString().split('T')[0];
    localStorage.setItem(currentDate, wordIndex);

    // increment the index for the next day
    wordIndex = (wordIndex + 1) % words.length;

    // show the toast notification
    wordNotification.show();
}

window.onload = setWordOfTheDay;

var storedData = localStorage.getItem('updateInfo');
if (storedData) {
    var dataToUpdate = JSON.parse(storedData);
    var elementToUpdate = document.getElementById(dataToUpdate.elementId_main);
    if (elementToUpdate) {
        elementToUpdate.textContent = dataToUpdate.newText_main;
    }
}


/*

document.addEventListener('DOMContentLoaded', function () {
    displayWordOfTheDay();

    const closeButton = document.querySelector('#wordNotification .btn-close');
    closeButton.addEventListener('click', displayWordOfTheDay);
});

function displayWordOfTheDay() {
    const words = ["안녕하세요 (annyeong haseyo) - “Hello”", "주세요 (juseyo) - “Please”", "몰라요 (mollayo) - “I don't know”", "아니요 (aniyo) - “No”", "예 (ye) - “Yes”"];

    // get a random word from the array
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // update the content of the toast notification
    const wordOfTheDayElement = document.getElementById('wordOfTheDay');
    wordOfTheDayElement.innerText = randomWord;

    // show the toast notification
    const wordNotification = new bootstrap.Toast(document.getElementById('wordNotification'), {
        delay: 10000
    });
    wordNotification.show();
}

var storedData = localStorage.getItem('updateInfo');

if (storedData) {
    var dataToUpdate = JSON.parse(storedData);

    var elementToUpdate = document.getElementById(dataToUpdate.elementId_main);
    if (elementToUpdate) {
        elementToUpdate.textContent = dataToUpdate.newText_main;
    }
}\*/