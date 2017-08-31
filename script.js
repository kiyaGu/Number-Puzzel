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

generateRandomNumber = function() {
    return (Math.floor(Math.random() * 9) + 1);
}
index = [];
mixThePuzzel = function() {
    if (index.length < 9) {
        let value = generateRandomNumber();
        if (index.length == 0) {
            index.push(value);
        } else {
            if (!(index.includes(value)))
                index.push(value);
        }
        mixThePuzzel();
    }
}
mixThePuzzel();
console.log(index)
let positions = [];
positions.push(new PuzzelBoardPosition(0, 0, false, 1, index[0]));
positions.push(new PuzzelBoardPosition(125, 0, false, 2, index[1]));
positions.push(new PuzzelBoardPosition(250, 0, false, 3, index[2]));
positions.push(new PuzzelBoardPosition(0, 101, false, 4, index[3]));
positions.push(new PuzzelBoardPosition(125, 101, false, 5, index[4]));
positions.push(new PuzzelBoardPosition(250, 101, false, 6, index[5]));
positions.push(new PuzzelBoardPosition(0, 202, false, 7, index[6]));
positions.push(new PuzzelBoardPosition(125, 202, false, 8, index[7]));
positions.push(new PuzzelBoardPosition(250, 202, false, 9, index[8]));
positions.forEach((element) => {
    if (element.currentPlaceHolder == 9)
        element.availablity = true;
})

let puzzelEntryNumbers = [];
puzzelEntryNumbers.push(new PuzzelEntry(positions[0], index[0], true, 1));
puzzelEntryNumbers.push(new PuzzelEntry(positions[1], index[1], true, 2));
puzzelEntryNumbers.push(new PuzzelEntry(positions[2], index[2], true, 3));
puzzelEntryNumbers.push(new PuzzelEntry(positions[3], index[3], true, 4));
puzzelEntryNumbers.push(new PuzzelEntry(positions[4], index[4], true, 5));
puzzelEntryNumbers.push(new PuzzelEntry(positions[5], index[5], true, 6));
puzzelEntryNumbers.push(new PuzzelEntry(positions[6], index[6], true, 7));
puzzelEntryNumbers.push(new PuzzelEntry(positions[7], index[7], true, 8));
puzzelEntryNumbers.push(new PuzzelEntry(positions[8], index[8], true, 9));
puzzelEntryNumbers.forEach((element) => {
    console.log(element);
})
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


puzzelEntryNumbers.forEach((element) => {
    // console.log(element)
    drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
})
let checkPosition = function(i) {
    // console.log(i, positions[i].positionNumber, positions[i].currentPlaceHolder)
    return (positions[i].positionNumber == i + 1 && positions[i].currentPlaceHolder == i + 1);

}
let checkGameResult = function() {
    let test = positions.reduce((preTest, position) => {
        console.log(preTest, position)
        return preTest && checkPosition(positions.indexOf(position))
    });
    console.log(test)
    return test;
}



