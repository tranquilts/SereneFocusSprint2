//retrieve the stored study time
let studyTime = localStorage.getItem("studyTime");
//convert minutes to seconds
let totalSeconds = studyTime * 60;
//set remaining seconds 
let remainingSeconds = totalSeconds;
let timer = null;
//locate progress bar
let progressBar =  document.querySelector("progress");
//locate play button
let playButton = document.querySelector("")
//locate pause button
//locate reset button
//when play is clicked, begin the timer countdown
//when pause is clicked, freeze the timer countdown
//when reset is clicked, reset the session and restart the timer afresh
//when timer goes down to zero, direct user to completion page