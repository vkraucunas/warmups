var random = Math.floor((Math.random()*100)+1);
console.log(random);


var buttonClick = document.getElementById('submitButton');

function game (num, guess) {
  if (guess < num) {
    alert("Your guess is too low! Try again");
  } else if (guess > num) {
    alert("Your guess is too high! Try again");
  } else {
    alert("You're correct!!");
  }
}


buttonClick.addEventListener('click', function() {
  var userGuess = document.getElementById('userInput').value;
  console.log("userGuess is", userGuess);
  game(random, userGuess);
});
