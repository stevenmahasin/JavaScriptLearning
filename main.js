"use strict";

var player = new Player();

function updateBox() {
    var box = document.getElementById("box");
    if (box.getContext) {
        var ctx = box.getContext("2d");
        ctx.clearRect(0, 0, box.width, box.height); // Erase the whole canvas
        player.draw(ctx);
    }
}

setInterval(updateBox, 1);
