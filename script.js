

window.onload = function(){
    alert("please rotate your phone if you are using mobile devices ! Ignore this alert if not ");
}

const pianoKeys = document.querySelectorAll('.piano-keys .key'),
volumeSlider = document.querySelector('.volume-slider input'),
keysCheckbox = document.querySelector('.keys-checkbox input');



let allKeys = [] , audio = new Audio("./assets/a.wav") //  by default, audio src is "a" tune 

const playTune = (key)=> { 
    
    audio.src = `./assets/${key}.wav` // passing audio src based on key pressed 
    audio.play();  // playing audio
    

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

const handleVolume = (e) =>{
    audio.volume = e.target.value; // passing the range slider value as an audio volume

}

const showHideKeys = () => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

const pressedKey = (e) => {
    //if the pressed key is in the allKeys array, only call the playTune function
   if(allKeys.includes(e.key)) playTune(e.key);
} 



keysCheckbox.addEventListener('click',showHideKeys);
volumeSlider.addEventListener('input',handleVolume);
document.addEventListener('keydown',pressedKey);

// code for playing pre-stored songs

