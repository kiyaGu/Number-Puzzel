
//reset puzzel
let resetGame = function() {
  const easierPuzzel = require('./easierPuzzel');
  const harderPuzzel = require('./harderPuzzel');
  let switchGame = document.querySelector('#make-it-harder').innerHTML;
   if (switchGame.trim() == "Make It Harder") {
     harderPuzzel();
    } else {
      easierPuzzel();
    }
    $('#game-timer').countdown('destroy');
    setTimeout(()=>{
    document.querySelector('#game-timer span').innerHTML = "";
  },5000);
}
module.exports = resetGame;
