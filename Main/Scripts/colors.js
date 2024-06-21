let colornum = 0; // Color Number
const maxCol = 14; // Maximum Color Number

// Change Color
function ChangeColor() {
    switch(colornum) {
        default: 
            player.style.backgroundColor = "White"; // White
            player.style.filter="drop-shadow(0 0 0.3rem white)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 0:
            player.style.backgroundColor = "White"; // White
            player.style.filter="drop-shadow(0 0 0.3rem white)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 1:
            player.style.backgroundColor = "Red"; // Red
            player.style.filter="drop-shadow(0 0 0.3rem red) ";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 2:
            player.style.backgroundColor = "Orange"; // Orange
            player.style.filter="drop-shadow(0 0 0.3rem orange)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 3:
            player.style.backgroundColor = "Yellow"; // Yellow
            player.style.filter="drop-shadow(0 0 0.3rem yellow)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
            
        case 4:
            player.style.backgroundColor = "Lime"; // Lime
            player.style.filter="drop-shadow(0 0 0.3rem lime)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 5:
            player.style.backgroundColor = "Green"; // Green
            player.style.filter="drop-shadow(0 0 0.3rem green)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 6:
            player.style.backgroundColor = "Lightblue"; // Light Blue
            player.style.filter="drop-shadow(0 0 0.3rem lightblue)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 7:
            player.style.backgroundColor = "Blue"; // Blue
            player.style.filter="drop-shadow(0 0 0.3rem blue)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 8:
            player.style.backgroundColor = "Darkblue"; // Dark Blue
            player.style.filter="drop-shadow(0 0 0.3rem darkblue)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 9:
            player.style.backgroundColor = "Pink"; // Pink
            player.style.filter="drop-shadow(0 0 0.3rem pink)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 10:
            player.style.backgroundColor = "Magenta"; // Magenta
            player.style.filter="drop-shadow(0 0 0.3rem magenta)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 11:
            player.style.backgroundColor = "Purple"; // Purple
            player.style.filter="drop-shadow(0 0 0.3rem purple)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 12:
            player.style.backgroundColor = "Darkpurple"; // Dark Purple
            player.style.filter="drop-shadow(0 0 0.3rem darkpurple)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
        case 13:
            player.style.backgroundColor = "Black"; // Black
            player.style.filter="drop-shadow(0 0 0.3rem black)";
            PlayerFace1.style.filter="invert(100%)";
            PlayerFace2.style.filter="invert(100%)";
            break;
        case 14:
            player.style.backgroundColor = "Grey"; // Grey
            player.style.filter="drop-shadow(0 0 0.3rem grey)";
            PlayerFace1.style.filter="invert(0%)";
            PlayerFace2.style.filter="invert(0%)";
            break;
    }
}