var myVar;
var previousText = "";
var hardcoreMode = false;
var div;
var currentArea;
var previousArea;
var allTextArea;
var inputField;


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


function spellCheck() {
    console.log("checking spelling...");

    calculateScore();
}

function calculateScore(final = false) {
    var text = div.innerText;
    text = text.replace(/[.,\/#!?"@+$%\^&\*;:{}=\-_`~()]/g, "");
    var wordList = text.split(/\s/);

    if (!final) {
        wordList = wordList.slice(0, wordList.length - 1)
    }

    var mistakes = 0;
    wordList.map(function(word) {
        var correct = lang.check(word);
        console.log(word + correct);
        if (!correct) { mistakes++; }
        console.log("Words " + wordList.length + "Mistakes: " + mistakes);
    })
    document.getElementById("wordCount").innerHTML = wordList.length;
    document.getElementById("score").innerHTML = wordList.length - (mistakes * 3);
}


function updateText() {
    // updates the text that is visible in the divs below the input field


    currentArea.innerHTML = inputField.value;

    // scroll down
    allTextArea.scrollTop = allTextArea.scrollHeight;;

    // spell check
    spellCheck();

    // stop previous timer and start a new one
    clearTimeout(myVar);
    myVar = setTimeout(function() { clearCurrent(); }, 1000); // game over if there is no new input in X milliseconds

}

function clearCurrent() {
    // sets the score to zero and moves the text you've written into the backlog

    alert("Your score was: " + calculateScore(final = true));

    previousText += inputField.value;
    previousText += "\r____\r\r";
    previousArea.innerHTML = previousText;

    // remove text from current field
    inputField.value = "";
    currentArea.innerHTML = "";
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