///////////////////////////////////////////////////////////////////////
// "Normal" functions
function squish(word) {
    if (word.length < 2) {
        return word;
    }
    return word[0] + word[word.length-1];
}

console.log("Squished Hello is " + squish("Hello"));

///////////////////////////////////////////////////////////////////////
// Functions as variables
function takeOutTheMiddle(word) {
    if (word.length < 3) {
        return word;
    } else {
        return word.slice(1, word.length - 1 );
    }
}

let gut = takeOutTheMiddle;
console.log("Gutted Hello is " + gut("Hello"));

///////////////////////////////////////////////////////////////////////
// Assigning variables to anonymous functions
let penultimate = function(word) {
    if (word.length < 2) {
        return word;
    } else {
        return word[word.length - 2];
    }
}
console.log("Penultimate Hello is " + penultimate("Hello"));

///////////////////////////////////////////////////////////////////////
//Functions as parameters
function compareLast(word1, word2) {
    a = word1[word1.length - 1];
    b = word2[word2.length - 1]; 
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

someWords = [
    'apricot',
    'mango',
    'banana',
    'grapefruit',
    'kiwi',
    'cherry'
]

someWords.sort();
console.log("Sorted 'normally': " + someWords);

someWords.sort(compareLast);
console.log("Sorted by last letter: " + someWords);

///////////////////////////////////////////////////////////////////////
//Anonymous functions as parameters
someWords.sort(function(a, b) { return a.length - b.length});
console.log("Sorted by word length: " + someWords);

///////////////////////////////////////////////////////////////////////
//Arrow functions - a concise way to define anonymous functions
someWords.sort((a, b) => {
    return (
        a.split('').sort().reverse()[0].charCodeAt(0) - 
        b.split('').sort().reverse()[0].charCodeAt(0));
});
console.log("Sorted by 'biggest' letter: " + someWords);


