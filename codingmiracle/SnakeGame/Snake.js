class SnakeElement {
    constructor(x, y, dir, lastdir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.lastdir = lastdir;
        this.color = 'lime';
        this.ctx = canvas.getContext('2d');
    }

    draw() {
        var gap = Math.round(blockSize / 20);
        if (this.dir == this.lastdir && this.dir == up) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x) + gap, offsety + block(this.y), blockSize - gap * 2, blockSize);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        } else if (this.dir == this.lastdir && this.dir == down) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x) + gap, offsety + block(this.y), blockSize - gap * 2, blockSize);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
        else if (this.dir == this.lastdir && this.dir == left) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y) + gap, blockSize, blockSize - gap * 2);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        } else if (this.dir == this.lastdir && this.dir == right) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y) + gap, blockSize, blockSize - gap * 2);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
        else if ((this.lastdir == up && this.dir == right) || (this.lastdir == left && this.dir == down)) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x) + gap, offsety + block(this.y) + gap, blockSize - gap, blockSize - gap);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x + 1) - gap, offsety + block(this.y + 1) - gap, gap, gap);
            this.ctx.fillStyle = bg;
            this.ctx.fill();
        } else if ((this.lastdir == up && this.dir == left) || (this.lastdir == right && this.dir == down)) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y) + gap, blockSize - gap, blockSize - gap);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y + 1) - gap, gap, gap);
            this.ctx.fillStyle = bg;
            this.ctx.fill();
        }
        else if ((this.lastdir == down && this.dir == right) || (this.lastdir == left && this.dir == up)) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x) + gap, offsety + block(this.y), blockSize - gap, blockSize - gap);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x + 1) - gap, offsety + block(this.y), gap, gap);
            this.ctx.fillStyle = bg;
            this.ctx.fill();
        } else if ((this.lastdir == down && this.dir == left) || (this.lastdir == right && this.dir == up)) {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y), blockSize - gap, blockSize - gap);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y), gap, gap);
            this.ctx.fillStyle = bg;
            this.ctx.fill();
        }
        else {
            this.ctx.beginPath();
            this.ctx.rect(offsetx + block(this.x), offsety + block(this.y), blockSize, blockSize);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
        }
    }

    atPosition(x, y) {
        return x == this.x & y == this.y;
    }
}


class Snake {
    constructor(startX, startY, startlength, startdir) {
        this.x = startX;
        this.y = startY;
        this.length = startlength;
        this.dead = 0;
        this.addCount = 1;
        this.dir = startdir;
        this.lastdir = this.dir;
        this.dirlist = new Array();
        this.snakeElements = new Array();

        this.pathToApple = new Path();
        this.weWin = false;
        this.noMoreAstar = false;
        this.lateGame = false;

        switch (this.dir) {
            case up:
                for (var i = 0; i < startlength; i++) {
                    this.snakeElements.push(new SnakeElement(startX, startY - i, up, up));
                }
                this.y = startY - 2;
                break;
            case left:
            case right:
                this.snakeElements.unshift(new SnakeElement(startX, startY, this.dir, down));
                for (var i = 1; i < startlength; i++) {
                    this.snakeElements.unshift(new SnakeElement(startX, startY - i, down, down));
                }
                break;
            case down:
                for (var i = 0; i < startlength; i++) {
                    this.snakeElements.unshift(new SnakeElement(startX, startY - i, down, down));
                }
        }
    }

    resetOnHamiltonian(cycle) {
        playmode = 0;
        this.cycle = cycle;
        this.snakeElements = [];
        this.length = 3;
        this.addCount = 1;
        this.dead = 0;
        this.pathToApple = new Path();
        this.weWin = false;
        this.noMoreAstar = false;
        this.lateGame = false;
        this.snakeElements.push(new SnakeElement(cycle[1].x, cycle[1].y, up, down));
        this.snakeElements.push(new SnakeElement(cycle[1].x, cycle[1].y, up, down));
        this.snakeElements.push(new SnakeElement(cycle[2].x, cycle[2].y, up, down));
        this.x = cycle[3].x;
        this.y = cycle[3].y;
        this.headCyclePosition = 3;
        this.tailCyclePosition = 0;

    }

    draw() {
        for (var i = 0; i < this.length; i++) {
            this.snakeElements[i].draw();
        }
    }

