// Player Coords
let vnum = 50; // Vertical Number
let hnum = 50; // Horizontal Number
let x = hnum; // Player X
let y = vnum; // Player Y

// Goal Coords
let gx = 70;  // Goal X
let gy = 50;  // Goal Y

// Box Coords
let bx = 54;  // Box X
let by = 50;  // Box Y

// Coord Layouts
let coords = '(' + x + ',' + y + ')'; // Player Coordinate Display
let boxcoords = '(' + bx + ',' + by + ')'; // Box Coordinate Display
let goalcoords = '(' + gx + ',' + gy + ')'; // Goal Coordinate Display

player.style.top = vnum + '%'; // Set Player Top Style To vnum%
player.style.left = hnum + '%'; // Set Player Left Style To hnum%