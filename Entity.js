class Entity {

    constructor() {
        this.hitbox = {
            width,
            height
        };
        this.spriteSize = {
            width,
            height,
            offsetX,
            offsetY
        };
        this.position = {
            x,
            y
        };
        this.velocity = {
            x,
            y
        };
        this.face;
        this.frame = {
            count,
            delay,
            max
        };
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

}
