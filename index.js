//Start with 25 minutes
alert("correct index file");
let studyTime = 25;
let plusButton = document.querySelector(".plus-btn");
let minusButton = document.querySelector(".minus-btn");
let timerView = document.querySelector(".timer-view");
let startButton = document.querySelector(".start-btn");

timerView.textContent = studyTime + " mins";

plusButton.onclick = function() {
    studyTime = studyTime + 5;
    timerView.textContent = studyTime + " mins";
};

minusButton.onclick = function() {
    studyTime = studyTime - 5;
    timerView.textContent = studyTime;
};

startButton.onclick = function() {
    localStorage.setItem("studyTime", studyTime);
    window.location.href="focus.html";
};
