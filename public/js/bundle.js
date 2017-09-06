(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let checkPosition = function(positions, i) {
    return (positions[i].positionNumber == i && positions[i].currentPlaceHolder == i + 1);
}
let checkGameResult = function(positions) {
    let test = positions.reduce((preTest, position) => {
        return preTest && checkPosition(positions, positions.indexOf(position))
    });
    return test;
}

module.exports = checkGameResult;

},{}],2:[function(require,module,exports){
let displayMessage = function() {
  const easierPuzzel = require('./easierPuzzel');
  const harderPuzzel = require('./harderPuzzel');
    document.getElementById('resultContainer').innerHTML = "<p id='result' class='animated flash'><span>Congratulation</span>, you won...HURRAH!!!</p>";
    $('#game-timer').countdown('destroy');
    setTimeout(() => {
        document.getElementById('resultContainer').innerHTML = "";
        if (currentGame == "easierPuzzel")
            easierPuzzel();
        else
            harderPuzzel();
    }, 3000);

}

module.exports = displayMessage;

},{"./easierPuzzel":4,"./harderPuzzel":8}],3:[function(require,module,exports){
let drawNumberImg = function(dx, dy, i) {
    let img = document.createElement("img");
    if (currentGame == "easierPuzzel")
        img.src = "/images/numbers" + i + ".gif";
    else if (currentGame == "harderPuzzel")
        img.src = "/images/puzzel15/numbers" + i + ".gif";
    img.addEventListener("load", function() {
        if (currentGame == "harderPuzzel") {
            canvasContext.clearRect(dx, dy, 80, 70);
            canvasContext.drawImage(img, dx, dy, 80, 70);
        } else {
            canvasContext.clearRect(dx, dy, 100, 80);
            canvasContext.drawImage(img, dx, dy);
        }
    });
}
module.exports = drawNumberImg;

},{}],4:[function(require,module,exports){

const drawNumberImg = require('./drawImage');
const generateRandomNumber = require('./generateRandomNumbers');
const getMousePos = require('./getMousePosition');
const resetGame = require('./resetThePuzzel');
const makeMove = require('./makeMove');
const gameTimer = require('./gameTimer');
const PuzzelEntry  = require('./puzzelEntry');
const PuzzelBoardPosition = require('./puzzelBoardPosition');
const checkGameResult = require('./checkGameResult');
const displayMessage = require('./displayMessage');
//easier puzzel
let easierPuzzel = function() {
        currentGame = "easierPuzzel";
        let index = [];
        mixThePuzzel = function() {
            if (index.length < 9) {
                let value = generateRandomNumber(9);
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

        this.positions = [];
        //(x, y, availablity, posNumber, currentPlaceHolder)
        positions.push(new PuzzelBoardPosition(0, 0, false, 0, index[0]));
        positions.push(new PuzzelBoardPosition(101, 0, false, 1, index[1]));
        positions.push(new PuzzelBoardPosition(202, 0, false, 2, index[2]));
        positions.push(new PuzzelBoardPosition(0, 81, false, 3, index[3]));
        positions.push(new PuzzelBoardPosition(101, 81, false, 4, index[4]));
        positions.push(new PuzzelBoardPosition(202, 81, false, 5, index[5]));
        positions.push(new PuzzelBoardPosition(0, 162, false, 6, index[6]));
        positions.push(new PuzzelBoardPosition(101, 162, false, 7, index[7]));
        positions.push(new PuzzelBoardPosition(202, 162, false, 8, index[8]));
        positions.forEach((element) => {
            if (element.currentPlaceHolder == 9)
                element.availablity = true;
        })

        let puzzelEntryNumbers = [];
        //(position, puzzelNumber, currentLocation)
        puzzelEntryNumbers.push(new PuzzelEntry(positions[0], index[0], 0));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[1], index[1], 1));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[2], index[2], 2));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[3], index[3], 3));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[4], index[4], 4));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[5], index[5], 5));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[6], index[6], 6));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[7], index[7], 7));
        puzzelEntryNumbers.push(new PuzzelEntry(positions[8], index[8], 8));

        let easyGameCanvas = document.getElementById('easy-puzzel');
        canvasContext = easyGameCanvas.getContext('2d');
        // canvasContext.clearRect(0, 0, easyGameCanvas.width, easyGameCanvas.height);
        puzzelEntryNumbers.forEach((element) => {
            drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
        })
        easyGameCanvas.addEventListener('click', (event) => {
            event.preventDefault();
            //set the time to 10min
            gameTimer(180, resetGame);
            let position = getMousePos(easyGameCanvas, event);

            //p0
            if ((position.x > 0 && position.x < 101) && (position.y > 0 && position.y < 81)) {
                if (positions[1].availablity) {
                    makeMove(positions[0], positions[1]);
                } else if (positions[3].availablity) {
                    makeMove(positions[0], positions[3]);
                }
            }
            //p1
            else if ((position.x > 102 && position.x < 202) && (position.y > 0 && position.y < 81)) {
                if (positions[0].availablity) {
                    makeMove(positions[1], positions[0]);
                } else if (positions[2].availablity) {
                    makeMove(positions[1], positions[2]);
                } else if (positions[4].availablity) {
                    makeMove(positions[1], positions[4]);
                }
            }
            //p2
            else if ((position.x > 203 && position.x < 303) && (position.y > 0 && position.y < 81)) {
                if (positions[1].availablity) {
                    makeMove(positions[2], positions[1]);
                } else if (positions[5].availablity) {
                    makeMove(positions[2], positions[5]);
                }
            }
            //p3
            else if ((position.x > 0 && position.x < 101) && (position.y > 82 && position.y < 162)) {
                if (positions[0].availablity) {
                    makeMove(positions[3], positions[0]);
                } else if (positions[4].availablity) {
                    makeMove(positions[3], positions[4]);
                } else if (positions[6].availablity) {
                    makeMove(positions[3], positions[6]);
                }
            }
            //p4
            else if ((position.x > 102 && position.x < 202) && (position.y > 82 && position.y < 162)) {
                if (positions[1].availablity) {
                    makeMove(positions[4], positions[1]);
                } else if (positions[3].availablity) {
                    makeMove(positions[4], positions[3]);
                } else if (positions[5].availablity) {
                    makeMove(positions[4], positions[5]);
                } else if (positions[7].availablity) {
                    makeMove(positions[4], positions[7]);
                }
            }
            //p5
            else if ((position.x > 203 && position.x < 303) && (position.y > 82 && position.y < 162)) {
                if (positions[2].availablity) {
                    makeMove(positions[5], positions[2]);
                } else if (positions[4].availablity) {
                    makeMove(positions[5], positions[4]);
                } else if (positions[8].availablity) {
                    makeMove(positions[5], positions[8]);
                }
            }
            //p6
            else if ((position.x > 0 && position.x < 101) && (position.y > 163 && position.y < 243)) {
                if (positions[3].availablity) {
                    makeMove(positions[6], positions[3]);
                } else if (positions[7].availablity) {
                    makeMove(positions[6], positions[7]);
                }
            }
            //p7
            else if ((position.x > 102 && position.x < 202) && (position.y > 163 && position.y < 243)) {
                if (positions[4].availablity) {
                    makeMove(positions[7], positions[4]);
                } else if (positions[6].availablity) {
                    makeMove(positions[7], positions[6]);
                } else if (positions[8].availablity) {
                    makeMove(positions[7], positions[8]);
                }
            }
            //p8
            else if ((position.x > 203 && position.x < 303) && (position.y > 163 && position.y < 243)) {
                if (positions[5].availablity) {
                    makeMove(positions[8], positions[5]);
                } else if (positions[7].availablity) {
                    makeMove(positions[8], positions[7]);
                }
            }
            if (checkGameResult(positions)) {
                displayMessage();
            }
        })
    }
