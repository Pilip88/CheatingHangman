function wordsOfTheGivenLength(array, length) {
    var words = [];
    for (var i = 0; i < array.length; i++)
        if (array[i].length === length) words.push(array[i]);
    return words;
};
function characterInString(string, character) {
    var characterInString = false;
    for (var i = 0; i < string.length; i++)
        if (string[i] === character) characterInString = true;
    return characterInString;
};
function countWordsWithoutCharacter(array, character) {
    var count = 0;
    for (var i = 0; i < array.length; i++)
        if (characterInString(array[i], character) === false) count++;
    return count;
};
function containRegEx(object, regEx) {
    for (pattern in object) {
        if (pattern === regEx) return true;
    };
    return false;
};
function createRegEx(string, character) {
    var reg = "";
    for (var i = 0; i < string.length; i++)
        string[i] === character ?
            reg += character : reg += "[^" + character + "]";
    return reg;
};
function countRegEx(array, character) {
    var regCount = {};
    for (var i = 0; i < array.length; i++) {
        var reg = createRegEx(array[i], character);
        if (!(containRegEx(regCount, reg))) regCount[reg] = 1;
        else regCount[reg] += 1;
    }
    return regCount;
};
function mostOftenRegEx(object) {
    var count = - Infinity;
    var mostOften = undefined;
    for (pattern in object) {
        if (object[pattern] > count) {
            mostOften = pattern;
            count = object[pattern];
        };
    };
    return [mostOften, count];
};
function filterByRegEx(array, regEx) {
    var filtered = [];
    var reg = new RegExp(regEx)
    for (var i = 0; i < array.length; i++) {
        if (reg.test(array[i]) === true) filtered.push(array[i])
    };
    return filtered;
}
function wordsWithoutCharacter(array, character) {
    var without = [];
    for (var i = 0; i < array.length; i++)
        if (characterInString(array[i], character) === false) without.push(array[i]);
    return without;
};
function inArray(array, character) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === character) return true;
    };
    return false;
};
function hiddenCharacters(word) {
    var hidden = "";
    for (var i = 0; i < word.length; i++) {
        if (inArray(rightGuess, word[i])) hidden += word[i] + " ";
        else if (word[i] === " ") hidden += "  ";
        else hidden += "_ "
    };
    return hidden;
};
function stripSpace(word) {
    var solution = ""
    for (var i = 0; i < word.length; i++) {
        if (word[i] != " ") solution += word[i];
    }
    return solution;
}
