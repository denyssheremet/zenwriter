var myVar;
var previousText = "";
var hardcoreMode = false;
var div;
var words = 0;
var mistakes = 0;

window.addEventListener('load', function() {
    div = document.getElementById('current-text');
});

var dictionary = 'https://rawcdn.githack.com/maheshmurag/bjspell/master/dictionary.js/en_US.js';
var lang = BJSpell(dictionary, function() {});

// check.addEventListener('click', function() {
function spellCheck() {
    console.log("checking spelling...");
    var innerText = div.innerText;
    var text = innerText.split(/\s/);

    words = 0;
    mistakes = 0;
    text.map(function(word) {
        var correct = lang.check(word);
        console.log(word + correct);
        words++;
        if (!correct) { mistakes++; }
        console.log("Words " + words + "Mistakes: " + mistakes);
    })
}


function updateText() {
    // updates the text that is visible in the divs below the input field

    var currentArea = document.getElementById("current-text");
    var previousArea = document.getElementById("previous-text");
    var allTextArea = document.getElementById("all-text");

    currentArea.innerHTML = document.getElementById("input-field").value;

    // scroll down
    allTextArea.scrollTop = allTextArea.scrollHeight;;

    // spell check
    spellCheck();

    // stop previous timer and start a new one
    clearTimeout(myVar);
    myVar = setTimeout(function() { clearCurrent(currentArea, previousArea); }, 1000); // game over if there is no new input in X milliseconds

}

function clearCurrent(currentArea, previousArea) {
    // sets the score to zero and moves the text you've written into the backlog

    alert("Time's up bitches!");

    // put text from current into previous
    var inputField = document.getElementById("input-field");

    previousText += inputField.value;
    previousText += "\r____\r\r";
    previousArea.innerHTML = previousText;

    // remove text from current field
    document.getElementById("input-field").value = "";
    currentArea.innerHTML = "";

    // reset score
    words = 0;
    mistakes = 0;
}

function clearText() {
    // this method removes all of the text that was written before.
    previousText = "";
    document.getElementById("input-field").value = "";
    document.getElementById("current-text").innerHTML = "";
    document.getElementById("previous-text").innerHTML = "";
}

function toggleHardcoreMode() {
    hardcoreMode = !hardcoreMode;
    console.log(hardcoreMode);
}