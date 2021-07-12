function handleClick() {

    var buttonSelected = this.innerHTML;
    switch (buttonSelected) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;


        case "1":
            var sound = new Audio("sounds/Guitar/cool-guitar-riff.wav");
            sound.play();
            break;

        case "2":
            var sound = new Audio("sounds/Guitar/happy-guitar-chords.wav");
            sound.play();
            break;
        
        case "3":
            var sound = new Audio("sounds/Guitar/short-guitar-strum.wav");
            sound.play();
            break;

        case "4":
            var sound = new Audio("sounds/Guitar/guitar-stroke-down-slow.wav");
            sound.play();
            break;

        case "5":
            var sound = new Audio("sounds/Guitar/electric-guitar-distorted-slide.wav");
            sound.play();
            break;

        case "6":
            var sound = new Audio("sounds/Guitar/bass-guitar-single-note.wav");
            sound.play();
            break;

        case "7":
            var sound = new Audio("sounds/Guitar/wrong-answer-bass-buzzer.wav");
            sound.play();
            break;

        
        default:
            break;
    }
}

function handleKeyPress(e) {
    var keyPressed = e.key;

    switch (keyPressed) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        
        case "1":
            var sound = new Audio("sounds/MP3/cool-guitar-riff.mp3");
            sound.play();
            break;

        case "2":
            var sound = new Audio("sounds/MP3/happy-guitar-chords.mp3");
            sound.play();
            break;
        
        case "3":
            var sound = new Audio("sounds/MP3/short-guitar-strum.mp3");
            sound.play();
            break;

        case "4":
            var sound = new Audio("sounds/MP3/guitar-stroke-down-slow.mp3");
            sound.play();
            break;

        case "5":
            var sound = new Audio("sounds/MP3/electric-guitar-distorted-slide.mp3");
            sound.play();
            break;

        case "6":
            var sound = new Audio("sounds/MP3/bass-guitar-single-note.mp3");
            sound.play();
            break;

        case "7":
            var sound = new Audio("sounds/MP3/wrong-answer-bass-buzzer.mp3");
            sound.play();
            break;
        
    }
}

var buttonList = document.querySelectorAll("button.drum");
var listLength = buttonList.length;

var buttonList2 = document.querySelectorAll("button.guitar");
var listLength2 = buttonList2.length;

for(var i = 0; i<listLength; i++) {
    var btn = buttonList[i];
    btn.addEventListener("click", handleClick);
    btn.addEventListener("keydown", handleKeyPress);
}

for(var i = 0; i<listLength2; i++) {
    var btn = buttonList2[i];
    btn.addEventListener("click", handleClick);
    btn.addEventListener("keydown", handleKeyPress);
}