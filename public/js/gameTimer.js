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
