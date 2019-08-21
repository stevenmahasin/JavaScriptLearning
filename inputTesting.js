"use strict";

// Button clicks

var clicks = 0;

document.getElementById("clickme").addEventListener("click",
    () => {
        ++clicks;
        document.getElementById("counter").textContent = clicks;
    },
    false);

// Keyboard presses

document.addEventListener("keydown",
    (event) => {
        document.getElementById("lastpressed").textContent = event.code;
    },
    false);

// Canvas drawing

document.getElementById("box").addEventListener("focus",
    () => {
        document.getElementById("boxfocus").textContent = "";
    },
    false);

document.getElementById("box").addEventListener("blur",
    () => {
        document.getElementById("boxfocus").textContent = "not";
    },
    false);
