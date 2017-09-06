const drawNumberImg = require('./drawImage');
const generateRandomNumber = require('./generateRandomNumbers');
const getMousePos = require('./getMousePosition');
const resetGame = require('./resetThePuzzel');
const makeMove = require('./makeMove');
const gameTimer = require('./gameTimer');
const PuzzelEntry  = require('./puzzelEntry');
const PuzzelBoardPosition = require('./puzzelBoardPosition');

//make it harder
let harderPuzzel = function() {
currentGame = "harderPuzzel";
let index = [];
mixThePuzzel = function() {
    if (index.length < 16) {
        let value = generateRandomNumber(16);
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

global.positions = [];
positions.push(new PuzzelBoardPosition(0, 0, false, 0, index[0]));
positions.push(new PuzzelBoardPosition(81, 0, false, 1, index[1]));
positions.push(new PuzzelBoardPosition(162, 0, false, 2, index[2]));
positions.push(new PuzzelBoardPosition(243, 0, false, 3, index[3]));
positions.push(new PuzzelBoardPosition(0, 71, false, 4, index[4]));
positions.push(new PuzzelBoardPosition(81, 71, false, 5, index[5]));
positions.push(new PuzzelBoardPosition(162, 71, false, 6, index[6]));
positions.push(new PuzzelBoardPosition(243, 71, false, 7, index[7]));
positions.push(new PuzzelBoardPosition(0, 142, false, 8, index[8]));
positions.push(new PuzzelBoardPosition(81, 142, false, 9, index[9]));
positions.push(new PuzzelBoardPosition(162, 142, false, 10, index[10]));
positions.push(new PuzzelBoardPosition(243, 142, false, 11, index[11]));
positions.push(new PuzzelBoardPosition(0, 213, false, 12, index[12]));
positions.push(new PuzzelBoardPosition(81, 213, false, 13, index[13]));
positions.push(new PuzzelBoardPosition(162, 213, false, 14, index[14]));
positions.push(new PuzzelBoardPosition(243, 213, false, 15, index[15]));
positions.forEach((element) => {
    if (element.currentPlaceHolder == 16)
        element.availablity = true;
})

let puzzelEntryNumbers = [];
puzzelEntryNumbers.push(new PuzzelEntry(positions[0], index[0], true, 0));
puzzelEntryNumbers.push(new PuzzelEntry(positions[1], index[1], true, 1));
puzzelEntryNumbers.push(new PuzzelEntry(positions[2], index[2], true, 2));
puzzelEntryNumbers.push(new PuzzelEntry(positions[3], index[3], true, 3));
puzzelEntryNumbers.push(new PuzzelEntry(positions[4], index[4], true, 4));
puzzelEntryNumbers.push(new PuzzelEntry(positions[5], index[5], true, 5));
puzzelEntryNumbers.push(new PuzzelEntry(positions[6], index[6], true, 6));
puzzelEntryNumbers.push(new PuzzelEntry(positions[7], index[7], true, 7));
puzzelEntryNumbers.push(new PuzzelEntry(positions[8], index[8], true, 8));
puzzelEntryNumbers.push(new PuzzelEntry(positions[9], index[9], true, 9));
puzzelEntryNumbers.push(new PuzzelEntry(positions[10], index[10], true, 10));
puzzelEntryNumbers.push(new PuzzelEntry(positions[11], index[11], true, 11));
puzzelEntryNumbers.push(new PuzzelEntry(positions[12], index[12], true, 12));
puzzelEntryNumbers.push(new PuzzelEntry(positions[13], index[13], true, 13));
puzzelEntryNumbers.push(new PuzzelEntry(positions[14], index[14], true, 14));
puzzelEntryNumbers.push(new PuzzelEntry(positions[15], index[15], true, 15));
let harderGameCanvas = document.getElementById('harder-puzzel');
canvasContext = harderGameCanvas.getContext('2d');
canvasContext.clearRect(0, 0, harderGameCanvas.width, harderGameCanvas.height);


puzzelEntryNumbers.forEach((element) => {
    drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
})

harderGameCanvas.addEventListener('click', (event) => {
    event.preventDefault();
    let position = getMousePos(harderGameCanvas, event);
    //set the time to 10min
    gameTimer(300, resetGame);

    //p0..1,4
    if (position.x > 0 && position.x < 81 && position.y > 0 && position.y < 71) {
        if (positions[1].availablity) {
            makeMove(positions[0], positions[1]);
        } else if (positions[4].availablity) {
            makeMove(positions[0], positions[4]);
        }
    }
    //p1...0,2,5
    else if (position.x > 82 && position.x < 162 && position.y > 0 && position.y < 71) {
        if (positions[0].availablity) {
            makeMove(positions[1], positions[0]);
        } else if (positions[2].availablity) {
            makeMove(positions[1], positions[2]);
        } else if (positions[5].availablity) {
            makeMove(positions[1], positions[5]);
        }
    }
    //p2...1,3,6
    else if (position.x > 163 && position.x < 243 && position.y > 0 && position.y < 71) {
        if (positions[1].availablity) {
            makeMove(positions[2], positions[1]);
        } else if (positions[3].availablity) {
            makeMove(positions[2], positions[3]);
        } else if (positions[6].availablity) {
            makeMove(positions[2], positions[6]);
        }
    }
    //p3...2,7
    else if (position.x > 244 && position.x < 324 && position.y > 0 && position.y < 71) {
        if (positions[2].availablity) {
            makeMove(positions[3], positions[2]);
        } else if (positions[7].availablity) {
            makeMove(positions[3], positions[7]);
        }
    }
    //p4....0,5,8
    else if (position.x > 0 && position.x < 81 && position.y > 72 && position.y < 142) {
        if (positions[0].availablity) {
            makeMove(positions[4], positions[0]);
        } else if (positions[5].availablity) {
            makeMove(positions[4], positions[5]);
        } else if (positions[8].availablity) {
            makeMove(positions[4], positions[8]);
        }
    }
    //p5...1,4,6,9
    else if (position.x > 82 && position.x < 162 && position.y > 72 && position.y < 142) {
        if (positions[1].availablity) {
            makeMove(positions[5], positions[1]);
        } else if (positions[4].availablity) {
            makeMove(positions[5], positions[4]);
        } else if (positions[6].availablity) {
            makeMove(positions[5], positions[6]);
        } else if (positions[9].availablity) {
            makeMove(positions[5], positions[9]);
        }
    }
    //p6...2,5,7,10
    else if (position.x > 163 && position.x < 243 && position.y > 72 && position.y < 142) {
        if (positions[2].availablity) {
            makeMove(positions[6], positions[2]);
        } else if (positions[5].availablity) {
            makeMove(positions[6], positions[5]);
        } else if (positions[7].availablity) {
            makeMove(positions[6], positions[7]);
        } else if (positions[10].availablity) {
            makeMove(positions[6], positions[10]);
        }
    }
    //p7..3,6,11
    else if (position.x > 244 && position.x < 324 && position.y > 72 && position.y < 142) {
        if (positions[3].availablity) {
            makeMove(positions[7], positions[3]);
        } else if (positions[6].availablity) {
            makeMove(positions[7], positions[6]);
        } else if (positions[11].availablity) {
            makeMove(positions[7], positions[11]);
        }
    }
    //p8...4,9,12
    else if (position.x > 0 && position.x < 81 && position.y > 143 && position.y < 213) {
        if (positions[4].availablity) {
            makeMove(positions[8], positions[4]);
        } else if (positions[9].availablity) {
            makeMove(positions[8], positions[9]);
        } else if (positions[12].availablity) {
            makeMove(positions[8], positions[12]);
        }
    }

    //p9...5,8,10,13
    else if (position.x > 82 && position.x < 162 && position.y > 143 && position.y < 213) {
        if (positions[5].availablity) {
            makeMove(positions[9], positions[5]);
        } else if (positions[8].availablity) {
            makeMove(positions[9], positions[8]);
        } else if (positions[10].availablity) {
            makeMove(positions[9], positions[10]);
        } else if (positions[13].availablity) {
            makeMove(positions[9], positions[13]);
        }
    }
    //p10...6,9,11,14
    else if (position.x > 163 && position.x < 243 && position.y > 143 && position.y < 213) {
        if (positions[6].availablity) {
            makeMove(positions[10], positions[6]);
        } else if (positions[9].availablity) {
            makeMove(positions[10], positions[9]);
        } else if (positions[11].availablity) {
            makeMove(positions[10], positions[11]);
        } else if (positions[14].availablity) {
            makeMove(positions[10], positions[14]);
        }
    }
    //p11..7,10,15
    else if (position.x > 244 && position.x < 324 && position.y > 143 && position.y < 213) {
        if (positions[7].availablity) {
            makeMove(positions[11], positions[7]);
        } else if (positions[10].availablity) {
            makeMove(positions[11], positions[10]);
        } else if (positions[15].availablity) {
            makeMove(positions[11], positions[15]);
        }
    }
    //p12...8,13
    else if (position.x > 0 && position.x < 81 && position.y > 214 && position.y < 284) {
        if (positions[8].availablity) {
            makeMove(positions[12], positions[8]);
        } else if (positions[13].availablity) {
            makeMove(positions[12], positions[13]);
        }
    }
    //p13...9,12,14
    else if (position.x > 82 && position.x < 162 && position.y > 214 && position.y < 284) {
        if (positions[9].availablity) {
            makeMove(positions[13], positions[9]);
        } else if (positions[12].availablity) {
            makeMove(positions[13], positions[12]);
        } else if (positions[14].availablity) {
            makeMove(positions[13], positions[14]);
        }
    }
    //p14...10,13,15
    else if (position.x > 163 && position.x < 243 && position.y > 214 && position.y < 284) {
        if (positions[10].availablity) {
            makeMove(positions[14], positions[10]);
        } else if (positions[13].availablity) {
            makeMove(positions[14], positions[13]);
        } else if (positions[15].availablity) {
            makeMove(positions[14], positions[15]);
        }
    }
    //p15...11,14
    else if (position.x > 244 && position.x < 324 && position.y > 214 && position.y < 284) {
        if (positions[11].availablity) {
            makeMove(positions[15], positions[11]);
        } else if (positions[14].availablity) {
            makeMove(positions[15], positions[14]);
        }
    }
    if (checkGameResult(positions)) {
        displayMessage();
    }
})
}
module.exports = harderPuzzel;
