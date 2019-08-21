var up;
var down;
var left;
var right;

document.getElementById("box").addEventListener("keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }
        switch (event.code) {
            case "KeyW":
            case "ArrowUp":
                if (up === undefined) {
                    up = setInterval(() => {
                        position.y -= speed;
                    }, 50);
                }
                position.y -= speed;
                break;
            case "KeyS":
            case "ArrowDown":
                if (down === undefined) {
                    down = setInterval(() => {
                        position.y += speed;
                    }, 50);
                }
                position.y += speed;
                break;
            case "KeyA":
            case "ArrowLeft":
                if (left === undefined) {
                    left = setInterval(() => {
                        position.x -= speed;
                    }, 50);
                }
                position.x -= speed;
                break;
            case "KeyD":
            case "ArrowRight":
                if (right === undefined) {
                    right = setInterval(() => {
                        position.x += speed;
                    }, 50);
                }
                position.x += speed;
                break;
        }
        refresh();
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
                up = clearInterval(up);
                break;
            case "KeyS":
            case "ArrowDown":
                down = clearInterval(down);
                break;
            case "KeyA":
            case "ArrowLeft":
                left = clearInterval(left);
                break;
            case "KeyD":
            case "ArrowRight":
                right = clearInterval(right);
                break;
        }
        refresh();
        event.preventDefault(); // Consume the event so it doesn't get handled twice
    },
    false);
