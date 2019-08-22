"use strict";

class Player extends Entity {

    constructor() {
        super(0, 200, 5);
        this.spriteName = [
            "player0",
            "player1",
            "player2",
            "player3",
            "player4"
        ]; // TODO This is hardcoded
        setInterval(() => {
            this.updateFacing();
        }, 1);
    }

    updateFacing() {
        this.facing.up = input.up;
        this.facing.down = input.down;
        this.facing.left = input.left;
        this.facing.right = input.right;
    }

}
