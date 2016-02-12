var inputField = document.getElementById("inputField");
var word = document.getElementById("word");
var submit = document.getElementById("submit");
var help = document.getElementById("help");
var triesLeftOutput = document.getElementById("triesLeft");

inputField.focus();

var solved = false;
var triesLeft = 10;
var wrongGuess = [];
var rightGuess = [];
var lengthOfWord = Math.floor(Math.random() * 9) + 4;
triesLeftOutput.innerHTML = triesLeft + " tries left."
wordList = wordsOfTheGivenLength(wordList, lengthOfWord);

var firstHidden = "";
for (var i = 0; i < lengthOfWord; i++) {
    firstHidden += "_ "
}
word.innerHTML = firstHidden;
submit.addEventListener("click", function() {
    var character = inputField.value.toLowerCase();
    if (character.length === 0) {
        help.innerHTML = "You didn't enter anything!"
    } else if (character.length === 1) {
        if (inArray(wrongGuess, character) || inArray(rightGuess, character)) {
            help.innerHTML = "You already tried that";
        } else {
            var numberOfWordsWithouthCharacter = countWordsWithoutCharacter(wordList, character);
            var mostOften = mostOftenRegEx(countRegEx(wordList, character));
            if (numberOfWordsWithouthCharacter >= mostOften[1]) {
                wordList = wordsWithoutCharacter(wordList, character);
                if (!(inArray(wrongGuess, character))) wrongGuess.push(character);
                triesLeft--;
                help.innerHTML = "Word doesn't contain " + character + ".";
            } else if (numberOfWordsWithouthCharacter < mostOften[1]) {
                wordList = filterByRegEx(wordList, mostOften[0]);
                rightGuess.push(character);
                help.innerHTML = "Word contains " + character + ".";
            }
        }
    } else if (character.length > 1) {
        /*
        for (var i = 0; i < wordList.length; i++) {
            if (wordList[i] === character) solved = true;
        }
        if (solved === false) {
            triesLeft--;
            help.innerHTML = "Wrong"
        }
        */
        if (wordList.length === 1) {
            if (wordList[0] === character) solved = true;
        } else if (wordList.length > 1) {
            var index = wordList.indexOf(character);
            if (index != -1) {
                wordList.splice(index, 1);
                triesLeft--;
                help.innerHTML = "Wrong";
            } else if (index === -1) {
                triesLeft--;
                help.innerHTML = "Wrong";
            }
        }
    }

    word.innerHTML = hiddenCharacters(wordList[0]);
    if (stripSpace(hiddenCharacters(wordList[0])) === wordList[0]) solved = true;

    if (solved === true || triesLeft === 0) {
        submit.hidden = true;
        inputField.hidden = true;
        if (solved === true) {
            help.innerHTML = "SOLVED";
            if (character.length > 1) word.innerHTML = character;
        } else if (triesLeft === 0) {
            word.innerHTML = wordList[0].split("").join(" ");
            help.innerHTML = "FAILED";
        }
    };
    document.getElementById("wrong").innerHTML = "Wrong guesses: " + wrongGuess.join(",");
    inputField.value = "";
    inputField.focus();
    if (triesLeft === 0) triesLeftOutput.innerHTML = "";
    else if (triesLeft === 1) triesLeftOutput.innerHTML = "1 try left."
    else triesLeftOutput.innerHTML = triesLeft + " tries left."
})