let wordDiv = document.getElementById('word')
let hangmanParts = document.querySelectorAll('.hangman-part');
let wrong = document.getElementById('wrong-letters');
let button = document.getElementById('let-play');
let winningScreen = document.getElementById('winning-screen')
let losingScreen = document.getElementById('losing-screen')
let hintDiv = document.getElementById('hint');

let words = ['godfather', 'goodfellas', 'seven', 'jumanji', 'ratatouille']
let theWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
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

    const innerWord = wordDiv.innerText.replace(/\n/g, '');

    if (innerWord === theWord) {
        winningScreen.style.display = 'block'
    }

    // if(theCato[0]){
    //     hintDiv.innerHTML = `<h4>Hint: Movie </h4> `
    // } else if (theCato[1]){
    //     hintDiv.innerHTML = `<h4>Hint: No </h4>`
    // } else if (theCato[2]){
    //     hintDiv.innerHTML = `<h4>Hint: PLEASE </h4>`
    // }
}

window.addEventListener('keydown', selecting);

function selecting(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letters = e.key

        if (theWord.includes(letters)) {
            if (!correctLetters.includes(letters)) {
                correctLetters.push(letters);
                guessing();
            }
        } else {
            if (!wrongLetters.includes(letters)) {
                wrongLetters.push(letters)
                wrongLettersFunc();
            }
        }
    }
    console.log(e.keyCode)
}

function wrongLettersFunc() {
    wrong.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)} 
    `;

    hangmanParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    if(wrongLetters.length === hangmanParts.length){
        losingScreen.style.display = 'block'
    }
}

button.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);
  
    theWord = words[Math.floor(Math.random() * words.length)];
  
    guessing();
  
    wrongLettersFunc();
  
    if (winningScreen.style.display === 'block'){
        winningScreen.style.display = 'none';
    } else if(losingScreen.style.display === 'block'){
        losingScreen.style.display = 'none'
    } else {
        console.log('Houston we have a problem')
    }
  });

guessing();


