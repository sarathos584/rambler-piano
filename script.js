const pianoKeys = document.querySelectorAll('.piano-keys .key');

let audio = new Audio("")

const playTune = (key)=> {

}

pianoKeys.forEach(key => {
    // calling playTune function with passing dat-key value as an argument
    key.addEventListener('click', ()=> playTune(key.dataset.key));
} );
