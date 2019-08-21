"use strict";

var input = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.getElementById("box").addEventListener("keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                input.up = true;
                break;
            case "KeyS":
            case "ArrowDown":
                input.down = true;
                break;
            case "KeyA":
            case "ArrowLeft":
                input.left = true;
                break;
            case "KeyD":
            case "ArrowRight":
                input.right = true;
                break;
        }
        event.preventDefault(); // Consume the event so it doesn't get handled twice
    },
    false);

document.getElementById("box").addEventListener("keyup",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                input.up = false;
                break;
            case "KeyS":
            case "ArrowDown":
                input.down = false;
                break;
            case "KeyA":
            case "ArrowLeft":
                input.left = false;
                break;
            case "KeyD":
            case "ArrowRight":
                input.right = false;
                break;
        }
        event.preventDefault(); // Consume the event so it doesn't get handled twice
    },
    false);
