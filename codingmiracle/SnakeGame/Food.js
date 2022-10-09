class Apple {
    constructor(s) {
        const canvas = document.querySelector('canvas');
        this.x = Math.round(Math.random() * (blocksX - 1));
        this.y = Math.round(Math.random() * (blocksY - 1));
        while (s.appleOnSnake(this)) {
            this.x = Math.round(Math.random() * (blocksX - 1));
            this.y = Math.round(Math.random() * (blocksY - 1));
        }
        // this.color = colorAray[Math.round(Math.random() * (colorAray.length - 1))];
        this.color = "lime"
        this.ctx = canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(offsetx + block(this.x) + blockSize / 3, offsety + block(this.y), blockSize / 3, blockSize / 3);
        this.ctx.rect(offsetx + block(this.x) + blockSize / 3, offsety + block(this.y) + blockSize / 3 * 2, blockSize / 3, blockSize / 3);
        this.ctx.rect(offsetx + block(this.x), offsety + block(this.y) + blockSize / 3, blockSize / 3, blockSize / 3);
        this.ctx.rect(offsetx + block(this.x) + blockSize / 3 * 2, offsety + block(this.y) + blockSize / 3, blockSize / 3, blockSize / 3);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    isOnApple(x, y) {
        return this.x === x && this.y === y;
    }
}