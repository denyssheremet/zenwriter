var myVar;
var previousText = "";

function updateText() {
    // updates the text that is visible in the divs below the input field

    document.getElementById("current-text").innerHTML = document.getElementById("input-field").value;

    // stop previous timer and start a new one
    clearTimeout(myVar);
    myVar = setTimeout(function () { clearCurrent(); }, 1000);  // game over if there is no new input in X milliseconds

}

function clearCurrent() {
    // sets the score to zero and moves the text you've written into the backlog

    alert("Time's up bitches!");

    // put text from current into previous
    previousText += document.getElementById("input-field").value;
    document.getElementById("previous-text").innerHTML = previousText;

    // remove text from current field
    document.getElementById("input-field").value = "";
    document.getElementById("current-text").innerHTML = "";
}

function clearText() {
    // this method removes all of the text that was written before.
    previousText = "";
    document.getElementById("input-field").value = "";
    document.getElementById("current-text").innerHTML = "";
    document.getElementById("previous-text").innerHTML = "";
}
