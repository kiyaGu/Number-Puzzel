//construct objects to hold position, x and y coordinate
let PuzzelEntry = function(position, puzzelNumber, status, currentLocation) {
    this.position = position;
    this.puzzelNumber = puzzelNumber;
    //to keep trac of its position
    this.status = status;
    this.currentLocation = currentLocation;
}

let PuzzelBoardPosition = function(x, y, availablity, posNumber, currentPlaceHolder) {
    this.x = x;
    this.y = y;
    this.availablity = availablity;
    this.positionNumber = posNumber;
    this.currentPlaceHolder = currentPlaceHolder;
}
let positions = [];
positions.push(new PuzzelBoardPosition(0, 0, false, 0, 1));
positions.push(new PuzzelBoardPosition(125, 0, false, 1, 2));
positions.push(new PuzzelBoardPosition(250, 0, false, 2, 3));
positions.push(new PuzzelBoardPosition(0, 101, false, 3, 4));
positions.push(new PuzzelBoardPosition(125, 101, false, 4, 5));
positions.push(new PuzzelBoardPosition(250, 101, false, 5, 6));
positions.push(new PuzzelBoardPosition(0, 202, false, 6, 7));
positions.push(new PuzzelBoardPosition(125, 202, false, 7, 8));
positions.push(new PuzzelBoardPosition(250, 202, true, 8, 9));


