let canvas = document.getElementById('game-canvas');
let canvasContext = canvas.getContext('2d');

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    };
}


let dx = 0,
    dy = 0;
for (let j = 1; j < 9; j++) {
    let img = document.createElement("img");
    img.src = "images/number-" + j + ".gif";
    img.addEventListener("load", function() {
        canvasContext.drawImage(img, dx, dy);

        if (dx < 250) {
            dx += 125;
        } else {
            dx = 0;
            if (j == 3) {
                dy = 101;
            } else if (j == 6) {
                dy = 202;
            }
        }

    });
}

let colorRect = function(x, y) {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(x, y, 124, 100);
}


let drawNumberImg = function(x, y, i) {
    let img = document.createElement("img");
    img.src = "images/number-" + i + ".gif";
    canvasContext.drawImage(img, dx, dy);
}
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