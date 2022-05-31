document.addEventListener('keydown', jump);
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const pts = document.querySelector('.pts');
let counter = 0;


function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
} 



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`


        setTimeout(() => {
            alert('Você perdeu!')
        }, 1000)
        
        clearInterval(loop)
    }

}, 10);

