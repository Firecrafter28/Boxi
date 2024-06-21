// Colors
let bgcol = "rgb(41, 41, 41)"; // Background Color
let defcol = "aqua"; // Default Color
let defhovcol = "aquamarine"; // Default Hover Color
let defbuttoncol = "aqua"; // Default Button Color
let defbuttontexcol = "black"; // Default Button Text Color
let defbuttonhovcol = "aquamarine"; // Default Button Hover Color
let defbuttonbordercol = "aqua"; // Default Button Border Color
let defbuttonborderhovcol = "aquamarine"; // Default Button Border Hover Color


// Modes //
// Light Mode
function LightMode() {
    // Colors
    bgcol = "white"
    defcol = "black"; 
    defhovcol = "grey";
    defbuttoncol = "grey";
    defbuttontexcol = "white";
    defbuttonhovcol = "lightgray";
    defbuttonbordercol = "grey";
    defbuttonborderhovcol = "lightgray";
    // Background
    body.style.backgroundColor = bgcol;
    
    // Player
    player.style.borderStyle = "solid";
    player.style.borderColor = "rgb(41, 41, 41)";

    // Goal
    goal.style.borderStyle = "solid";

    /////////////
    // Buttons //
    /////////////

    
    // Reset Button
    button[0].style.color = defcol;

    // Home Button
    home.style.color = defcol;

    // Help Button
    help.style.color = defcol;
    
    // Controls
    button[1].style.color = defbuttontexcol;
    button[1].style.backgroundColor = defbuttoncol;
    button[1].style.borderColor = defbuttonbordercol;
    
    button[2].style.color = defbuttontexcol;
    button[2].style.backgroundColor = defbuttoncol;
    button[2].style.borderColor = defbuttonbordercol;
    
    button[3].style.color = defbuttontexcol;
    button[3].style.backgroundColor = defbuttoncol;
    button[3].style.borderColor = defbuttonbordercol;
    
    button[4].style.color = defbuttontexcol;
    button[4].style.backgroundColor = defbuttoncol;
    button[4].style.borderColor = defbuttonbordercol;
    ////////////////////////////////

    // Score Display
    scoredisp.style.color = defcol; // Set Score Display Color

    // Coord Displays
    coorddisp.style.color = defcol; // Set Player Coordinate Display Color
    boxcoorddisp.style.color = defcol // Set Box Coordinate Display Color
    goalcoorddisp.style.color = defcol // Set Goal Coordinate Display Color

    lmbutton.style.visibility = "visible"; // Show Light Mode Button
    dmbutton.style.visibility = "hidden"; // Hide Dark Mode Button
}

// Dark Mode
function DarkMode() {
    // Colors
    bgcol = "rgb(41, 41, 41)";
    defcol = "aqua";
    defhovcol = "aquamarine";
    defbuttoncol = "aqua";
    defbuttontexcol = "black"
    defbuttonhovcol = "aquamarine";
    defbuttonbordercol = "aqua";
    defbuttonborderhovcol = "aquamarine";
    
    // Background
    body.style.backgroundColor = bgcol;
    
    // Player
    player.style.borderColor = "initial";
    player.style.borderWidth = "initial";
    player.style.borderStyle = "None";

    // Goal
    goal.style.borderStyle = "None";

    /////////////
    // Buttons //
    /////////////
    
    // Reset Button
    button[0].style.color = defbuttoncol;
    button[0].addEventListener("mouseover", () => {
        button[0].style.color = defhovcol;
    });
    button[0].addEventListener("mouseout", () => {
        button[0].style.color = defcol;
    });

    // Home Button
    home.style.color = defbuttoncol;
    home.addEventListener("mouseover", () => {
        home.style.color = defhovcol;
    });
    home.addEventListener("mouseout", () => {
        home.style.color = defcol;
    });

    // Help Button
    help.style.color = defbuttoncol;
    help.addEventListener("mouseover", () => {
        help.style.color = defhovcol;
    });
    help.addEventListener("mouseout", () => {
        help.style.color = defcol;
    });
    
    // Controls
    button[1].style.color = defbuttontexcol;
    button[1].style.backgroundColor = defbuttoncol;
    button[1].style.borderColor = defbuttonbordercol;
    button[1].addEventListener("mouseover", () => {
        button[1].style.backgroundColor = defbuttonhovcol;
        button[1].style.borderColor = defbuttonborderhovcol;
    });
    button[1].addEventListener("mouseout", () => {
        button[1].style.backgroundColor = defbuttoncol;
        button[1].style.borderColor = defbuttonbordercol;
    });
    
    button[2].style.color = defbuttontexcol;
    button[2].style.backgroundColor = defbuttoncol;
    button[2].style.borderColor = defbuttonbordercol;
    button[2].addEventListener("mouseover", () => {
        button[2].style.backgroundColor = defbuttonhovcol;
        button[2].style.borderColor = defbuttonborderhovcol;
    });
    button[2].addEventListener("mouseout", () => {
        button[2].style.backgroundColor = defbuttoncol;
        button[2].style.borderColor = defbuttonbordercol;
    });
    
    button[3].style.color = defbuttontexcol;
    button[3].style.backgroundColor = defbuttoncol;
    button[3].style.borderColor = defbuttonbordercol;
    button[3].addEventListener("mouseover", () => {
        button[3].style.backgroundColor = defbuttonhovcol;
        button[3].style.borderColor = defbuttonborderhovcol;
    });
    button[3].addEventListener("mouseout", () => {
        button[3].style.backgroundColor = defbuttoncol;
        button[3].style.borderColor = defbuttonbordercol;
    });
    
    button[4].style.color = defbuttontexcol;
    button[4].style.backgroundColor = defbuttoncol;
    button[4].style.borderColor = defbuttonbordercol;
    button[4].addEventListener("mouseover", () => {
        button[4].style.backgroundColor = defbuttonhovcol;
        button[4].style.borderColor = defbuttonborderhovcol;
    });
    button[4].addEventListener("mouseout", () => {
        button[4].style.backgroundColor = defbuttoncol;
        button[4].style.borderColor = defbuttonbordercol;
    });
    ////////////////////////////////

    // Score Display
    scoredisp.style.color = defbuttoncol;

    // Coord Displays
    coorddisp.style.color = defcol; // Set Player Coordinate Display Color
    boxcoorddisp.style.color = defcol // Set Box Coordinate Display Color
    goalcoorddisp.style.color = defcol // Set Goal Coordinate Display Color

    dmbutton.style.visibility = "visible";
    lmbutton.style.visibility = "hidden";
}