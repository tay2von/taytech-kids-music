let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case 'T':
                //this.style.color = "blue";
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case 'A':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'Y':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'T':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'E':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 'C':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'H':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case 'K':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case 'I':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'D':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'S':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
                
        }


        
        //What to do when click detected.
    });
    
}




var audio = new Audio("sounds/kick-bass.mp3");
audio.play();