/**
 * @author Firecrafter28
 * @license GPL-3.0
 */

const VERSION = constants.VERSION;


class Player {
    x;
    y;

    #moveSpeed = 1;

    #element;
    #settingsElement = document.getElementById("player-color-display");

    #maxX = 9;
    #maxY = 9;
    #minX = 1;
    #minY = 1;

    #coords;
    #coordsElement = document.getElementById("player-coords");
    
    #colors = [ "white", "red", "orange", "yellow", "lime", "green", "blue", "purple", "magenta", "white" ];
    #filters = [ "none", "none", "none", "none", "none", "none", "none", "none", "none", "invert()" ];
    color = {
        current: 0,
        min: 0,
        max: this.#colors.length - 1
    }


    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.#element = element;
    }

    getElement() { return this.#element; }

    getBounds(bound, axis) {
        switch (bound) {
            case "min":
                switch (axis) {
                    case "x": return this.#minX;
                    case "y": return this.#minY;
                }
            
            case "max":
                switch(axis) {
                    case "x": return this.#maxX;
                    case "y": return this.#maxY;
                }
        }
    }

    getMoveSpeed() { return this.#moveSpeed; }

    update() {
        this.#element.style.gridColumn = this.x;
        this.#element.style.gridRow = this.y;

        this.#coords = `Player (<span>${this.x}</span>, <span>${this.y}</span>)`;
        this.#coordsElement.innerHTML = this.#coords;

        this.#element.style.backgroundColor = this.#colors[this.color.current];
        this.#element.style.filter = this.#filters[this.color.current];

        this.#settingsElement.style.backgroundColor = this.#colors[this.color.current];
        this.#settingsElement.style.filter = this.#filters[this.color.current];
    }
}

class Box {
    x;
    y;

    #moveSpeed = 1;

    #element;

    #maxX = 8;
    #maxY = 8;
    #minX = 2;
    #minY = 2;

    #coords;
    #coordsElement = document.getElementById("box-coords");


    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.#element = element;
    }

    getElement() { return this.#element; }

    getBounds(bound, axis) {
        switch (bound) {
            case "min":
                switch (axis) {
                    case "x": return this.#minX;
                    case "y": return this.#minY;
                }
            
            case "max":
                switch(axis) {
                    case "x": return this.#maxX;
                    case "y": return this.#maxY;
                }
        }
    }

    getMoveSpeed() { return this.#moveSpeed; }

    update() {
        this.#element.style.gridColumn = this.x;
        this.#element.style.gridRow = this.y;

        this.#coords = `Box (<span>${this.x}</span>, <span>${this.y}</span>)`;
        this.#coordsElement.innerHTML = this.#coords;
    }
}

class Goal {
    x;
    y;

    #moveSpeed = 1;

    #element;

    #maxX = 8;
    #maxY = 8;
    #minX = 2;
    #minY = 2;

    #coords;
    #coordsElement = document.getElementById("goal-coords");


    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.#element = element;
    }

    getElement() { return this.#element; }

    getBounds(bound, axis) {
        switch (bound) {
            case "min":
                switch (axis) {
                    case "x": return this.#minX;
                    case "y": return this.#minY;
                }
            
            case "max":
                switch(axis) {
                    case "x": return this.#maxX;
                    case "y": return this.#maxY;
                }
        }
    }

    getMoveSpeed() { return this.#moveSpeed; }

    update() {
        this.#element.style.gridColumn = this.x;
        this.#element.style.gridRow = this.y;
        
        this.#coords = `Goal (<span>${this.x}</span>, <span>${this.y}</span>)`;
        this.#coordsElement.innerHTML = this.#coords;
    }
}

// Control buttons for mobile
const leftBtn = document.getElementById("left-btn");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");
const rightBtn = document.getElementById("right-btn");

// Initialize the player
const player = new Player(5, 5, document.getElementById("player"));
player.update();

// Initialize the box
const box = new Box(3, 3, document.getElementById("box"));
box.update();
randomizePosition([box]);


// Initialize the goal
const goal = new Goal(2, 2, document.getElementById("goal"));
goal.update();
randomizePosition([goal]);

// Settings Buttons
const incrementColorBtn = document.getElementById("add-color");
const decrementColorBtn = document.getElementById("subtract-color");

/**
 * Function to change the player's color
 * @param { boolean } decrement Weather or not to decrement the color. If false, the color will instead be incremented
 * @returns { void }
 */
function changeColor(decrement) {
    if (!decrement) {
        if (player.color.current == player.color.max) {
            player.color.current = player.color.min;
        } else {
            player.color.current += 1;
        }
    } else {
        if (player.color.current == player.color.min) {
            player.color.current = player.color.max;
        } else {
            player.color.current -= 1;
        }
    }

    player.update();
}


/**
 * Move the player left
 * @returns { void }
 */
function playerLeft() {
    handleLeft(player);
    if (checkColliding(player, box)) {
        handleLeft(box);
    }

    checkWin();
}

/**
 * Move the player up
 * @returns { void }
 */
function playerUp() {
    handleUp(player);
    if (checkColliding(player, box)) {
        handleUp(box);
    }

    checkWin();
}

/**
 * Move the player down
 * @returns { void }
 */
function playerDown() {
    handleDown(player);
    if (checkColliding(player, box)) {
        handleDown(box);
    }

    checkWin();
}

/**
 * Move the player right
 * @returns { void }
 */
function playerRight() {
    handleRight(player);
    if (checkColliding(player, box)) {
        handleRight(box);
    }

    checkWin();
}


// Add function to the mobile control buttons
leftBtn.addEventListener("click", () => { playerLeft(); });
upBtn.addEventListener("click", () => { playerUp(); });
downBtn.addEventListener("click", () => { playerDown(); });
rightBtn.addEventListener("click", () => { playerRight(); });

update();

/**
 * Randomize the positions of objects if the positions are the same
 * 
 * @returns { void }
 */
function update() {
    if (checkColliding(box, goal)) {
        randomizePosition([box, goal]);
    }

    if (checkColliding(player, box)) {
        randomizePosition([box]);
    }

    if (checkColliding(player, goal)) {
        randomizePosition([goal]);
    }
}

/**
 * The current score
 * @type { number }
 */
var score = 0;
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");

checkWin();
updateScore();

// Handle inputs
/**
 * Move an object up
 * @param { Player | Box | Goal } object The object to move
 * @returns { void }
 */
function handleUp(object) {
    object.y = object.y - object.getMoveSpeed();
    if (!(object.y < object.getBounds("min", "y"))) {
        object.update();
    } else {
        object.y = object.y + object.getMoveSpeed();
        object.update();
    }
}

/**
 * Move an object left
 * @param { Player | Box | Goal } object The object to move
 * @returns { void }
 */
function handleLeft(object) {
    object.x = object.x - object.getMoveSpeed();
    if (!(object.x < object.getBounds("min", "x"))) {
        object.update();
    } else {
        object.x = object.x + object.getMoveSpeed();
        object.update();
    }
}

/**
 * Move an object down
 * @param { Player | Box | Goal } object The object to move
 * @returns { void }
 */
function handleDown(object) {
    object.y = object.y + object.getMoveSpeed();
    if (!(object.y > object.getBounds("max", "y"))) {
        object.update();
    } else {
        object.y = object.y - object.getMoveSpeed();
        object.update();
    }
}

/**
 * Move an object right
 * @param { Player | Box | Goal } object The object to move
 * @returns { void }
 */
function handleRight(object) {
    object.x = object.x + object.getMoveSpeed();
    if (!(object.x > object.getBounds("max", "x"))) {
        object.update();
    } else {
        object.x = object.x - object.getMoveSpeed();
        object.update();
    }
}


/**
 * Checks if 2 objects are colliding.
 * @param { Player | Box | Goal } object1 The first object
 * @param { Player | Box | Goal } object2 The second object
 * @returns { boolean }
 */
function checkColliding(object1, object2) {
    if (object1.x == object2.x && object1.y == object2.y) {
        return true;
    }

    return false;
}


// Listen for inputs
document.addEventListener("keydown", (e) => {
    // Movement
    if (e.code == "ArrowUp"    || e.code == "KeyW") { playerUp();    } // Up Arrow    /  W  -> Move Up
    if (e.code == "ArrowLeft"  || e.code == "KeyA") { playerLeft();  } // Left Arrow  /  A  -> Move Left
    if (e.code == "ArrowDown"  || e.code == "KeyS") { playerDown();  } // Down Arrow  /  S  -> Move Down
    if (e.code == "ArrowRight" || e.code == "KeyD") { playerRight(); } // Right Arrow /  D  -> Move Right

    // Color Changing
    if (e.code == "BracketLeft")  { changeColor(true);  } // [ -> Decrement The Player's Color
    if (e.code == "BracketRight") { changeColor(false); } // ] -> Increment The Player's Color
});

/**
 * Function to randomize the position of an object.
 * @param object The object that will have it's position randomized.
 */
function randomizePosition(object) {
    object.forEach((obj) => {
        // Get the bounds
        const maxX = obj.getBounds("max", "x");
        const minX = obj.getBounds("min", "x");
        const maxY = obj.getBounds("max", "y");
        const minY = obj.getBounds("min", "y");
    
        // Randomize X Position
        obj.x = Math.round(Math.random() * (maxX - minX)) + minX;
        
        // Randomize Y Position
        obj.y = Math.round(Math.random() * (maxY - minY)) + minY;
    
        obj.update();
    })

}

/**
 * Add a CSS class to an object for a specified amount of time.
 * @param { Player, Box, Goal } object The object to give the class to
 * @param { string } className The name of the CSS class to give the object
 * @param { number } time The amount of time in seconds before removing the class
 * @returns { void }
 */
function tempClass(object, className, time) {
    object.getElement().classList.add(className);
    setTimeout(() => {
        object.getElement().classList.remove(className);
    }, (time * 1000));
}

/**
 * Check if the box is on the goal. If it is, add 1 to the score.
 * @returns { void }
 */
function checkWin() {
    if (checkColliding(box, goal)) {
        score += 1;

        tempClass(player, "scored", 1);
        updateScore();
        
        randomizePosition([box, goal]);
        update();
    }
}


/**
 * Function to update the score display.
 * @returns { void }
 */
function updateScore() {

    /**
     * @param { number } value The score
     * @param { HTMLElement | null } element The element the score will be displayed in
     * @param { string } label The score's legend element
     * @returns { void }
     */
    const parse = (value, element, label) => {
        element.innerHTML = `
        <legend>${label}</legend>

        <i class="placeholder">${
              value < 10 ? "00000" 
            : value < 100 ? "0000"
            : value < 1000 ? "000"
            : value < 10000 ? "00"
            : value < 100000 ? "0"
            : value < 1000000 ? "" : ""
        }</i><span aria-label="${label}: ${value}">${value}</span>`;
    }

    parse(score, scoreElement, "Score");

    if (score > getStoredValue("highscore")) {
        setStoredValue("highscore", score);
    }

    parse(getStoredValue("highscore"), highscoreElement, "Highscore");
}

// Buttons
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("home-btn");
const helpBtn = document.getElementById("help-btn");
const changelogBtn = document.getElementById("changelog-btn");

// Restart
restartBtn.addEventListener("click", () => {
    location.reload();
});

// Home
homeBtn.addEventListener("click", () => {
    const homeLink = document.createElement("a");
    homeLink.href = "../index.html";

    homeLink.click();
});

// Help
helpBtn.addEventListener("click", () => {
    const helpLink = document.createElement("a");
    helpLink.href = "../Pages/Help.html?redirect=game";

    helpLink.click();
});

// Changelog
changelogBtn.addEventListener("click", () => {
    const changelogLink = document.createElement("a");
    changelogLink.href = "../Pages/Changelog.html?redirect=game";

    changelogLink.click();
});


// Settings menu
const settingsMenu = document.getElementById("settings-menu");
const settingsModal = document.getElementById("dialog-modal");
const settingsClose = document.getElementById("settings-exit-btn");
const settingsBtn = document.getElementById("settings-btn");
const gameVersion = document.getElementById("settings-footer__version");

// Display the version
gameVersion.innerHTML = `v${VERSION}`;

/**
 * Close the settings menu
 * @returns { void }
 */
const closeSettings = () => {
    settingsModal.style.display = "none";
    settingsMenu.close();
}

/**
 * Open the settings menu
 * @returns { void }
 */
const openSettings = () => {
    settingsModal.style.display = "unset";
    settingsMenu.show();
}

settingsClose.addEventListener("click", closeSettings);
settingsBtn.addEventListener("click", openSettings);

// Initally close the settings menu
closeSettings();


/**
 * Stores a value to localstorage
 * @param { string } name The name of the value being set
 * @param { any } value The value to set the name to
 * @returns { void }
 */
function setStoredValue(name, value) {
    localStorage.setItem(name, value);
}

/**
 * Gets a value from localstorage
 * @param { string } name The value to get
 * @returns { void }
 */
function getStoredValue(name) {
    return localStorage.getItem(name)
}

/**
 * Initially sets the theme if none is saved
 * @returns { void }
 */
function setInitialTheme() {
    const t = getStoredValue("theme");

    if (t != 0 && t != 1) {
        setStoredValue("theme", 0);
    }
}

setInitialTheme();


// Theme
const themeSwitch = document.getElementById("colorModeSwitch");

function initTheme() {
    const t = getStoredValue("theme");

    themeSwitch.checked = (t == 0 ? false : true);
    updateTheme();
}

function updateTheme() {
    if (themeSwitch.checked) {
        setStoredValue("theme", 1);
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        setStoredValue("theme", 0);
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
}

themeSwitch.addEventListener("input", () => updateTheme());

initTheme();


// Add function to settings buttons
incrementColorBtn.addEventListener("click", () => changeColor(false));
decrementColorBtn.addEventListener("click", () => changeColor(true));

// Initially set highscore
if (getStoredValue("highscore") == undefined) setStoredValue("highscore", 0);

const confirmationPopup = document.getElementById("confirmation-popup");
confirmationPopup.close();

// Highscore reset button
const highscoreResetBtn = document.getElementById("highscore-reset-btn");
highscoreResetBtn.addEventListener("click", () => confirmationPopup.show());

const highscoreResetConfirmationButton = document.getElementById("confirmation-confirm");
const highscoreResetDenyButton = document.getElementById("confirmation-deny");

function resetHighscore() {
    setStoredValue("highscore", 0);
    location.reload();
}

// Handle responses to reset confirmation dialog
highscoreResetConfirmationButton.addEventListener("click", () => resetHighscore());
highscoreResetDenyButton.addEventListener("click", () => confirmationPopup.close());