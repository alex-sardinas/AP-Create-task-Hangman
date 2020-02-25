let wordDiv = document.getElementById('word')
let hangmanParts = document.querySelectorAll('.hangman-part');
let wrong = document.getElementById('wrong-letters');
let button = document.getElementById('let-play');
let winningScreen = document.getElementById('winning-screen')
let losingScreen = document.getElementById('losing-screen')

let words = ['godfather', 'goodfellas', 'seven', 'jumanji', 'ratatouille'];
let theWord = words[Math.floor(Math.random() * words.length)];

let haha = 'boi';

let correctLetters = ['g'];
let wrongLetters = [];

function guessing() {
    wordDiv.innerHTML =
    `
    ${theWord
        .split('')
        .map(
            letter => `
                <span class="l">
                    ${correctLetters.includes(letter) ? letter : ''} 
                </span>
            `
        )
        .join('')}
    `
    
}


function wrongLettersFun() {

}

guessing();
console.log(wordDiv)
console.log(theWord)
