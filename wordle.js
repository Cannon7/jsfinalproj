fetch('./words.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
let guessform = document.getElementById("formguess");
var testword = "ohno";
var guesscount = 1;
function guessget()
{
    testword = document.getElementById("Guess").value;
    const wordletters = testword.split("");
    if (guesscount != 5)
    {
        var displayguess = document.getElementById("guess" + guesscount)
        wordletters.forEach(element => {
            const letter = document.createElement("li");
            const textnode = document.createTextNode(element);
            letter.appendChild(textnode);
            displayguess.appendChild(letter);
        });
        guesscount += 1;
    }
    else
    {
        document.getElementById("gridtitle").value = "game over";
    }
}   
