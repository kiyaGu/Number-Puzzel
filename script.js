let easyPuzzel = function() {
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

    let positions = [];
    positions.push(new PuzzelBoardPosition(0, 0, false, 1, index[0]));
    positions.push(new PuzzelBoardPosition(101, 0, false, 2, index[1]));
    positions.push(new PuzzelBoardPosition(202, 0, false, 3, index[2]));
    positions.push(new PuzzelBoardPosition(0, 81, false, 4, index[3]));
    positions.push(new PuzzelBoardPosition(101, 81, false, 5, index[4]));
    positions.push(new PuzzelBoardPosition(202, 81, false, 6, index[5]));
    positions.push(new PuzzelBoardPosition(0, 162, false, 7, index[6]));
    positions.push(new PuzzelBoardPosition(101, 162, false, 8, index[7]));
    positions.push(new PuzzelBoardPosition(202, 162, false, 9, index[8]));
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

    let easyGameCanvas = document.getElementById('easy-puzzel');
    let canvasContext = easyGameCanvas.getContext('2d');

    function getMousePos(evt) {
        var rect = easyGameCanvas.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - rect.left),
            y: Math.round(evt.clientY - rect.top)
        };
    }

    let repaintPosition = function(x, y) {
        canvasContext.fillStyle = "black";
        canvasContext.fillRect(x, y, 100, 80);
    }


    let drawNumberImg = function(dx, dy, i) {
        let img = document.createElement("img");
        img.src = "images/numbers" + i + ".gif";
        img.addEventListener("load", function() {
            canvasContext.drawImage(img, dx, dy);
        });
    }


    puzzelEntryNumbers.forEach((element) => {
        drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
    })
    let checkPosition = function(i) {
        return (positions[i].positionNumber == i + 1 && positions[i].currentPlaceHolder == i + 1);

    }
    let checkGameResult = function() {
        let test = positions.reduce((preTest, position) => {
            console.log(preTest, position)
            return preTest && checkPosition(positions.indexOf(position))
        });
        return test;
    }

    easyGameCanvas.addEventListener('click', (event) => {
        let position = getMousePos(event);

        let makeMove = function(moveFrom, moveTo) {
                drawNumberImg(moveTo.x, moveTo.y, moveFrom.currentPlaceHolder);
                repaintPosition(moveFrom.x, moveFrom.y);
                moveFrom.availablity = true;
                moveTo.availablity = false;

                moveTo.currentPlaceHolder = moveFrom.currentPlaceHolder;
                moveFrom.currentPlaceHolder = 9;
            }
            //p0
        if (position.x > 0 && position.x < 100 && position.y > 0 && position.y < 80) {
            if (positions[1].availablity) {
                makeMove(positions[0], positions[1]);
            } else if (positions[3].availablity) {
                makeMove(positions[0], positions[3]);
            }
        }
        //p1
        if (position.x > 101 && position.x < 200 && position.y > 0 && position.y < 80) {
            if (positions[0].availablity) {
                makeMove(positions[1], positions[0]);
            } else if (positions[2].availablity) {
                makeMove(positions[1], positions[2]);
            } else if (positions[4].availablity) {
                makeMove(positions[1], positions[4]);
            }
        }
        //p2
        if (position.x > 201 && position.x < 300 && position.y > 0 && position.y < 80) {
            if (positions[1].availablity) {
                makeMove(positions[2], positions[1]);
            } else if (positions[5].availablity) {
                makeMove(positions[2], positions[5]);
            }
        }
        //p3
        if (position.x > 0 && position.x < 100 && position.y > 81 && position.y < 160) {
            if (positions[0].availablity) {
                makeMove(positions[3], positions[0]);
            } else if (positions[4].availablity) {
                makeMove(positions[3], positions[4]);
            } else if (positions[6].availablity) {
                makeMove(positions[3], positions[6]);
            }
        }
        //p4
        if (position.x > 101 && position.x < 200 && position.y > 81 && position.y < 160) {
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
        if (position.x > 201 && position.x < 300 && position.y > 81 && position.y < 160) {
            if (positions[2].availablity) {
                makeMove(positions[5], positions[2]);
            } else if (positions[4].availablity) {
                makeMove(positions[5], positions[4]);
            } else if (positions[8].availablity) {
                if (positions[8].currentPlaceHolder == 9) {
                    positions[8].currentPlaceHolder = 6;
                }
                makeMove(positions[5], positions[8]);
            }
        }
        //p6
        if (position.x > 0 && position.x < 100 && position.y > 161 && position.y < 240) {
            if (positions[3].availablity) {
                makeMove(positions[6], positions[3]);
            } else if (positions[7].availablity) {
                makeMove(positions[6], positions[7]);
            }
        }
        //p7
        if (position.x > 101 && position.x < 200 && position.y > 161 && position.y < 240) {
            if (positions[4].availablity) {
                makeMove(positions[7], positions[4]);
            } else if (positions[6].availablity) {
                makeMove(positions[7], positions[6]);
            } else if (positions[8].availablity) {
                if (positions[8].currentPlaceHolder == 9) {
                    positions[8].currentPlaceHolder = 8;
                }
                makeMove(positions[7], positions[8]);
            }
        }
        //p8
        if (position.x > 201 && position.x < 300 && position.y > 161 && position.y < 240) {
            if (positions[5].availablity) {
                makeMove(positions[8], positions[5]);
            } else if (positions[7].availablity) {
                makeMove(positions[8], positions[7]);
            }
        }
        if (checkGameResult())
            setTimeout(() => {
                document.getElementById('resultContainer').innerHTML = "<p id='result' class='animated flash'><span>Congratulation</span>, you won...HURRAH!!!</p>"

                // location.reload();
            }, 100);
    })

}
easyPuzzel();

