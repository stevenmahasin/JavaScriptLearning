var debug = true;

// Button clicks

var clicks = 0;

document.getElementById("clickme").addEventListener("click",
    function () {
        ++clicks;
        document.getElementById("counter").textContent = clicks;
    },
    false);

// Keyboard presses

document.addEventListener("keydown",
    function (event) {
        document.getElementById("lastpressed").textContent = event.code;
    },
    false);

// Canvas drawing

var size = {
    width: 10,
    height: 10
};

var position = {
    x: 0,
    y: 0
};

var speed = 1;

function updateDebug() {
    var data = [
        "size.width",
        "size.height",
        "position.x",
        "position.y",
        "speed"
    ];
    for (var item of data) {
        document.getElementById(item).textContent = eval(item); // TODO Dangerous?
    }
}

// TODO If possible make this more OOP
function boundaryCheck() {
    if (position.x < 0) {
        position.x = 0;
    } else if (position.x > document.getElementById("box").width - size.width) {
        position.x = document.getElementById("box").width - size.width;
    }
    if (position.y < 0) {
        position.y = 0;
    } else if (position.y > document.getElementById("box").height - size.height) {
        position.y = document.getElementById("box").height - size.height;
    }
}

function updateBox() {
    var box = document.getElementById("box");
    if (box.getContext) {
        var ctx = box.getContext("2d");
        ctx.clearRect(0, 0, box.width, box.height); // Erase the whole canvas
        ctx.fillStyle = "#b31b1b"; // Change color
        ctx.fillRect(position.x, position.y, size.width, size.height);
    }
}

function refresh() {
    boundaryCheck();
    updateBox();
    if (debug) {
        updateDebug();
    }
}

document.getElementById("box").addEventListener("keydown",
    function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                position.y -= speed;
                break;
            case "KeyS":
            case "ArrowDown":
                position.y += speed;
                break;
            case "KeyA":
            case "ArrowLeft":
                position.x -= speed;
                break;
            case "KeyD":
            case "ArrowRight":
                position.x += speed;
                break;
        }
        refresh();
        event.preventDefault(); // Consume the event so it doesn't get handled twice
    },
    false);

document.getElementById("box").addEventListener("focus",
    function () {
        document.getElementById("boxfocus").textContent = "";
    },
    false);

document.getElementById("box").addEventListener("blur",
    function () {
        document.getElementById("boxfocus").textContent = "not";
    },
    false);

refresh(); // Initialize canvas