module.exports = easierPuzzel;

},{"./checkGameResult":1,"./displayMessage":2,"./drawImage":3,"./gameTimer":5,"./generateRandomNumbers":6,"./getMousePosition":7,"./makeMove":9,"./puzzelBoardPosition":10,"./puzzelEntry":11,"./resetThePuzzel":12}],5:[function(require,module,exports){
let gameTimer = function(ceiling, callback) {
    //game timer
    shortly = new Date();
    shortly.setSeconds(shortly.getSeconds() + ceiling);
    // $('#game-timer').countdown('option', { until: shortly });
    $('#game-timer').countdown({
        until: shortly,
        expiryText: '<span>Oops, you LOST!!!</span>',
        onExpiry: callback,
        format: 'MS'//minute and seconds
    });
}
module.exports = gameTimer; 

},{}],6:[function(require,module,exports){
let generateRandomNumber = function(upperBound) {
    return (Math.floor(Math.random() * upperBound) + 1);
}
module.exports = generateRandomNumber;

},{}],7:[function(require,module,exports){
let getMousePos = function(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    };
}
module.exports = getMousePos;

},{}],8:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./drawImage":3,"./gameTimer":5,"./generateRandomNumbers":6,"./getMousePosition":7,"./makeMove":9,"./puzzelBoardPosition":10,"./puzzelEntry":11,"./resetThePuzzel":12}],9:[function(require,module,exports){

