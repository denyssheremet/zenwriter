var myVar;
var previousText = "";

function printText() {
    document.getElementById("current-text").innerHTML = document.getElementById("input-field").value;

    clearTimeout(myVar);
    myVar = setTimeout(function () { clearCurrent(); }, 1000);

}

function clearCurrent() {
    // This method gets called when you've not written a letter in too long.
    // It sets the score to zero and moves the text you've written into the backlog.
    alert("Time's up bitches!");

    // Put text from current into previous
    previousText += document.getElementById("input-field").value;
    document.getElementById("previous-text").innerHTML = previousText;

    // Remove text from current field
    document.getElementById("input-field").value = "";
    document.getElementById("current-text").innerHTML = "";
}