let puzzelEntryNumbers = [];
puzzelEntryNumbers.push(new PuzzelEntry(positions[0], 1, true, 0));
puzzelEntryNumbers.push(new PuzzelEntry(positions[1], 2, true, 1));
puzzelEntryNumbers.push(new PuzzelEntry(positions[2], 3, true, 2));
puzzelEntryNumbers.push(new PuzzelEntry(positions[3], 4, true, 3));
puzzelEntryNumbers.push(new PuzzelEntry(positions[4], 5, true, 4));
puzzelEntryNumbers.push(new PuzzelEntry(positions[5], 6, true, 5));
puzzelEntryNumbers.push(new PuzzelEntry(positions[6], 7, true, 6));
puzzelEntryNumbers.push(new PuzzelEntry(positions[7], 8, true, 7));

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
    //1
    if (position.x > 0 && position.x < 124 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[0].currentPlaceHolder);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            positions[1].availablity = false;
            puzzelEntryNumbers[0].status = false;
            puzzelEntryNumbers[0].currentLocation = 1;
            positions[1].currentPlaceHolder = positions[0].currentPlaceHolder;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[0].currentPlaceHolder);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            positions[3].availablity = false;
            puzzelEntryNumbers[0].status = false;
            puzzelEntryNumbers[0].currentLocation = 3;
            positions[3].currentPlaceHolder = positions[0].currentPlaceHolder;
        }
    }
    //2
    if (position.x > 125 && position.x < 248 && position.y > 0 && position.y < 100) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[0].availablity = false;
            puzzelEntryNumbers[1].status = false;
            puzzelEntryNumbers[1].currentLocation = 0;
            positions[0].currentPlaceHolder = positions[1].currentPlaceHolder;
        } else if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[2].availablity = false;
            puzzelEntryNumbers[1].status = false;
            puzzelEntryNumbers[1].currentLocation = 2;
            positions[2].currentPlaceHolder = positions[1].currentPlaceHolder;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[4].availablity = false;
            puzzelEntryNumbers[1].status = false;
            puzzelEntryNumbers[1].currentLocation = 4;
            positions[4].currentPlaceHolder = positions[1].currentPlaceHolder;
        }
    }
    //3
    if (position.x > 249 && position.x < 372 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[2].currentPlaceHolder);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            positions[1].availablity = false;
            puzzelEntryNumbers[2].status = false;
            puzzelEntryNumbers[2].currentLocation = 1;
            positions[1].currentPlaceHolder = positions[2].currentPlaceHolder;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, positions[2].currentPlaceHolder);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            positions[5].availablity = false;
            puzzelEntryNumbers[2].status = false;
            puzzelEntryNumbers[2].currentLocation = 5;
            positions[5].currentPlaceHolder = positions[2].currentPlaceHolder;
        }
    }
    //4
    if (position.x > 0 && position.x < 124 && position.y > 101 && position.y < 201) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[0].availablity = false;
            puzzelEntryNumbers[3].status = false;
            puzzelEntryNumbers[3].currentLocation = 0;
            positions[0].currentPlaceHolder = positions[3].currentPlaceHolder;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[4].availablity = false;
            puzzelEntryNumbers[3].status = false;
            puzzelEntryNumbers[3].currentLocation = 4;
            positions[4].currentPlaceHolder = positions[3].currentPlaceHolder;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[6].availablity = false;
            puzzelEntryNumbers[3].status = false;
            puzzelEntryNumbers[3].currentLocation = 6;
            positions[6].currentPlaceHolder = positions[3].currentPlaceHolder;
        }
    }
    //5
    if (position.x > 125 && position.x < 248 && position.y > 101 && position.y < 201) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[1].availablity = false;
            puzzelEntryNumbers[4].status = false;
            puzzelEntryNumbers[4].currentLocation = 1;
            positions[1].currentPlaceHolder = positions[4].currentPlaceHolder;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[3].availablity = false;
            puzzelEntryNumbers[4].status = false;
            puzzelEntryNumbers[4].currentLocation = 3;
            positions[3].currentPlaceHolder = positions[4].currentPlaceHolder;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[5].availablity = false;
            puzzelEntryNumbers[4].status = false;
            puzzelEntryNumbers[4].currentLocation = 5;
            positions[5].currentPlaceHolder = positions[4].currentPlaceHolder;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[7].availablity = false;
            puzzelEntryNumbers[4].status = false;
            puzzelEntryNumbers[4].currentLocation = 7;
            positions[7].currentPlaceHolder = positions[4].currentPlaceHolder;
        }
    }
    //6
    if (position.x > 249 && position.x < 372 && position.y > 101 && position.y < 201) {
        if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[2].availablity = false;
            puzzelEntryNumbers[5].status = false;
            puzzelEntryNumbers[5].currentLocation = 2;
            positions[2].currentPlaceHolder = positions[5].currentPlaceHolder;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[4].availablity = false;
            puzzelEntryNumbers[5].status = false;
            puzzelEntryNumbers[5].currentLocation = 4;
            positions[4].currentPlaceHolder = positions[5].currentPlaceHolder;
        } else if (positions[8].availablity) {
            if (positions[8].currentPlaceHolder == 9) {
                positions[8].currentPlaceHolder = 6;
            }
            drawNumberImg(positions[8].x, positions[8].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[8].availablity = false;
            puzzelEntryNumbers[5].status = false;
            puzzelEntryNumbers[5].currentLocation = 8;
            positions[8].currentPlaceHolder = positions[5].currentPlaceHolder;
        }
    }
    //7
    if (position.x > 0 && position.x < 124 && position.y > 202 && position.y < 300) {
        if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[6].currentPlaceHolder);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            positions[3].availablity = false;
            puzzelEntryNumbers[6].status = false;
            puzzelEntryNumbers[6].currentLocation = 3;
            positions[3].currentPlaceHolder = positions[6].currentPlaceHolder;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[6].currentPlaceHolder);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            positions[7].availablity = false;
            puzzelEntryNumbers[6].status = false;
            puzzelEntryNumbers[6].currentLocation = 7;
            positions[7].currentPlaceHolder = positions[6].currentPlaceHolder;
        }
    }
    //8
    if (position.x > 125 && position.x < 248 && position.y > 202 && position.y < 300) {
        if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[4].availablity = false;
            puzzelEntryNumbers[7].status = false;
            puzzelEntryNumbers[7].currentLocation = 4;
            positions[4].currentPlaceHolder = positions[7].currentPlaceHolder;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[6].availablity = false;
            puzzelEntryNumbers[7].status = false;
            puzzelEntryNumbers[7].currentLocation = positions[7].currentPlaceHolder;
            positions[6].currentPlaceHolder = 8;
        } else if (positions[8].availablity) {
            if (positions[7].currentPlaceHolder == 9) {
                positions[7].currentPlaceHolder = 8;
            }
            drawNumberImg(positions[8].x, positions[8].y, 8, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[8].availablity = false;
            puzzelEntryNumbers[7].status = false;
            puzzelEntryNumbers[7].currentLocation = 8;
            positions[8].currentPlaceHolder = positions[7].currentPlaceHolder;
        }
    }
    //9
    if (position.x > 249 && position.x < 372 && position.y > 202 && position.y < 300) {
        if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, positions[8].currentPlaceHolder);
            repaintPosition(positions[8].x, positions[8].y);
            positions[8].availablity = true;
            positions[5].availablity = false;
            positions[5].currentPlaceHolder = positions[8].currentPlaceHolder;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[8].currentPlaceHolder);
            repaintPosition(positions[8].x, positions[8].y);
            positions[8].availablity = true;
            positions[7].availablity = false;
            positions[7].currentPlaceHolder = positions[8].currentPlaceHolder;
        }
    }
})