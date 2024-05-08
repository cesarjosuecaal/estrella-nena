const audio = new Audio("./audio/cartaCorto.mp3");
// audio.play();

let musicInput=document.querySelector('#alternar-musica');

audio.loop = true;
musicInput = addEventListener('change',()=>{
    if (audio.paused) {
            audio.play();
    } else {
        audio.pause();
    }
});