// Sounds
const ButtonPress = new Audio("Sounds/ButtonPress.wav");    // Button Press Sound
const Glitch      = new Audio("Sounds/GlitchSound.mp3"); // Glitch Sound


// Play Button
function Play() {
    ButtonPress.play(); // Play Button Press Sound
    ButtonPress.onended = function() { // Run When Sound Ends
        window.location.href = 'Main/boxi.html'; // Go To The Game
    }
}

// Help Button
function Help() {
    ButtonPress.play(); // Play Button Press Sound
    ButtonPress.onended = function() { // Run When Sound Ends
        window.location.href = 'help.html'; // Go To The Help Menu
    }
}

// Changelog Button
function Changelog() {
    ButtonPress.play(); // Play Button Press Sound
    ButtonPress.onended = function() { // Run When Sound Ends
        window.location.href = 'Changelog/changelog.html'; // Go To Changelog
    }
}

// Developer Mode Button
function DevMode() {
    Glitch.play(); // Play The Glitch Sound
    Glitch.onended = function() { // Run When Sound Ends
        window.location.href = 'DevMode/devmode.html'; // Go To Dev Mode
    }
}