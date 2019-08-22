"use strict";

class Entity {

    constructor(frameCount, frameDelay, frameMax) {
        this.position = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.moveDelay = 50; // Duration between move()s
        this.moveSpeed = 1; // Distance moved per move()
        this.facing = {
            up: false,
            down: false,
            left: false,
            right: false
        };
        this.hitbox = {
            width: 1,
            height: 1
        };
        this.sprite = {
            width: 1,
            height: 1,
            offsetX: 0,
            offsetY: 0,
            sizeMult: 1, // Ratio of entity size to original sprite size
            img: new Image()
        }
        this.frame = {
            count: frameCount,
            delay: frameDelay,
            max: frameMax
        };
        setInterval(() => {
            this.move();
        }, this.moveDelay);
        setInterval(() => {
            this.frame.count = (this.frame.count + 1) % this.frame.max;
            this.updateSprite();
        }, this.frame.delay);
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    setVelocity(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
    }

    setHitbox(width, height) {
        this.hitbox.width = width;
        this.hitbox.height = height;
    }

    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    updateVelocity() {
        // TODO Maybe change this. We have no notion of acceleration right now.
        this.setVelocity(0, 0);
        if (this.facing.up) {
            this.velocity.y -= this.moveSpeed;
        }
        if (this.facing.down) {
            this.velocity.y += this.moveSpeed;
        }
        if (this.facing.left) {
            this.velocity.x -= this.moveSpeed;
        }
        if (this.facing.right) {
            this.velocity.x += this.moveSpeed;
        }
    }

    updateHitbox() {
        // TODO We might want the hitbox to not always match the sprite
        this.setHitbox(this.sprite.width, this.sprite.height);
    }

    boundaryCheck() {
        if (this.position.x < 0) {
            this.position.x = 0;
        } else if (this.position.x > document.getElementById("box").width - this.hitbox.width) {
            this.position.x = document.getElementById("box").width - this.hitbox.width;
        }
        if (this.position.y < 0) {
            this.position.y = 0;
        } else if (this.position.y > document.getElementById("box").height - this.hitbox.height) {
            this.position.y = document.getElementById("box").height - this.hitbox.height;
        }
    }

    move() {
        this.updateVelocity();
        this.updatePosition();
        this.boundaryCheck();
    }

    updateSprite() {
        this.sprite.img = document.getElementById(this.spriteName[this.frame.count]);
        this.sprite.width = this.sprite.img.width * this.sprite.sizeMult;
        this.sprite.height = this.sprite.img.height * this.sprite.sizeMult;
        this.updateHitbox();
    }

    draw(ctx) {
        ctx.drawImage(
            this.sprite.img,
            this.position.x + this.sprite.offsetX,
            this.position.y + this.sprite.offsetY,
            this.sprite.width,
            this.sprite.height
        );
    }

}