//reset 
document.getElementById('reset').addEventListener('click', (event) => {
    easyPuzzel();
});

//make it harder
// let harderPuzzel = function() {
//     //construct objects to hold position, x and y coordinate
//     let PuzzelEntry = function(position, puzzelNumber, status, currentLocation) {
//         this.position = position;
//         this.puzzelNumber = puzzelNumber;
//         //to keep trac of its position
//         this.status = status;
//         this.currentLocation = currentLocation;
//     }

//     let PuzzelBoardPosition = function(x, y, availablity, posNumber, currentPlaceHolder) {
//         this.x = x;
//         this.y = y;
//         this.availablity = availablity;
//         this.positionNumber = posNumber;
//         this.currentPlaceHolder = currentPlaceHolder;
//     }

//     generateRandomNumber = function() {
//         return (Math.floor(Math.random() * 16) + 1);
//     }
//     index = [];
//     mixThePuzzel = function() {
//         if (index.length < 16) {
//             let value = generateRandomNumber();
//             if (index.length == 0) {
//                 index.push(value);
//             } else {
//                 if (!(index.includes(value)))
//                     index.push(value);
//             }
//             mixThePuzzel();
//         }
//     }
//     mixThePuzzel();

//     let positions = [];
//     positions.push(new PuzzelBoardPosition(0, 0, false, 1, index[0]));
//     positions.push(new PuzzelBoardPosition(101, 0, false, 2, index[1]));
//     positions.push(new PuzzelBoardPosition(202, 0, false, 3, index[2]));
//     positions.push(new PuzzelBoardPosition(303, 0, false, 4, index[3]));
//     positions.push(new PuzzelBoardPosition(0, 81, false, 5, index[4]));
//     positions.push(new PuzzelBoardPosition(101, 81, false, 6, index[5]));
//     positions.push(new PuzzelBoardPosition(202, 81, false, 7, index[6]));
//     positions.push(new PuzzelBoardPosition(303, 81, false, 8, index[7]));
//     positions.push(new PuzzelBoardPosition(0, 162, false, 9, index[8]));
//     positions.push(new PuzzelBoardPosition(101, 162, false, 10, index[9]));
//     positions.push(new PuzzelBoardPosition(202, 162, false, 11, index[10]));
//     positions.push(new PuzzelBoardPosition(303, 162, false, 12, index[11]));
//     positions.push(new PuzzelBoardPosition(0, 243, false, 13, index[12]));
//     positions.push(new PuzzelBoardPosition(101, 243, false, 14, index[13]));
//     positions.push(new PuzzelBoardPosition(202, 243, false, 15, index[14]));
//     positions.push(new PuzzelBoardPosition(303, 243, false, 16, index[15]));
//     positions.forEach((element) => {
//         if (element.currentPlaceHolder == 16)
//             element.availablity = true;
//     })

//     let puzzelEntryNumbers = [];
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[0], index[0], true, 1));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[1], index[1], true, 2));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[2], index[2], true, 3));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[3], index[3], true, 4));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[4], index[4], true, 5));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[5], index[5], true, 6));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[6], index[6], true, 7));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[7], index[7], true, 8));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[8], index[8], true, 9));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[9], index[9], true, 10));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[10], index[10], true, 11));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[11], index[11], true, 12));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[12], index[12], true, 13));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[13], index[13], true, 14));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[14], index[14], true, 15));
//     puzzelEntryNumbers.push(new PuzzelEntry(positions[15], index[15], true, 16));
//     let harderGameCanvas = document.getElementById('harder-puzzel');
//     let canvasContext = harderGameCanvas.getContext('2d');