    move() {
        if (playmode) {
            if (this.dirlist.length > 0) {
                console.log(this.dirlist[0]);
                if (this.dir != this.dirlist[0]) {
                    this.snakeElements[this.snakeElements.length - 1].dir = this.dirlist[0];
                }
                this.lastdir = this.dir;
                this.dir = this.dirlist.shift();
            }
        } else { //get next move from AI
            if (this.weWin) {
                return;
            }

            let ndir

            if (this.length == blocksX * blocksY) {
                let x = apple.x - this.x;
                let y = apple.y - this.y;
                if (x == 0 && y == 1) {
                    ndir = down;
                } else if (x == 0 && y == -1) {
                    ndir = up;
                } else if (x == 1 && y == 0) {
                    ndir = right;
                } else if (x == -1 && y == 0) {
                    ndir = left;
                }
            } else {
                if (!this.pathToApple || this.pathToApple.pathCounter >= this.pathToApple.pathLength) {
                    console.log("getPathbasedonAstar");
                    this.pathToApple = this.getPathBasedOnAStar();
                }
                if (!this.pathToApple || this.pathToApple.pathLength === 0) {
                    console.log("getNextPosition");
                    let nextPos = this.getNextPosition();
                    let x = nextPos.x - this.x;
                    let y = nextPos.y - this.y;
                    if (x == 0 && y == 1) {
                        ndir = down;
                    } else if (x == 0 && y == -1) {
                        ndir = up;
                    } else if (x == 1 && y == 0) {
                        ndir = right;
                    } else if (x == -1 && y == 0) {
                        ndir = left;
                    }
                } else {
                    ndir = this.pathToApple.getNextMove();
                }
            }
            if (this.dir != ndir) {
                this.snakeElements[this.snakeElements.length - 1].dir = ndir;
            }
            this.lastdir = this.dir;
            this.dir = ndir;
        }

        this.snakeElements.push(new SnakeElement(this.x + this.dir.x, this.y + this.dir.y, this.dir, this.snakeElements[this.snakeElements.length - 1].dir));
        this.snakeElements.shift();
        this.snakeElements[0].lastdir = this.snakeElements[0].dir;
        this.x += this.dir.x;
        this.y += this.dir.y;
    }

    getNextPosition() {
        this.appleCyclePosition = hc.getNodeNo(apple.x, apple.y);
        let possibleNextPositions = hc.getPossiblePositionsFrom(this.x, this.y);
        let minDiist = 100000;
        let minIndex = 0;
        for (let i = 0; i < possibleNextPositions.length; i++) {

            let distance = this.appleCyclePosition - possibleNextPositions[i];
            while (distance < 0) {
                distance += this.cycle.length;
            }

            if (this.overTakesTail(this.cycle[possibleNextPositions[i]])) {
                continue;
            }

            if (distance < minDiist) {
                minDiist = distance;
                minIndex = i;
            }

        }
        if (minDiist === 100000) {
            return this.cycle[(hc.getNodeNo(this.x, this.y) + 1) % this.cycle.length];
        }
        // console.log(this.cycle[possibleNextPositions[minIndex]]);
        return this.cycle[possibleNextPositions[minIndex]];
    }

    overTakesTail(newPos, h, t) {
        let minDistanceBetweenHeadAndTail = 2;
        let head;
        if (h) {
            head = h.cycleNo;
        } else {
            head = hc.getNodeNo(this.x, this.y);
        }

        let actualTail;
        if (t) {
            actualTail = hc.getNodeNo(t.x, t.y);

        } else {
            actualTail = hc.getNodeNo(this.snakeElements[0].x, this.snakeElements[0].y);
        }
        if (this.getDistanceBetweenPoints(head, actualTail) <= minDistanceBetweenHeadAndTail + this.addCount) {
            return true;
        }

        let tail = actualTail - minDistanceBetweenHeadAndTail - this.addCount;
        if (tail < 0) {
            tail += this.cycle.length;
        }

        let temp = head;
        let nextPosNo = newPos.cycleNo;
        if (this.getDistanceBetweenPoints(head, newPos.cycleNo) >= this.getDistanceBetweenPoints(head, (tail))) {
            return true;
        }

        return false;
    }

