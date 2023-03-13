const audio = new Audio('iphone.mp3');

var musica = document.getElementById("musica")

musica.addEventListener("click", ()=>{
        audio.play()
})