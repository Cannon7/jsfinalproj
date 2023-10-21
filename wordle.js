fetch('./words.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
let guessform = document.getElementById("formguess");
const testword = "";
void function guessget()
{
    testword = document.getElementById("Guess");
    console.log(testword);
}

const wordletters = testword.split("");
console.log(wordletters[4]);
