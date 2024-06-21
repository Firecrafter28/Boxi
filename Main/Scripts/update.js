allowedpos = [
    4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 
   34, 36, 38, 40, 42, 44, 46, 48, 52, 54, 56, 58, 60, 62, 64, 
   66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 
   96, 98, 100
];

// Update
function update() {
    x = hnum; // Set X To Horizontal Number
    y = vnum; // Set Y To Vertical Number
    coords = '(' + x + ',' + y + ')'; // Set Player Coordinate Display Variable
    goalcoords = '(' + gx + ',' + gy + ')'; // Set Goal Coordinate Display Variable
    coorddisp.innerHTML = "Player: " + coords; // Set Player Coordinate Display
    goalcoorddisp.innerHTML = "Goal: " + goalcoords; // Set Goal Coordinate Display
    boxupdate(); // Update Box
}

// Update Box
function boxupdate() {
    box.style.top = by + '%'; // Set Box Top Style To BoxY%
    box.style.left = bx + '%'; // Set Box Left Style To BoxX%
    boxcoords = '(' + bx + ',' + by + ')'; // Set Box Coordinate Display Variable
    boxcoorddisp.innerHTML = "Box: " + boxcoords; // Set Box Coordinate Display
    
    // Check If The Box Is On The Goal
    if (bx == gx) { // Check If The Goal And Box Have The Same X Value
        if (by == gy) { // Check If The Goal And Box Have The Same Y Value
            // If Both Are True
            score += 1; // Add 1 To Score
            ScoreSound.play(); // Play The Score Sound
            scoredisp.innerText = "Score: " + score; // Set The Score Display
            goalupdate(); // Update Goal
        }
    }
}

// Move The Goal
function movegoal() {
    gx = getRandomInt(91); // Set The Goal's X Value To A Random Number
    gy = getRandomInt(95); // Set The Goal's Y Value To A Random Number
}

// Update Goal
function goalupdate() {
    movegoal(); // Move The Goal
    if (allowedpos.includes(gy)) { // Check If Random Y Position Is Valid (In AllowedPos)
        if (allowedpos.includes(gx)) { // Check If Random X Position Is Valid (In AllowedPos)
            goal.style.top = gy + '%'; // If Both Are Valid Set The Goal Top Style To GoalY%
            goal.style.left = gx + '%'; // If Both Are Valid Set The Goal Left Style To GoalX%
        }
    }
    if (!(allowedpos.includes(gx))) { // Check If Random Y Position Is Not Valid (Not In AllowedPos)
        goalupdate(); // If Not Valid, Update The Goal Again
    }
    if (!(allowedpos.includes(gy))) { // Check If Random X Position Is Not Valid (Not In AllowedPos)
        goalupdate(); // If Not Valid, Update The Goal Again
    }
    update(); // Update
}