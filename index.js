
const audioKeys = {
    a: new Audio("./sounds/crash.mp3"),
    s: new Audio("./sounds/kick-bass.mp3"),
    d: new Audio("./sounds/snare.mp3"),
    f: new Audio("./sounds/tom-1.mp3"),
    h: new Audio("./sounds/tom-2.mp3"),
    j: new Audio("./sounds/tom-3.mp3"),
    k: new Audio("./sounds/tom-4.mp3"),
    l: new Audio("./sounds/crash.mp3")
  };

function playAudio(key){
    const audio = audioKeys[key];
    if(!audio) return;

    audio.currentTime = 0;
    audio.play(); 
    buttonAnimation(key);
}

function buttonAnimation(pressedKey){
    const element = document.querySelector("." + pressedKey);
    element.classList.toggle("pressed");
}

function handleMouseDown() {
    const key = this.firstChild.textContent;
    const keyLowercase = key.toLowerCase();
    playAudio(keyLowercase);
  }
  
function handleMouseUp(){
  this.classList.remove("pressed");
}

const keys = document.getElementsByClassName("drum");
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("mousedown", handleMouseDown);
  keys[i].addEventListener("mouseup", handleMouseUp);
}

document.addEventListener('keydown', function(event) {
    const keySelected = event.key;
    playAudio(keySelected);
})

document.addEventListener('keyup', function(event) {
    const keySelected = event.key;
    buttonAnimation(keySelected);
})

