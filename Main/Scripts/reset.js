// Reset
function reset() {
    RestartSound.play(); // Play The Restart Sound
    RestartSound.onended = function() { // Run When Sound Ends
        location.reload(); // Reload
    }
}