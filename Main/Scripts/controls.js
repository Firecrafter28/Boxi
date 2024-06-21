// Keypress Detection
document.addEventListener('keydown', logKey);
    function logKey(e) {
        if (`${e.code}` == "ArrowRight") { // Right
            right();
        }
        if (`${e.code}` == "ArrowLeft") {  // Left
            left();
        }
        if (`${e.code}` == "ArrowDown") {  // Down
            down();
        }
        if (`${e.code}` == "ArrowUp") {    // Up
            up();
        }
        
        if (`${e.code}` == "KeyD") {       // Right
            right();
        }
        if (`${e.code}` == "KeyA") {       // Left
            left();
        }
        if (`${e.code}` == "KeyS") {       // Down
            down();
        }
        if (`${e.code}` == "KeyW") {       // Up
            up();
        }

        if (`${e.code}` == "KeyR") {       // Reset
            reset();
        }

        if (`${e.code}` == 'Digit1') {     // Face One
            faceone();
        }
        if (`${e.code}` == 'Digit2') {     // Face Two
            facetwo();
        }
        if (`${e.code}` == 'Digit3') {     // Hide Face
            hideface();
        }

        if (`${e.code}` == 'Minus') {      // Light Mode
            LightMode();
        }
        if (`${e.code}` == 'Equal') {      // Dark Mode
            DarkMode();
        }

        if (`${e.code}` == 'BracketLeft') { // <- Color
            if (!((colornum - 1) < 0)) {
                colornum -= 1;
            } else {
                colornum = maxCol;
            }
            ChangeColor();
        }

        if (`${e.code}` == 'BracketRight') { // -> Color
            if (!((colornum + 1) > maxCol)) {
                colornum += 1;
            } else {
                colornum = 0;
            }
            ChangeColor();
        }
}