    getPathBasedOnAStar() {
        for (let n of this.cycle) {
            n.resetForAStar();
        }
        this.appleCyclePosition = hc.getNodeNo(apple.x, apple.y);

        let startNode = this.cycle[hc.getNodeNo(this.x, this.y)];
        let bigList = [];

        let winningPath;

        let startingPath = new HPath(startNode, this.cycle[this.appleCyclePosition]);

        bigList.push(startingPath);


        while (true) {
            // print(bigList.length);
            if (bigList.length === 0) {
                return winningPath;
            }
            let currentPath = bigList.shift();
            if (winningPath && currentPath.pathLength >= winningPath.pathLength) {
                continue;
            }

            if (currentPath.distanceToApple === 0) {//path has found apple

                if (winningPath == null || currentPath.pathLength < winningPath.pathLength) {
                    winningPath = currentPath.clone();
                }
                continue;
            }


            //if the final node has been visited and the previous visit was a shorter path then fuck this path
            let finalNodeInPath = currentPath.getLastNode();

            if (!finalNodeInPath.alreadyVisited || currentPath.pathLength < finalNodeInPath.shortestDistanceToThisPoint) {

                //this is the shortest found path to this point
                finalNodeInPath.alreadyVisited = true;
                finalNodeInPath.shortestDistanceToThisPoint = currentPath.pathLength;

                //now we need to add all the paths possible from this node to the bigList

                for (var n of finalNodeInPath.edges) {

                    if (this.overTakesTail(n, finalNodeInPath, currentPath.getSnakeTailPositionAfterFollowingPath(this))) {
                        if (n.cycleNo !== finalNodeInPath.cycleNo + 1) {
                            continue;
                        }
                    }

                    let p = currentPath.clone();
                    p.addToTail(n);
                    if (p.getLastNode().alreadyVisited && p.pathLength > p.getLastNode().shortestDistanceToThisPoint) {
                        continue;
                    }
                    bigList.push(p);
                }
            }

            //now we need to sort the bigList based on the distances to the apple plus the current distance of the path
            bigList.sort((a, b) => ((a.distanceToApple + a.pathLength) - (b.distanceToApple + b.pathLength)));
        }
    }

    checkCollisions() {
        if (apple.isOnApple(this.x, this.y)) {
            this.ateApple();
        }

        if (this.length == blocksX * blocksY) {
            this.weWin = true;
        }

        for (var i = 0; i < this.length - 1; i++) {
            if (this.x == this.snakeElements[i].x && this.y == this.snakeElements[i].y) {
                gs = 50;
                clearInterval(hupdate);
                hupdate = setInterval(update, 1000 / gs);
                if (playmode) {
                    snake = buffsnake;
                }
                this.resetOnHamiltonian(hc.cycle);
                console.log("crashed into itself");
            }
        }

        if (this.x < 0 || this.y < 0 || this.x >= blocksX || this.y >= blocksY) {
            gs = 50;
            clearInterval(hupdate);
            hupdate = setInterval(update, 1000 / gs);
            if (playmode) {
                snake = buffsnake;
            }
            this.resetOnHamiltonian(hc.cycle);
            console.log("crashed into border");
        }

    }

    ateApple() {
        this.snakeElements.unshift(new SnakeElement(this.snakeElements[0].x, this.snakeElements[0].y, this.snakeElements[0].lastdir, this.snakeElements[0].lastdir));
        this.length += 1;
        this.addCount += 1;
        if (!this.weWin) {
            apple = new Apple(snake);
            if (!playmode) {
                this.pathToApple = this.getPathBasedOnAStar();
            }
        }

        this.draw();
    }

    update() {
        if (!this.dead) {
            this.move();
            this.checkCollisions();
        }
    }

    getDistanceBetweenPoints(from, to) {

        let distance = to - from;
        while (distance < 0) {
            distance += this.cycle.length;
        }
        return distance;
    }

    setdir(dir) {
        if (dir != this.dirlist[this.dirlist.length - 1]) {
            this.dirlist.push(dir);
        }
    }

    appleOnSnake(a) {
        for (var i = 0; i < this.snakeElements.length; i++) {
            if (snake.snakeElements[i].atPosition(a.x, a.y)) {
                return 1;
            }
        }
        return 0;
    }

}
