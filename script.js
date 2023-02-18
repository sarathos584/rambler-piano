const pianoKeys = document.querySelectorAll('.piano-keys .key');

let allKeys = [] , audio = new Audio("./assets/a.wav");  //  by default, audio src is "a" tune 

const playTune = (key)=> { 
    audio.src = `./assets/${key}.wav` // passing audio src based on key pressed 
    audio.play();  // playing audio
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add('active')

    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150)

}

pianoKeys.forEach(key => {

    allKeys.push(key.dataset.key); // adding data-key value to the allKey array
    // calling playTune function with passing dat-key value as an argument
    key.addEventListener('click', ()=> playTune(key.dataset.key));
} );

const pressedKey = (e) => {
    playTune(e.key)
} 

document.addEventListener('keydown',pressedKey);
