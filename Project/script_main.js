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
  
/*
// Function to calculate the time remaining until Pepero Day
function getTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  // Function to update the countdown display
  function updateCountdownDisplay() {
    // Get the target date from local storage or set it to Pepero Day
    const targetDateString = localStorage.getItem('peperoDay') || '2023-11-11T00:00:00';
    const targetDate = new Date(targetDateString).getTime();
  
    const timeRemaining = getTimeRemaining(targetDate);
  
    // Display the countdown
    const countdownDisplay = `${timeRemaining.days}     ${timeRemaining.hours}      ${timeRemaining.minutes}      ${timeRemaining.seconds}`;
    document.getElementById('countd').innerHTML = countdownDisplay;
  }
  
  // Update the countdown display on page load
  updateCountdownDisplay();
  
  // Set up an interval to update the countdown every second
  setInterval(updateCountdownDisplay, 1000);
  */

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const peperoTime = new Date(`November 11 ${currentYear} 00:00:00`);

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