//     function getMousePos(evt) {
//         var rect = harderGameCanvas.getBoundingClientRect();
//         return {
//             x: Math.round(evt.clientX - rect.left),
//             y: Math.round(evt.clientY - rect.top)
//         };
//     }

//     let repaintPosition = function(x, y) {
//         canvasContext.fillStyle = "black";
//         canvasContext.fillRect(x, y, 100, 80);
//     }


//     let drawNumberImg = function(dx, dy, i) {
//         let img = document.createElement("img");
//         img.src = "images/puzzel15/numbers" + i + ".gif";
//         img.addEventListener("load", function() {
//             canvasContext.drawImage(img, dx, dy);
//         });
//     }


//     puzzelEntryNumbers.forEach((element) => {
//         drawNumberImg(element.position.x, element.position.y, element.puzzelNumber);
//     })
//     let checkPosition = function(i) {
//         return (positions[i].positionNumber == i + 1 && positions[i].currentPlaceHolder == i + 1);

//     }
//     let checkGameResult = function() {
//         let test = positions.reduce((preTest, position) => {
//             return preTest && checkPosition(positions.indexOf(position))
//         });
//         return test;
//     }



//     harderGameCanvas.addEventListener('click', (event) => {
//         let position = getMousePos(event);
//         let makeMove = function(moveFrom, moveTo) {
//                 drawNumberImg(moveTo.x, moveTo.y, moveFrom.currentPlaceHolder);
//                 repaintPosition(moveFrom.x, moveFrom.y);
//                 moveFrom.availablity = true;
//                 moveTo.availablity = false;

//                 moveTo.currentPlaceHolder = moveFrom.currentPlaceHolder;
//                 moveFrom.currentPlaceHolder = 16;
//             }
//             //p0..1,4
//         if (position.x > 0 && position.x < 100 && position.y > 0 && position.y < 80) {
//             if (positions[1].availablity) {
//                 makeMove(positions[0], positions[1]);
//             } else if (positions[4].availablity) {
//                 makeMove(positions[0], positions[4]);
//             }
//         }
//         //p1...0,2,5
//         if (position.x > 101 && position.x < 200 && position.y > 0 && position.y < 80) {
//             if (positions[0].availablity) {
//                 //makeMove(moveFrom,moveTo)
//                 makeMove(positions[1], positions[0]);
//             } else if (positions[2].availablity) {
//                 makeMove(positions[1], positions[2]);
//             } else if (positions[5].availablity) {
//                 makeMove(positions[1], positions[5]);
//             }
//         }
//         //p2...1,3,6
//         if (position.x > 201 && position.x < 300 && position.y > 0 && position.y < 80) {
//             if (positions[1].availablity) {
//                 makeMove(positions[2], positions[1]);
//             } else if (positions[3].availablity) {
//                 makeMove(positions[2], positions[3]);
//             } else if (positions[6].availablity) {
//                 makeMove(positions[2], positions[6]);
//             }
//         }
//         //p3...2,7
//         if (position.x > 301 && position.x < 404 && position.y > 0 && position.y < 80) {
//             if (positions[2].availablity) {
//                 makeMove(positions[3], positions[2]);
//             } else if (positions[7].availablity) {
//                 makeMove(positions[3], positions[7]);
//             }
//         }
//         //p4....0,5,8
//         if (position.x > 0 && position.x < 100 && position.y > 81 && position.y < 160) {
//             if (positions[0].availablity) {
//                 makeMove(positions[4], positions[0]);
//             } else if (positions[5].availablity) {
//                 makeMove(positions[4], positions[5]);
//             } else if (positions[8].availablity) {
//                 makeMove(positions[4], positions[8]);
//             }
//         }
//         //p5...1,4,6,9
//         if (position.x > 101 && position.x < 200 && position.y > 81 && position.y < 160) {
//             if (positions[1].availablity) {
//                 makeMove(positions[5], positions[1]);
//             } else if (positions[4].availablity) {
//                 makeMove(positions[5], positions[4]);
//             } else if (positions[6].availablity) {
//                 makeMove(positions[5], positions[6]);
//             } else if (positions[9].availablity) {
//                 makeMove(positions[5], positions[9]);
//             }
//         }
//         //p6...2,5,7,10
//         if (position.x > 201 && position.x < 300 && position.y > 81 && position.y < 160) {
//             if (positions[2].availablity) {
//                 makeMove(positions[6], positions[2]);
//             } else if (positions[5].availablity) {
//                 makeMove(positions[6], positions[5]);
//             } else if (positions[7].availablity) {
//                 makeMove(positions[6], positions[7]);
//             } else if (positions[10].availablity) {
//                 makeMove(positions[6], positions[10]);
//             }
//         }

