//Variables
let wordDiv = document.getElementById('word')
let hangmanParts = document.querySelectorAll('.hangman-part');
let wrong = document.getElementById('wrong-letters');
let winningScreen = document.getElementById('winning-screen')
let losingScreen = document.getElementById('losing-screen')
let button = document.getElementById('let-play');
let button2  = document.getElementById('let-play-again');
let livesHTML = document.getElementById('mylives');
let hintDiv = document.getElementById('hint')
let movies, lives, director, theMovie, correctLetters, wrongLetters

function setVars(){
    movies = [
        ['psycho', 'vertigo', 'rope', 'the-birds'], 
        ['aliens', 'avatar', 'titanic', 'the-terminator'], 
        ['inception', 'tenet', 'interstellar', 'dunkirk', 'memento', 'the-dark-knight'], 
        ['goodfellas', 'casino', 'hugo','taxi-driver','the-departed','raging-bull','the-irishman', 'shutter-island'],
        ['saving-private-ryan','jurassic-park','jaws','schindlers-list'],
        ['kill-bill', 'django-unchained', 'reservior-dogs','pulp-fiction','jackie-brown', 'death-proof'],
        ['the-shining','lolita','spartacus','barry-lyndon','clockwork-orange'],
        ['star-wars'],
        ['the-godfather','apocalypse-now', 'the-outsiders'],
        ['moonrise-kingdom','isle-of-dogs','rushmore','grand-budapest-hotel','bottle-rocket'],
        ['seven','fight-club','gone-girl','zodiac','the-game'],
        ['parasite','snowpiercer','okja'],
        ['lost-in-translation','marie-antoinette'],
        ['arrival','sicario','enemy','prisoners','dune']
    ]
    lives = 6
    director = movies[Math.floor(Math.random() * movies.length)]
    theMovie = director[Math.floor(Math.random() * director.length)]
    correctLetters = ['-'];
    wrongLetters = [];
}

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

    console.log(theMovie)
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
}

function leHint() {
    if(director === movies[0]){
        hintDiv.innerHTML = `<h4>Hint: Alfred Hitchcock </h4> `
    } else if (director === movies[1]){
        hintDiv.innerHTML = `<h4>Hint: James Cameron </h4>`
    } else if (director === movies[2]){
        hintDiv.innerHTML = `<h4>Hint: Christopher Nolan </h4>`
    } else if (director === movies[3]){
        hintDiv.innerHTML = `<h4>Hint: Martin Scorsese  </h4>`
    } else if (director === movies[4]){
        hintDiv.innerHTML = `<h4>Hint: Steven Spielberg  </h4>`
    } else if (director === movies[5]){
        hintDiv.innerHTML = `<h4>Hint: Quentin Tarantino  </h4>`
    } else if (director === movies[6]){
        hintDiv.innerHTML = `<h4>Hint: Stanley Kubrick  </h4>`
    } else if (director === movies[7]){
        hintDiv.innerHTML = `<h4>Hint: George Lucas  </h4>`
    } else if (director === movies[8]){
        hintDiv.innerHTML = `<h4>Hint: Francis Ford Coppala  </h4>`
    } else if (director === movies[9]){
        hintDiv.innerHTML = `<h4>Hint: Wes Anderson  </h4>`
    } else if (director === movies[10]){
        hintDiv.innerHTML = `<h4>Hint: David Fincher  </h4>`
    } else if (director === movies[11]){
        hintDiv.innerHTML = `<h4>Hint: Bong Joon-Ho  </h4>`
    } else if (director === movies[12]){
        hintDiv.innerHTML = `<h4>Hint: Sofia Coppola  </h4>`
    } else if (director === movies[13]){
        hintDiv.innerHTML = `<h4>Hint: Denis Villeneuve  </h4>`
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

    setVars();
    playing();
    wrongLettersFunc();
    leHint();
    
    winningScreen.style.display = 'none'
}

button2.addEventListener('click', restart2);
function restart2() {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    
    setVars();
    playing();
    wrongLettersFunc();
    leHint();
    
    losingScreen.style.display = 'none';
}
//

//Init
setVars();
playing();
leHint();
