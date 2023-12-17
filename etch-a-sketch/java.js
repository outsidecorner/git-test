// Initialize the number of squares and the width of the container
let squareNumber = 60; // Number of squares
let divWidth = 960; // Width of the container (in pixels)

// Function to change the background color of a square on hover
function hoverColor(square) {
    // Get the current background color
    let oldColor = square.style['background-color'];
    let oldColorNum = parseInt(oldColor.slice(4, 7)); // Extract the numeric value of the color

    // Define parameters for color manipulation
    const darkenIncrement = 30; // Amount to darken the color
    const randomFactor = 20; // Random factor for color variation

    // Calculate the new color value
    let newColor;
    if (oldColorNum - darkenIncrement <= 0) {
        newColor = 0;
    } else {
        newColor = oldColorNum - darkenIncrement;
    }

    // Log information for debugging
    console.log('BG-color: ' + square.style['background-color']);
    console.log('BG-color #: ' + oldColorNum);
    console.log('New Color: ' + newColor);

    // Set the new background color with some random variation
    square.style['background-color'] = 'rgb(' +
        Math.floor(Math.random() * randomFactor + newColor) + ',' +
        Math.floor(Math.random() * randomFactor + newColor) + ',' +
        Math.floor(Math.random() * randomFactor + newColor) + ')';
}

// Function to create an individual etch-a-sketch square
function createEtchSquare(width, margin) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('etch-square'); // Add a CSS class for styling
    newSquare.style.cssText =
        'width: ' + width + '; height: ' + width + ';' +
        'margin: ' + margin + '; background-color: #FFFFFF;'; // Set square properties
    newSquare.addEventListener('mouseover', () => {
        hoverColor(newSquare); // Call hoverColor function on mouseover
    });
    return newSquare;
}

// Function to create a row of etch-a-sketch squares
function createEtchRow(container, squareNumber, squareInnerSize, squareMargin) {
    for (let i = 0; i < squareNumber; i++) {
        container.appendChild(createEtchSquare(squareInnerSize, squareMargin));
    }
}

// Function to create the entire etch-a-sketch grid
function createEtch(container, squareNumber, divSize) {
    let squareSize = divSize / squareNumber; // Calculate individual square size
    let squareMargin = 0.05 * squareSize; // Set margin between squares
    let squareInnerSize = 0.9 * squareSize; // Adjust inner size of each square

    for (let i = 0; i < squareNumber; i++) {
        createEtchRow(container, squareNumber, squareInnerSize, squareMargin);
    }
}

// Function to erase the entire etch-a-sketch grid
function eraseEtch(container) {
    squareList = container.querySelectorAll('.etch-square');
    for (let square of squareList) {
        square.remove();
    }
}

let container = document.getElementById('container');
let bodyContainer = document.getElementById('body');
let buttonGenerate = document.getElementById('buttonGenerate');

createEtch(container, squareNumber, divWidth);

/*bodyContainer.addEventListener('click', () => {
    eraseEtch(container);
    createEtch(container, squareNumber, divWidth);
})*/

buttonGenerate.addEventListener('click', () => {
    squareNumber = document.getElementById('number_squares').value;
    if(squareNumber > 200) {
        squareNumber = 200;
    }
    eraseEtch(container);
    createEtch(container, squareNumber, divWidth);
})