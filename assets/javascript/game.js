$(document).ready(function() {

    
    var targetNumber = Math.floor(Math.random()*120)+19;
    $("#number-to-guess").text(targetNumber);

    var counter = 0;
    var wins = 0;
    var losses = 0;


  $("#ruby").on("click", function() {
    counter += Math.floor(Math.random()*10)+1;
    
    if (counter === targetNumber) {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    }
    
    else if (counter > targetNumber) {
    alert("You Lose!");
    losses++;
    $("#losses").text(losses);
    }
    
        $("#current-score").text(counter);
  });


  $("#emerald").on("click", function() {
    counter += Math.floor(Math.random()*10)+1;
    
    if (counter === targetNumber) {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    }
    
    else if (counter > targetNumber) {
    alert("You Lose!");
    losses++;
    $("#losses").text(losses);
    }
    
        $("#current-score").text(counter);
  });


  $("#sapphire").on("click", function() {
    counter += Math.floor(Math.random()*10)+1;
    
    if (counter === targetNumber) {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    }
   
    else if (counter > targetNumber) {
    alert("You Lose!");
    losses++;
    $("#losses").text(losses);
    }
    
        $("#current-score").text(counter);
  });


  $("#diamond").on("click", function() {
    counter += Math.floor(Math.random()*10)+1;
    
    if (counter === targetNumber) {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    }
    
    else if (counter > targetNumber) {
    alert("You Lose!");
    losses++;
    $("#losses").text(losses);
    }
    
        $("#current-score").text(counter);
  });
});