var myVar;
var previousText = "";
var hardcoreMode = false;
var div;
var currentArea;
var previousArea;
var allTextArea;
var inputField;
var words = 0;
var mistakes = 0;

window.addEventListener('load', function() {
    div = document.getElementById('current-text');
    currentArea = document.getElementById("current-text");
    previousArea = document.getElementById("previous-text");
    input = document.getElementById('input-field');
    allTextArea = document.getElementById("all-text");
    inputField = document.getElementById("input-field");
    input.onkeydown = function() {
        var key = event.keyCode || event.charCode;
        if (key == 8) {
            clearCurrent();
        }
    };
});



var dictionary = 'https://rawcdn.githack.com/maheshmurag/bjspell/master/dictionary.js/en_US.js';
var lang = BJSpell(dictionary, function() {});

function calculateScore() {
    var text = div.innerText;
    text = text.replace(/[.,\/#!?"@+$%\^&\*;:{}=\-_`~()]/g, "");
    var wordList = text.split(" ");
    if (wordList[wordList.length - 1] == "") {
        wordList.length--;
    }
    console.log(wordList);
    var word = wordList[wordList.length - 1];
    console.log(word);

    words++;
    if (!lang.check(word)) { mistakes++; }

    document.getElementById("wordCount").innerHTML = words;
    document.getElementById("score").innerHTML = wordList.length - (mistakes * 4);
}


function updateText(event) {
    // updates the text that is visible in the divs below the input field

    currentArea.innerHTML = inputField.value;

    // scroll down
    allTextArea.scrollTop = allTextArea.scrollHeight;;

    // calculate score
    if (event.keyCode == 32) {
        calculateScore();
    }

    // stop previous timer and start a new one
    clearTimeout(myVar);
    myVar = setTimeout(function() { clearCurrent(); }, 1000); // game over if there is no new input in X milliseconds

}

function clearCurrent() {
    // sets the score to zero and moves the text you've written into the backlog
    calculateScore();
    alert("Your score was: " + document.getElementById("score").innerHTML);

    previousText += inputField.value;
    previousText += "\r____\r\r";
    previousArea.innerHTML = previousText;

    // remove text from current field
    inputField.value = "";
    currentArea.innerHTML = "";

    // remove score count
    words = 0;
    mistakes = 0;
    document.getElementById("wordCount").innerHTML = 0;
    document.getElementById("score").innerHTML = 0;
}

function clearText() {
    // this method removes all of the text that was written before.
    previousText = "";
    inputField.value = "";
    currentArea.innerHTML = "";
    previousArea.innerHTML = "";
}

function toggleHardcoreMode() {
    hardcoreMode = !hardcoreMode;
    console.log(hardcoreMode);
}