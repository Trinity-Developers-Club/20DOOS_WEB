class Path {
    constructor() {
        this.pathLength = 0;
        this.distanceToApple = 0;
        this.nodesInPath = [];
        this.trapSize = 0;
        this.pathCounter = 0;
    }

    addToTail(n) {
        if (this.nodesInPath.length !== 0) {
            let currentLast = this.nodesInPath[this.nodesInPath.length - 1];
            this.pathLength += dist(currentLast.x, currentLast.y, n.x, n.y);
        }
        this.nodesInPath.push(n);
        this.distanceToApple = dist(n.x, n.y, apple.x, apple.y);
    }

    addToTailAStar(n) {
        if (this.nodesInPath.length !== 0) {
            let currentLast = this.nodesInPath[this.nodesInPath.length - 1];
            this.pathLength += dist(currentLast.x, currentLast.y, n.x, n.y);
        }
        this.nodesInPath.push(n);
        this.distanceToApple = Math.abs(n.x - apple.x) + Math.abs(n.y - apple.y);
    }

    clone() {
        let clone = new Path();
        clone.nodesInPath = [...this.nodesInPath];
        clone.pathLength = this.pathLength;
        clone.distanceToApple = this.distanceToApple;
        return clone;
    }

    getLastNode() {
        if (this.nodesInPath === [])
            return null;
        return (this.nodesInPath[this.nodesInPath.length - 1]);

    }

    getNodeInPosition(x, y) {
        for (var n of this.nodesInPath) {
            if (n.x === x && n.y === y)
                return n;
        }
        return null;
    }

    getNextMove() {
        let x = this.nodesInPath[this.pathCounter + 1].x - this.nodesInPath[this.pathCounter].x;
        let y = this.nodesInPath[this.pathCounter + 1].y - this.nodesInPath[this.pathCounter].y;
        this.pathCounter++;
        let move;
        if (x == 0 && y == 1) {
            move = down
        } else if (x == 0 && y == -1) {
            move = up
        } else if (x == 1 && y == 0) {
            move = right
        } else if (x == -1 && y == 0) {
            move = left
        }
        return move;
    }

    nodeInPath(n) {
        for (let node of this.nodesInPath) {
            if (node == n) {
                return true;
            }
        }
        return false;
    }

    getFinalSnakePosition() {
        //trap is defined as creating a hole which contains less than half the blocks
        //need a way of counting the blocks

        let currentSnakePositions = [];
        for (let i = 0; i < snake.snakeElements.length; i++) {
            if (i < this.pathLength - snake.addCount) {
                //  print("not in snake ",s.tailBlocks[i], i,this.pathLength,s.addCount);
                continue
            }
            let tailBlock = snake.snakeElements[i];
            let nodeArrayPosition = getNodeArrayPos(tailBlock);

            currentSnakePositions.push(nodes[nodeArrayPosition]);
        }

        // print(currentSnakePositions.length + " from snake");
        //add things from path;
        for (let i = 0; i < this.nodesInPath.length; i++) {
            if (this.pathLength - i > snake.snakeElements.length + 1 + snake.addCount) {
                continue
            }
            currentSnakePositions.push(this.nodesInPath[i]);
        }

        // print(currentSnakePositions.length + " from snake and path");

        // print(s.tailBlocks.length +1,this.pathLength,currentSnakePositions);

        return currentSnakePositions;
    }

    isPathATrap() {
        let futureSnakePosition = this.getFinalSnakePosition();
        let snakeHead = futureSnakePosition[futureSnakePosition.length - 1];

        let reachableNodes = [snakeHead];


        for (let i = 0; i < reachableNodes.length; i++) {
            let currentNode = reachableNodes[i];
            for (let n of currentNode.edges) {
                if (!futureSnakePosition.includes(n) && !reachableNodes.includes(n)) {

                    reachableNodes.push(n);
                }
            }
        }
        this.trapSize = reachableNodes.length;
        //returns true if the number of reachableNodes is less than a third of the remaining nodes
        return (nodes.length - reachableNodes.length) * 0.9 > reachableNodes.length;

    }

    doesPathSplitArea() {
        //tests whether 90% of all nodes are connected

        let futureSnakePosition = this.getFinalSnakePosition();
        let snakeHead = futureSnakePosition[futureSnakePosition.length - 1];

        let reachableNodes = [];
        for (let snakeHeadEdge of snakeHead.edges) {
            if (!futureSnakePosition.includes(snakeHeadEdge)) {
                reachableNodes = [snakeHeadEdge];
                for (let i = 0; i < reachableNodes.length; i++) {
                    let currentNode = reachableNodes[i];
                    for (let n of currentNode.edges) {
                        if (!futureSnakePosition.includes(n) && !reachableNodes.includes(n)) {
                            reachableNodes.push(n);
                        }
                    }
                }

                if ((nodes.length - futureSnakePosition.length) * 0.9 <= reachableNodes.length) {
                    return false;
                }

            }
        }
        return true;
        //
        // returns true if the number of reachableNodes is less than a third of the remaining nodes
        // return (nodes.length - reachableNodes.length) * 0.9 > reachableNodes.length;

    }

    getMainAreaSize() {

        let futureSnakePosition = this.getFinalSnakePosition();
        let snakeHead = futureSnakePosition[futureSnakePosition.length - 1];
        let maxArea = 0;
        let reachableNodes = [];
        for (let snakeHeadEdge of snakeHead.edges) {
            if (!futureSnakePosition.includes(snakeHeadEdge)) {
                reachableNodes = [snakeHeadEdge];
                for (let i = 0; i < reachableNodes.length; i++) {
                    let currentNode = reachableNodes[i];
                    for (let n of currentNode.edges) {
                        if (!futureSnakePosition.includes(n) && !reachableNodes.includes(n)) {
                            reachableNodes.push(n);
                        }
                    }
                }

                maxArea = max(maxArea, reachableNodes.length);
            }
        }
        return maxArea;
    }
}


