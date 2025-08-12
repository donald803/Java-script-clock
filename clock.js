

const elHour = document.getElementById("hr");
const elMin = document.getElementById("min");
const elSec = document.getElementById("sec");
const elAmpm = document.getElementById("ampm");
const clock = document.querySelector(".clock"); // Get clock container

function digitalClock() {
    let now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ampm = "AM";

    if (hrs >= 12) {
        ampm = "PM";
        if (hrs > 12) hrs -= 12;
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    elHour.innerText = hrs;
    elMin.innerText = mins;
    elSec.innerText = secs;
    elAmpm.innerText = ampm;

    adjustClockSize(); // Call responsiveness function on each update

    setTimeout(digitalClock, 1000);
}

// Adjust font size based on screen width
function adjustClockSize() {
    let screenWidth = window.innerWidth;

    if (screenWidth < 500) {
        clock.style.fontSize = "30px";
    } else if (screenWidth < 800) {
        clock.style.fontSize = "40px";
    } else {
        clock.style.fontSize = "50px";
    }
}

// Run responsiveness function on page load and resize
window.onload = () => {
    digitalClock();
    adjustClockSize();
};
window.onresize = adjustClockSize;
