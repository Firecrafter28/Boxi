face1.style.width = '23px'; // Face1 Width
face1.style.marginRight = '7px'; // Face1 Margin Right
face1.style.position = 'absolute'; // Face1 Position

// Face1
function faceone() {
    face1.style.visibility = 'visible'; // Show Face1
    face2.style.visibility = 'hidden'; // Hide Face2
}

// Face2
function facetwo() {
    face2.style.visibility = 'visible'; // Show Face2
    face2.style.scale = 0.8; // Set Face2 Scale
    face2.style.marginBottom = "5px"; // Set Face2 Margin Bottom

    face1.style.visibility = 'hidden'; // Hide Face1
}

// Hide Face
function hideface() {
    face1.style.visibility = 'hidden'; // Hide Face1
    face2.style.visibility = 'hidden'; // Hide Face2
}