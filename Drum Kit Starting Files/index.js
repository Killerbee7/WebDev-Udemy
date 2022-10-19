const button1 = document.querySelectorAll(".drum");
let audio = new Audio("sounds/crash.mp3");
let audio1 = new Audio("sounds/kick-bass.mp3");
let audio2 = new Audio("sounds/snare.mp3");
let audio3 = new Audio("sounds/tom-1.mp3");
let audio4 = new Audio("sounds/tom-2.mp3");
let audio5 = new Audio("sounds/tom-3.mp3");
let audio6 = new Audio("sounds/tom-4.mp3");


for (i = 0; i < button1.length; i++) {
  function buttonClick() {
    let buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    animation(buttonHTML);
  }
  button1[i].addEventListener("click", buttonClick);
}

document.addEventListener("keypress", function (event) {
  console.log(event);
  let keypress = event.key;
  makeSound(keypress);
  animation(keypress);
});

function makeSound(keypress){

    switch (keypress) {

        case "w":
            audio.play();
            break;
    
          case "a":
            audio1.play();
            break;
    
          case "s":
            audio2.play();
            break;
    
          case "d":
            audio3.play();
            break;
    
          case "j":
            audio4.play();
            break;
    
          case "k":
            audio5.play();
            break;
    
          case "l":
            audio6.play();
            break;
        
      }

}

function animation(keypress){
    let pressedButton=document.querySelector('.' + keypress);
    console.log(pressedButton);
    pressedButton.classList.add("pressed");
    setTimeout(function(){
        pressedButton.classList.remove("pressed");
    }, 100);
}