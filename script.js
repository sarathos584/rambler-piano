const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio("./assets/a.wav");  //  by default, audio src is "a" tune 

const playTune = (key)=> { 
    audio.src = `./assets/${key}.wav` // passing audio src based on key pressed 
    audio.play();  // playing audio

    
}

pianoKeys.forEach(key => {
    // calling playTune function with passing dat-key value as an argument
    key.addEventListener('mousedown', ()=> playTune(key.dataset.key));
} );

