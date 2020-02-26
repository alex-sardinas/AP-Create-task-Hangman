//Variables
let wordDiv = document.getElementById('word')
let hangmanParts = document.querySelectorAll('.hangman-part');
let wrong = document.getElementById('wrong-letters');
let winningScreen = document.getElementById('winning-screen')
let losingScreen = document.getElementById('losing-screen')
let button = document.getElementById('let-play');
let button2  = document.getElementById('let-play-again');
let lives = 6
let livesHTML = document.getElementById('mylives');
let hintDiv = document.getElementById('hint')
let movies = [
    ['psycho', 'vertigo', 'rope'], 
    ['aliens', 'avatar', 'titanic'], 
    ['inception', 'tenet', 'interstellar', 'dunkirk', 'memento'], 
    ['goodfellas', 'casino', 'hugo']
]
let director = movies[Math.floor(Math.random() * movies.length)]
let theMovie = director[Math.floor(Math.random() * director.length)]
let correctLetters = [];
let wrongLetters = [];

// Core Functions
function playing() {
    wordDiv.innerHTML =
        `
    ${theMovie
            .split('')
            .map(
                letter => `
                <span class="x">
                    ${correctLetters.includes(letter) ? letter : ''} 
                </span>
            `
            )
            .join('')}
    `
    const innerWord = wordDiv.innerText.replace(/\n/g, '');
    if (innerWord === theMovie) {
        winningScreen.style.display = 'block'
    }

    livesHTML.innerHTML =  `
    <h4>Lives: ${lives}</h4>
    `
}

window.addEventListener('keydown', selecting);
function selecting(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        let letters = e.key

        if (theMovie.includes(letters)) {
            if (!correctLetters.includes(letters)) {
                correctLetters.push(letters);
                playing();
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

function leHint() {
    if(director === movies[0]){
        hintDiv.innerHTML = `<h4>Hint: Alferd Hitchcock </h4> `
    } else if (director === movies[1]){
        hintDiv.innerHTML = `<h4>Hint: James Cameron </h4>`
    } else if (director === movies[2]){
        hintDiv.innerHTML = `<h4>Hint: Christopher Nolan </h4>`
    } else if (director === movies[3]){
        hintDiv.innerHTML = `<h4>Hint: Martin Scorsese  </h4>`
    } 
}

function wrongLettersFunc() {
    wrong.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)} 
    `;

    livesHTML.innerHTML = `
    <h4>Lives: ${lives--}</h4>
    `

    hangmanParts.forEach((part, index) => {
        const incorrect = wrongLetters.length;

        if (index < incorrect) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    if(wrongLetters.length === hangmanParts.length){
        losingScreen.style.display = 'block'
    }
}

//Restarting Functions
button.addEventListener('click', restart);
function restart() {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    lives = 6
    
    movies = [
        ['psycho', 'vertigo', 'rope'], 
        ['aliens', 'avatar', 'titanic'], 
        ['inception', 'tenet', 'interstellar', 'dunkirk', 'memento'], 
        ['goodfellas', 'casino', 'hugo']
    ]
    director = movies[Math.floor(Math.random() * movies.length)]
    theMovie = director[Math.floor(Math.random() * director.length)]

    playing();
    wrongLettersFunc();
    leHint();
    
    winningScreen.style.display = 'none';
}

button2.addEventListener('click', restart2);
function restart2() {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    
    movies = [
        ['psycho', 'vertigo', 'rope'], 
        ['aliens', 'avatar', 'titanic'], 
        ['inception', 'tenet', 'interstellar', 'dunkirk', 'memento'], 
        ['goodfellas', 'casino', 'hugo']
    ]
    director = movies[Math.floor(Math.random() * movies.length)]
    theMovie = director[Math.floor(Math.random() * director.length)]

    lives = 6
    
    playing();
    wrongLettersFunc();
    leHint();
    
    losingScreen.style.display = 'none';
}
//

//Init
playing();
leHint();


