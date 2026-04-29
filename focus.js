let studyTime = Number(localStorage.getItem("studyTime")) || 25;
//convert minutes to seconds
let totalSeconds = studyTime * 60;
//set remaining seconds 
let remainingSeconds = totalSeconds;
let timer = null;
//locate progress bar
let progressBar =  document.querySelector(".progress-bar");
//locate start button
let startButton = document.querySelector(".start-btn");
//locate pause button
let pauseButton = document.querySelector(".pause-btn");
//locate reset button
let resetButton = document.querySelector(".reset-btn");

startButton.onclick = function() {
    clearInterval(timer);

    timer = setInterval(function () {
        remainingSeconds = remainingSeconds - 1;
        //track the time remaining and update the progress bar
        let progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
        progressBar.value = progress;

        if (remainingSeconds <=0) {
            clearInterval(timer);
            window.location.href="completion.html";
        }
    }, 1000);
};

//when pause is clicked, freeze the timer countdown
pauseButton.onclick = function() {
    clearInterval(timer);
}
//when reset is clicked, reset the session and restart the timer afresh
resetButton.onclick = function() {
    clearInterval(timer);
    remainingSeconds = totalSeconds;
    progressBar.value = 0;
}
