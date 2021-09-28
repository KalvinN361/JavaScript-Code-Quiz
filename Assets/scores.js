function printHighscores() {
    // pulls highscroes from local storage which we imprinted in the main js. 
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // This will have the scores go from highest to lowest
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
    

    // This function will create a list for each of the high scores which will be ordered above
    highScores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // this sends the li tags to be appended on page. 
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
//   this function will clear the scores fromt he highscores list
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // this function will runt he first function
  printHighscores();