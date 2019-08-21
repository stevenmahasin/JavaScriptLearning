var debug = true;

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

var frameCounter = 0;

var size = {
    width: 1,
    height: 1
};

var sizeMult = 1;

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
        "speed",
        "sizeMult"
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

function getNextSprite() {
    var spriteName = [
        "player0",
        "player1",
        "player2",
        "player3",
        "player4"
    ]; // TODO This is hardcoded
    var sprite = document.getElementById(spriteName[frameCounter]);
    size.width = sprite.width * sizeMult;
    size.height = sprite.height * sizeMult;
    return sprite;
}

function updateBox() {
    var box = document.getElementById("box");
    if (box.getContext) {
        var ctx = box.getContext("2d");
        ctx.clearRect(0, 0, box.width, box.height); // Erase the whole canvas
        // ctx.fillStyle = "#b31b1b"; // Change color
        // ctx.fillRect(position.x, position.y, size.width, size.height);
        var sprite = getNextSprite();
        ctx.drawImage(sprite, position.x, position.y, size.width, size.height);
    }
}

function refresh() {
    boundaryCheck();
    updateBox();
    if (debug) {
        updateDebug();
    }
}

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

setInterval(
    () => {
        frameCounter = (frameCounter + 1) % 5; // TODO Magic number
        updateBox();
    },
    200); // TODO Magic number

refresh(); // Initialize canvas
