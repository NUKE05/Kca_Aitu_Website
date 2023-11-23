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

document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerButton');
  
    registerButton.addEventListener('click', function () {
      const userInput = prompt('Please enter your Telegram ID or Email:');
  
      if (userInput !== null && userInput !== '') {
        alert('Registration successful. Telegram ID or Email: ' + userInput);
      }
    });
  });

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const peperoTime = new Date(`November 25 ${currentYear} 00:00:00`);

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