class Node {
    constructor(x, y, blocked, blockedTimer, isApple) {
        this.ctx = canvas.getContext('2d');
        this.x = x;
        this.y = y;

        this.shortestDistanceToThisPoint = 10000;
        this.longestDistanceToThisPoint = 0;

        this.blocked = blocked
        this.blockedTimer = blockedTimer;//this is the number of moves before this square is free

        this.edges = []
        this.isApple = isApple;
        this.partOfWinningPath = false;
        this.alreadyVisited = false;
    }

    setEdges() {
        this.edges = [];
        this.edges = nodes.filter((n) => (dist(n.x, n.y, this.x, this.y) === 1));

        // for (var n of nodes) {
        //     if (n.x === this.x ^ n.y === this.y) {
        //         if (dist(n.x, n.y, this.x, this.y) === 1) {
        //             this.edges.push(n);
        //         }
        //     }
        // }
    }

    isSame(n) {
        return this.x == n.x & this.y == n.y;
    }
}


//create nodes
var nodes = new Array();


function getNodeArrayPos(se) {
    return se.y + blocksY * se.x;
}

function getSnakeHeadNode() {
    return nodes.filter((n) => n.x === snake.x && n.y === snake.y)[0];
}

function setNodes() {
    nodes = [];
    for (let i = 0; i < blocksX; i++) {
        for (let j = 0; j < blocksY; j++) {
            nodes.push(new Node(i, j, false, 0, apple.isOnApple(i, j)));
        }
    }

    for (let i = 0; i < snake.length; i++) {
        let tailBlock = snake.snakeElements[i];
        let nodeArrayPosition = getNodeArrayPos(tailBlock);
        nodes[nodeArrayPosition].blocked = true;
        nodes[nodeArrayPosition].blockedTimer = i;
    }

    for (let n of nodes) {
        n.setEdges();
    }
}

function createHamiltonianCycle() {
    setNodes();

    let startNode = nodes[floor(random(nodes.length))]
    let bigList = [];
    let startingPath = new Path();

    startingPath.addToTailAStar(startNode);
    bigList.push(startingPath);


    while (true) {
        //print(bigList.length);

        let currentPath = bigList.shift();
        if (currentPath.nodesInPath.length === nodes.length) {
            //currentPath.print();
            return currentPath;
        }
        let finalNodeInPath = currentPath.getLastNode();

        //now we need to add all the paths possible from this node to the bigList

        for (var n of finalNodeInPath.edges) {
            if (currentPath.nodeInPath(n)) {
                continue;
            }
            let p = currentPath.clone();
            p.addToTailAStar(n);

            if (p.pathCannotBecomeAHamiltonianCycle())
                continue;
            bigList.unshift(p);
        }


    }


}

function getBestPathFromSnakeToApple() {
    setNodes();
    let startNode = getSnakeHeadNode();
    let bigList = [];
    let winningPath;
    let startingPath = new Path();
    startingPath.addToTailAStar(startNode);
    bigList.push(startingPath);


    while (true) {
        console.log(bigList.length);
        if (bigList.length === 0) {
            //(!winningPath) ? print("No Path found") : winningPath.print();
            console.log("winningpath");
            return winningPath;

        }
        let currentPath = bigList.shift();
        if (winningPath && currentPath.pathLength >= winningPath.pathLength) {
            continue;
        }

        if (currentPath.distanceToApple === 0) {//path has found apple
            return currentPath;

            // if (winningPath == null || currentPath.pathLength < winningPath.pathLength) {
            //
            //     winningPath = currentPath.clone();
            //
            // }
            // continue;
        }


        //if the final node has been visited and the previous visit was a shorter path then fuck this path
        let finalNodeInPath = currentPath.getLastNode();

        if (!finalNodeInPath.alreadyVisited || currentPath.pathLength < finalNodeInPath.shortestDistanceToThisPoint) {

            //this is the shortest found path to this point
            finalNodeInPath.alreadyVisited = true;
            finalNodeInPath.shortestDistanceToThisPoint = currentPath.pathLength;

            //now we need to add all the paths possible from this node to the bigList

            for (var n of finalNodeInPath.edges) {

                if (n.blocked && n.blockedTimer > currentPath.pathLength) {
                    continue;
                }
                let p = currentPath.clone();
                p.addToTailAStar(n);
                if (p.distanceToApple <= winningPath && p.length <= winningPath.length) {
                    winningPath = p;
                }
                if (p.getLastNode().alreadyVisited && p.pathLength > p.getLastNode().shortestDistanceToThisPoint) {
                    continue;
                }
                if (p.doesPathSplitArea()) {
                    continue;
                }
                bigList.push(p);
            }
        }

        //now we need to sort the bigList based on the distances to the apple plus the current distance of the path
        bigList.sort((a, b) => ((a.distanceToApple + a.pathLength) - (b.distanceToApple + b.pathLength)))
        if (bigList.length > 14) {
            bigList.splice(1, bigList.length - 14);
        }
    }
}


function dist(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);
    return c;
}