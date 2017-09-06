
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
