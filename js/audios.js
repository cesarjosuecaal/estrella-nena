const audio = new Audio("./audio/cartaCorto.mp3");
// audio.play();

let musicInput=document.querySelector('#alternar-musica');

audio.loop = true;
musicInput.addEventListener('change',()=>{ audio.play(); });