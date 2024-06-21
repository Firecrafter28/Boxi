// Speed
let sleeptime = 10; // Sleep Time
let moveSpeed = 2; // Move Speed


// Sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Movement //
// Up
function up() {
    vnum -= moveSpeed; // Subtract The Move Speed From The Vertical Number
    player.style.top = vnum + '%'; // Set The Player's Top Style To VerticalNumber%
    player.style.height = stretchB + 'px'; // Stretch The Player's Height To StretchB pixels
    player.style.width = stretchS + 'px'; // Stretch The Player's Width To StretchS pixels
    sleep(sleeptime).then(() => { resetstretch(); }); // Sleep For Sleep Time, Then Reset The Stretch
    update(); // Update


    if (y - 2 == by ) {
        if (x == bx) {
            by -= moveSpeed;
            boxupdate();
        }
    }
}

// Down
function down() {
    vnum += moveSpeed;
    player.style.top = vnum + '%';
    player.style.height = stretchB + 'px';
    player.style.width = stretchS + 'px';
    sleep(sleeptime).then(() => { resetstretch(); });
    update();


    if (y + 2 == by ) {
        if (x == bx) {
            by += moveSpeed;
            boxupdate();
        }
    }
}

// Left
function left() {
    hnum -= moveSpeed;
    player.style.left = hnum + '%';
    player.style.height = stretchS + 'px';
    player.style.width = stretchB + 'px';
    sleep(sleeptime).then(() => { resetstretch(); });
    update();


    if (x == bx) {
        if (y == by) {
            bx -= moveSpeed;
            boxupdate();
        }
    }

    if (x == bx) {
        if (y - 2 == by) {
            bx -= moveSpeed;
            boxupdate();
        }
    }

    if (x == bx) {
        if (y + 2 == by) {
            bx -= moveSpeed;
            boxupdate();
        }
    }
}

// Right
function right() {
    hnum += moveSpeed;
    player.style.left = hnum + '%';
    player.style.height = stretchS + 'px';
    player.style.width = stretchB + 'px';
    sleep(sleeptime).then(() => { resetstretch(); });
    update();


    if (x == bx) {
        if (y - 2 == by) {
            bx += moveSpeed;
            boxupdate();
        }
    }

    if (x == bx) {
        if (y == by) {
            bx += moveSpeed;
            boxupdate();
        }
    }

    if (x == bx) {
        if (y + 2 == by) {
            bx += moveSpeed;
            boxupdate();
        }
    }
    
}