//construct objects to hold position, x and y coordinate
let PuzzelEntry = function(position, puzzelNumber) {
    this.position = position;
    this.puzzelNumber = puzzelNumber;
}

let PuzzelBoardPosition = function(x, y, status, posNumber) {
    this.x = x;
    this.y = y;
    this.status = status;
    this.positionNumber = posNumber;
}
let positions = [];
positions.push(new PuzzelBoardPosition(0, 0, true, 1));
positions.push(new PuzzelBoardPosition(125, 0, true, 2));
positions.push(new PuzzelBoardPosition(250, 0, true, 3));
positions.push(new PuzzelBoardPosition(0, 101, true, 4));
positions.push(new PuzzelBoardPosition(125, 101, true, 5));
positions.push(new PuzzelBoardPosition(250, 101, true, 6));
positions.push(new PuzzelBoardPosition(0, 202, true, 7));
positions.push(new PuzzelBoardPosition(125, 202, true, 8));


let puzzelEntryNumbers = [];
puzzelEntryNumbers.push(new PuzzelEntry(positions[0], 1));
puzzelEntryNumbers.push(new PuzzelEntry(positions[1], 2));
puzzelEntryNumbers.push(new PuzzelEntry(positions[2], 3));
puzzelEntryNumbers.push(new PuzzelEntry(positions[3], 4));
puzzelEntryNumbers.push(new PuzzelEntry(positions[4], 5));
puzzelEntryNumbers.push(new PuzzelEntry(positions[5], 6));
puzzelEntryNumbers.push(new PuzzelEntry(positions[6], 7));
puzzelEntryNumbers.push(new PuzzelEntry(positions[7], 8));

console.log(positions);
console.log(puzzelEntryNumbers);
//
let canvas = document.getElementById('game-canvas');
let canvasContext = canvas.getContext('2d');

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    };
}

let colorRect = function(x, y) {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(x, y, 124, 100);
}


let drawNumberImg = function(dx, dy, i) {
    let img = document.createElement("img");
    img.src = "images/number-" + i + ".gif";
    img.addEventListener("load", function() {
        canvasContext.drawImage(img, dx, dy);
    });
}
puzzelEntryNumbers.forEach((element) => {
    drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
})

canvas.addEventListener('click', (event) => {
    let position = getMousePos(event);
    if (position.x > 0 && position.x < 124 && position.y > 0 && position.y < 100) {
        console.log(position.x, position.y, "1");
        colorRect(0, 0);
        drawNumberImg(250, 202, 1);
    }
    if (position.x > 125 && position.x < 248 && position.y > 0 && position.y < 100) {
        console.log(position.x, position.y, "2");
        colorRect(125, 0);
        drawNumberImg(250, 202, 2);
    }
    if (position.x > 249 && position.x < 372 && position.y > 0 && position.y < 100) {
        console.log(position.x, position.y, "3");
        colorRect(250, 0);
        drawNumberImg(250, 202, 3);
    }
    if (position.x > 0 && position.x < 124 && position.y > 101 && position.y < 201) {
        console.log(position.x, position.y, "4");
        colorRect(0, 101);
        drawNumberImg(250, 202, 4);
    }
    if (position.x > 125 && position.x < 248 && position.y > 101 && position.y < 201) {
        console.log(position.x, position.y, "5");
        colorRect(125, 101);
        drawNumberImg(250, 202, 5);
    }
    if (position.x > 249 && position.x < 372 && position.y > 101 && position.y < 201) {
        console.log(position.x, position.y, "6");
        colorRect(250, 101);
        drawNumberImg(250, 202, 6);
    }
    if (position.x > 0 && position.x < 124 && position.y > 202 && position.y < 300) {
        console.log(position.x, position.y, "7");
        colorRect(0, 202);
        drawNumberImg(250, 202, 7);
    }
    if (position.x > 125 && position.x < 248 && position.y > 202 && position.y < 300) {
        console.log(position.x, position.y, "8");
        colorRect(125, 202);
        drawNumberImg(250, 202, 8);
    }
})