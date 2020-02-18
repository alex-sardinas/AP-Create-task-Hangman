let button = document.getElementById('let-play');
let hangman = document.getElementsByClassName('hangman-part');
let random;
let wrong = document.getElementById('wrong-letters')

function rand(){
    random = hangman[Math.floor(Math.random() * hangman.length)]
}

button.onclick = function(){

    rand();
    if (random.style.display === 'none'){
        random.style.display = 'block'
    } else {
        random.style.display = 'none'
    }
}

console.log(hangman);

rand();
console.log(random);

function betski(){
    console.log('hello');
    if(wrong.children[1].innerHTML = '1'){
        wrong.children[1].innerHTML = "boi"
    } else {
        wrong.children[1].innerHTML = "1"
    }
}

document.addEventListener('keydown', betski)
console.log(wrong.children[1])