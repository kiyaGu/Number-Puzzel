//construct objects to hold position, x and y coordinate
let PuzzelEntry = function(position, puzzelNumber, status) {
    this.position = position;
    this.puzzelNumber = puzzelNumber;
    //to keep trac of its position
    this.status = status;
}

let PuzzelBoardPosition = function(x, y, availablity, posNumber) {
    this.x = x;
    this.y = y;
    this.availablity = availablity;
    this.positionNumber = posNumber;
    this.currentPlaceHolder = currentPlaceHolder;
}
let positions = [];
positions.push(new PuzzelBoardPosition(0, 0, false, 1, 1));
positions.push(new PuzzelBoardPosition(125, 0, false, 2, 2));
positions.push(new PuzzelBoardPosition(250, 0, false, 3, 3));
positions.push(new PuzzelBoardPosition(0, 101, false, 4, 4));
positions.push(new PuzzelBoardPosition(125, 101, false, 5, 5));
positions.push(new PuzzelBoardPosition(250, 101, false, 6, 6));
positions.push(new PuzzelBoardPosition(0, 202, false, 7, 7));
positions.push(new PuzzelBoardPosition(125, 202, false, 8, 8));
positions.push(new PuzzelBoardPosition(250, 202, true, 9, 9));


let puzzelEntryNumbers = [];
puzzelEntryNumbers.push(new PuzzelEntry(positions[0], 1, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[1], 2, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[2], 3, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[3], 4, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[4], 5, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[5], 6, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[6], 7, true));
puzzelEntryNumbers.push(new PuzzelEntry(positions[7], 8, true));

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

let repaintPosition = function(x, y) {
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

let findNeibours = function(puzzelEntryNumber) {
    let x = puzzelEntryNumber.x;
    let y = puzzelEntryNumber.y;


}
puzzelEntryNumbers.forEach((element) => {
    drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
})
canvas.addEventListener('click', (event) => {
    let position = getMousePos(event);
    if (position.x > 0 && position.x < 124 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, 1);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            puzzelEntryNumbers[0].status = false;
            positions[0].currentPlaceHolder = 1;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, 1);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            puzzelEntryNumbers[0].status = false;
            positions[0].currentPlaceHolder = 3;
        }
    }
    if (position.x > 125 && position.x < 248 && position.y > 0 && position.y < 100) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, 2);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            puzzelEntryNumbers[1].status = false;
        } else if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, 2);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            puzzelEntryNumbers[1].status = false;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, 2);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            puzzelEntryNumbers[1].status = false;
        }
    }
    if (position.x > 249 && position.x < 372 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, 3);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            puzzelEntryNumbers[2].status = false;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, 3);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            puzzelEntryNumbers[2].status = false;
        }
    }
    if (position.x > 0 && position.x < 124 && position.y > 101 && position.y < 201) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, 4);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            puzzelEntryNumbers[3].status = false;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, 4);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            puzzelEntryNumbers[3].status = false;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, 4);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            puzzelEntryNumbers[3].status = false;
        }
    }
    if (position.x > 125 && position.x < 248 && position.y > 101 && position.y < 201) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, 5);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            puzzelEntryNumbers[4].status = false;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, 5);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            puzzelEntryNumbers[4].status = false;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, 5);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            puzzelEntryNumbers[4].status = false;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, 5);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            puzzelEntryNumbers[4].status = false;
        }
    }
    //6
    if (position.x > 249 && position.x < 372 && position.y > 101 && position.y < 201) {
        if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, 6);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            puzzelEntryNumbers[5].status = false;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, 6);
            repaintPosition(positions[4].x, positions[4].y);
            positions[5].availablity = true;
            puzzelEntryNumbers[5].status = false;
        } else if (positions[8].availablity) {
            drawNumberImg(positions[8].x, positions[8].y, 6);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            puzzelEntryNumbers[5].status = false;
        }
    }
    if (position.x > 0 && position.x < 124 && position.y > 202 && position.y < 300) {
        if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, 7);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            puzzelEntryNumbers[6].status = false;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, 7);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            puzzelEntryNumbers[6].status = false;
        }
    }
    if (position.x > 125 && position.x < 248 && position.y > 202 && position.y < 300) {
        if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, 8);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            puzzelEntryNumbers[7].status = false;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, 8);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            puzzelEntryNumbers[7].status = false;
        } else if (positions[8].availablity) {
            drawNumberImg(positions[8].x, positions[8].y, 8);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            puzzelEntryNumbers[7].status = false;
        }
    }
    if (position.x > 249 && position.x < 372 && position.y > 202 && position.y < 300) {
        if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, 5);
            repaintPosition(positions[5].x, positions[5].y);
            positions[8].availablity = true;
            puzzelEntryNumbers[8].status = false;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, 7);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            puzzelEntryNumbers[6].status = false;
        }
    }
})