//         //p7..3,6,11
//         if (position.x > 301 && position.x < 404 && position.y > 81 && position.y < 160) {
//             if (positions[3].availablity) {
//                 makeMove(positions[7], positions[3]);
//             } else if (positions[6].availablity) {
//                 makeMove(positions[7], positions[6]);
//             } else if (positions[11].availablity) {
//                 makeMove(positions[7], positions[11]);
//             }
//         }


//         //p8...4,9,12
//         if (position.x > 0 && position.x < 100 && position.y > 161 && position.y < 240) {
//             if (positions[4].availablity) {
//                 makeMove(positions[8], positions[4]);
//             } else if (positions[9].availablity) {
//                 makeMove(positions[8], positions[9]);
//             } else if (positions[12].availablity) {
//                 makeMove(positions[8], positions[12]);
//             }
//         }

//         //p9...5,8,10,13
//         if (position.x > 101 && position.x < 200 && position.y > 161 && position.y < 240) {
//             if (positions[5].availablity) {
//                 makeMove(positions[9], positions[5]);
//             } else if (positions[8].availablity) {
//                 makeMove(positions[9], positions[8]);
//             } else if (positions[10].availablity) {
//                 makeMove(positions[9], positions[10]);
//             } else if (positions[13].availablity) {
//                 makeMove(positions[9], positions[13]);
//             }
//         }
//         //p10...6,9,11,14
//         if (position.x > 201 && position.x < 300 && position.y > 161 && position.y < 240) {
//             if (positions[6].availablity) {
//                 makeMove(positions[10], positions[6]);
//             } else if (positions[9].availablity) {
//                 makeMove(positions[10], positions[9]);
//             } else if (positions[11].availablity) {
//                 makeMove(positions[10], positions[11]);
//             } else if (positions[14].availablity) {
//                 makeMove(positions[10], positions[14]);
//             }
//         }

//         //p11..7,10,15
//         if (position.x > 301 && position.x < 404 && position.y > 161 && position.y < 240) {
//             if (positions[7].availablity) {
//                 makeMove(positions[11], positions[7]);
//             } else if (positions[10].availablity) {
//                 makeMove(positions[11], positions[10]);
//             } else if (positions[15].availablity) {
//                 if (positions[15].currentPlaceHolder == 16) {
//                     positions[15].currentPlaceHolder = 12;
//                 }
//                 makeMove(positions[11], positions[15]);
//             }
//         }


//         //p12...8,13
//         if (position.x > 0 && position.x < 100 && position.y > 241 && position.y < 322) {
//             if (positions[8].availablity) {
//                 makeMove(positions[12], positions[8]);
//             } else if (positions[13].availablity) {
//                 makeMove(positions[12], positions[13]);
//             }
//         }
//         //p13...9,12,14
//         if (position.x > 101 && position.x < 200 && position.y > 241 && position.y < 322) {
//             if (positions[9].availablity) {
//                 makeMove(positions[13], positions[9]);
//             } else if (positions[12].availablity) {
//                 makeMove(positions[13], positions[12]);
//             } else if (positions[14].availablity) {
//                 makeMove(positions[13], positions[14]);
//             }
//         }
//         //p14...10,13,15
//         if (position.x > 201 && position.x < 300 && position.y > 241 && position.y < 322) {
//             if (positions[10].availablity) {
//                 makeMove(positions[14], positions[10]);
//             } else if (positions[13].availablity) {
//                 makeMove(positions[14], positions[13]);
//             } else if (positions[15].availablity) {
//                 if (positions[15].currentPlaceHolder == 16) {
//                     positions[15].currentPlaceHolder = 15;
//                 }
//                 makeMove(positions[14], positions[15]);
//             }
//         }
//         //p15...11,14
//         if (position.x > 301 && position.x < 404 && position.y > 241 && position.y < 322) {
//             if (positions[11].availablity) {
//                 makeMove(positions[15], positions[11]);
//             } else if (positions[14].availablity) {
//                 makeMove(positions[15], positions[14]);
//             }
//         }
//         if (checkGameResult())
//             setTimeout(() => {
//                 document.getElementById('resultContainer').innerHTML = "<p id='result' class='animated flash'><span>Congratulation</span>, you won...HURRAH!!!</p>";
//                 // location.reload();
//             }, 100);
//     })
// }

// document.getElementById('make-it-harder').addEventListener('click', (event) => {
//     let x = document.querySelector('#harder-puzzel-container');
//     let y = document.querySelector('#easy-puzzel-container');
//     document.querySelector('#make-it-harder').innerHTML = "Make it easier";
//     x.style.display = 'block';
//     y.style.display = 'none';
//     harderPuzzel();
// });