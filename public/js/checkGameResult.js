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