canvas.addEventListener('click', (event) => {
    let position = getMousePos(event);
    //1
    if (position.x > 0 && position.x < 124 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[0].currentPlaceHolder);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            positions[1].availablity = false;

            positions[1].currentPlaceHolder = positions[0].currentPlaceHolder;
            positions[0].currentPlaceHolder = 9;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[0].currentPlaceHolder);
            repaintPosition(positions[0].x, positions[0].y);
            positions[0].availablity = true;
            positions[3].availablity = false;

            positions[3].currentPlaceHolder = positions[0].currentPlaceHolder;
            positions[0].currentPlaceHolder = 9;
        }
    }
    //2
    if (position.x > 125 && position.x < 248 && position.y > 0 && position.y < 100) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[0].availablity = false;

            positions[0].currentPlaceHolder = positions[1].currentPlaceHolder;
            positions[1].currentPlaceHolder = 9;
        } else if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[2].availablity = false;

            positions[2].currentPlaceHolder = positions[1].currentPlaceHolder;
            positions[1].currentPlaceHolder = 9;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[1].currentPlaceHolder);
            repaintPosition(positions[1].x, positions[1].y);
            positions[1].availablity = true;
            positions[4].availablity = false;

            positions[4].currentPlaceHolder = positions[1].currentPlaceHolder;
            positions[1].currentPlaceHolder = 9;
        }
    }
    //3
    if (position.x > 249 && position.x < 372 && position.y > 0 && position.y < 100) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[2].currentPlaceHolder);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            positions[1].availablity = false;

            positions[1].currentPlaceHolder = positions[2].currentPlaceHolder;
            positions[2].currentPlaceHolder = 9;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, positions[2].currentPlaceHolder);
            repaintPosition(positions[2].x, positions[2].y);
            positions[2].availablity = true;
            positions[5].availablity = false;

            positions[5].currentPlaceHolder = positions[2].currentPlaceHolder;
            positions[2].currentPlaceHolder = 9;
        }
    }
    //4
    if (position.x > 0 && position.x < 124 && position.y > 101 && position.y < 201) {
        if (positions[0].availablity) {
            drawNumberImg(positions[0].x, positions[0].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[0].availablity = false;

            positions[0].currentPlaceHolder = positions[3].currentPlaceHolder;
            positions[3].currentPlaceHolder = 9;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[4].availablity = false;

            positions[4].currentPlaceHolder = positions[3].currentPlaceHolder;
            positions[3].currentPlaceHolder = 9;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, positions[3].currentPlaceHolder);
            repaintPosition(positions[3].x, positions[3].y);
            positions[3].availablity = true;
            positions[6].availablity = false;

            positions[6].currentPlaceHolder = positions[3].currentPlaceHolder;
            positions[3].currentPlaceHolder = 9;
        }
    }
    //5
    if (position.x > 125 && position.x < 248 && position.y > 101 && position.y < 201) {
        if (positions[1].availablity) {
            drawNumberImg(positions[1].x, positions[1].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[1].availablity = false;

            positions[1].currentPlaceHolder = positions[4].currentPlaceHolder;
            positions[4].currentPlaceHolder = 9;
        } else if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[3].availablity = false;

            positions[3].currentPlaceHolder = positions[4].currentPlaceHolder;
            positions[4].currentPlaceHolder = 9;
        } else if (positions[5].availablity) {
            drawNumberImg(positions[5].x, positions[5].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[5].availablity = false;

            positions[5].currentPlaceHolder = positions[4].currentPlaceHolder;
            positions[4].currentPlaceHolder = 9;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[4].currentPlaceHolder);
            repaintPosition(positions[4].x, positions[4].y);
            positions[4].availablity = true;
            positions[7].availablity = false;

            positions[7].currentPlaceHolder = positions[4].currentPlaceHolder;
            positions[4].currentPlaceHolder = 9;
        }
    }
    //6
    if (position.x > 249 && position.x < 372 && position.y > 101 && position.y < 201) {
        if (positions[2].availablity) {
            drawNumberImg(positions[2].x, positions[2].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[2].availablity = false;

            positions[2].currentPlaceHolder = positions[5].currentPlaceHolder;
            positions[5].currentPlaceHolder = 9;
        } else if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[4].availablity = false;

            positions[4].currentPlaceHolder = positions[5].currentPlaceHolder;
            positions[5].currentPlaceHolder = 9;
        } else if (positions[8].availablity) {
            if (positions[8].currentPlaceHolder == 9) {
                positions[8].currentPlaceHolder = 6;
            }
            drawNumberImg(positions[8].x, positions[8].y, positions[5].currentPlaceHolder);
            repaintPosition(positions[5].x, positions[5].y);
            positions[5].availablity = true;
            positions[8].availablity = false;

            positions[8].currentPlaceHolder = positions[5].currentPlaceHolder;
            positions[5].currentPlaceHolder = 9;
        }
    }
    //7
    if (position.x > 0 && position.x < 124 && position.y > 202 && position.y < 300) {
        if (positions[3].availablity) {
            drawNumberImg(positions[3].x, positions[3].y, positions[6].currentPlaceHolder);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            positions[3].availablity = false;

            positions[3].currentPlaceHolder = positions[6].currentPlaceHolder;
            positions[6].currentPlaceHolder = 9;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[6].currentPlaceHolder);
            repaintPosition(positions[6].x, positions[6].y);
            positions[6].availablity = true;
            positions[7].availablity = false;

            positions[7].currentPlaceHolder = positions[6].currentPlaceHolder;
            positions[6].currentPlaceHolder = 9;
        }
    }
    //8
    if (position.x > 125 && position.x < 248 && position.y > 202 && position.y < 300) {
        if (positions[4].availablity) {
            drawNumberImg(positions[4].x, positions[4].y, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[4].availablity = false;

            positions[4].currentPlaceHolder = positions[7].currentPlaceHolder;
            positions[7].currentPlaceHolder = 9;
        } else if (positions[6].availablity) {
            drawNumberImg(positions[6].x, positions[6].y, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[6].availablity = false;

            positions[6].currentPlaceHolder = positions[7].currentPlaceHolder;
            positions[7].currentPlaceHolder = 9;
        } else if (positions[8].availablity) {
            if (positions[8].currentPlaceHolder == 9) {
                positions[8].currentPlaceHolder = 8;
            }
            drawNumberImg(positions[8].x, positions[8].y, positions[7].currentPlaceHolder);
            repaintPosition(positions[7].x, positions[7].y);
            positions[7].availablity = true;
            positions[8].availablity = false;

            positions[8].currentPlaceHolder = positions[7].currentPlaceHolder;
            positions[7].currentPlaceHolder = 9;
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
            positions[8].currentPlaceHolder = 9;
        } else if (positions[7].availablity) {
            drawNumberImg(positions[7].x, positions[7].y, positions[8].currentPlaceHolder);
            repaintPosition(positions[8].x, positions[8].y);
            positions[8].availablity = true;
            positions[7].availablity = false;
            positions[7].currentPlaceHolder = positions[8].currentPlaceHolder;
            positions[8].currentPlaceHolder = 9;
        }
    }
    if (checkGameResult())
        setTimeout(() => {
            alert("Congratulation, you won...HURRAH!!!");
        }, 100);
})