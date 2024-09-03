// Sounds
const ButtonPress = new Audio("Sounds/ButtonPress.wav");    // Button Press Sound


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
        window.location.href = 'Help/help.html'; // Go To The Help Menu
    }
}

// Changelog Button
function Changelog() {
    ButtonPress.play(); // Play Button Press Sound
    ButtonPress.onended = function() { // Run When Sound Ends
        window.location.href = 'Changelog/changelog.html'; // Go To Changelog
    }
}