let makeMove = function(moveFrom, moveTo) {
  const drawNumberImg = require('./drawImage');
    moveFrom.availablity = true;
    moveTo.availablity = false;
    moveTo.currentPlaceHolder = moveFrom.currentPlaceHolder;
    drawNumberImg(moveTo.x, moveTo.y, moveTo.currentPlaceHolder);

    if (currentGame == "easierPuzzel")
        drawNumberImg(moveFrom.x, moveFrom.y, 9);
    else if (currentGame == "harderPuzzel")
        drawNumberImg(moveFrom.x, moveFrom.y, 16);

    if (currentGame == "easierPuzzel")
        moveFrom.currentPlaceHolder = 9;
    else if (currentGame == "harderPuzzel")
        moveFrom.currentPlaceHolder = 16;
}
module.exports = makeMove;

},{"./drawImage":3}],10:[function(require,module,exports){
let PuzzelBoardPosition = function(x, y, availablity, posNumber, currentPlaceHolder) {
    this.x = x;
    this.y = y;
    this.availablity = availablity;
    this.positionNumber = posNumber;
    this.currentPlaceHolder = currentPlaceHolder;
}
module.exports = PuzzelBoardPosition;

},{}],11:[function(require,module,exports){
//construct objects to hold position, x and y coordinate
let PuzzelEntry = function(position, puzzelNumber, currentLocation) {
    this.position = position;
    this.puzzelNumber = puzzelNumber;
    this.currentLocation = currentLocation;
}
module.exports = PuzzelEntry; 

},{}],12:[function(require,module,exports){

//reset puzzel
let resetGame = function() {
  const easierPuzzel = require('./easierPuzzel');
  const harderPuzzel = require('./harderPuzzel');
        let switchGame = document.querySelector('#make-it-harder').innerHTML;
        if (switchGame.trim() == "Make It Harder") {
            easierPuzzel();
            $('#game-timer').countdown('destroy');
        } else {
            harderPuzzel();
            $('#game-timer').countdown('destroy');
        }
    }
module.exports = resetGame;

},{"./easierPuzzel":4,"./harderPuzzel":8}],13:[function(require,module,exports){
(function (global){
const easierPuzzel = require('./easierPuzzel');
const harderPuzzel = require('./harderPuzzel');
const drawNumberImg = require('./drawImage');
const generateRandomNumber = require('./generateRandomNumbers');
const getMousePos = require('./getMousePosition');
const resetGame = require('./resetThePuzzel');
const makeMove = require('./makeMove');
const gameTimer = require('./gameTimer');
const PuzzelEntry  = require('./puzzelEntry');
const PuzzelBoardPosition = require('./puzzelBoardPosition');
global.currentGame, global.canvasContext;

//change game type
document.getElementById('make-it-harder').addEventListener('click', (event) => {
    let harderPuzzelContainer = document.querySelector('#harder-puzzel-container');
    let easierPuzzelContainer = document.querySelector('#easy-puzzel-container');
    let switchGame = document.querySelector('#make-it-harder').innerHTML;
    if (switchGame.trim() == "Make It Harder") {
        harderPuzzelContainer.style.display = 'block';
        easierPuzzelContainer.style.display = 'none';
        harderPuzzel();
        $('#game-timer').countdown('destroy');
        document.querySelector('#make-it-harder').innerHTML = "Make It Easier";
    } else {
        harderPuzzelContainer.style.display = 'none';
        easierPuzzelContainer.style.display = 'block';
        easierPuzzel();
        $('#game-timer').countdown('destroy');
        document.querySelector('#make-it-harder').innerHTML = "Make It Harder";
    }

});
//reset the game
document.getElementById('reset').addEventListener('click', (event) => {
    resetGame();
});
//draw the numbers image on the canvas
// drawNumberImg();
// //make move to the availabel spot
// makeMove();
// //timer to control the game-timer
// gameTimer();
// //get the mouse position when the user click on the canvas
// getMousePos();
// //construct the positions on the canvas
// // PuzzelBoardPosition();
// // // // //construct the entries/numbers on each position on the canvas
// // PuzzelEntry()
// // //genertate random numbers to mix the puzzel
// generateRandomNumber();
// //easierPuzzel
// // easierPuzzel();
//load easierPuzzel initially
easierPuzzel();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./drawImage":3,"./easierPuzzel":4,"./gameTimer":5,"./generateRandomNumbers":6,"./getMousePosition":7,"./harderPuzzel":8,"./makeMove":9,"./puzzelBoardPosition":10,"./puzzelEntry":11,"./resetThePuzzel":12}]},{},[13]);
