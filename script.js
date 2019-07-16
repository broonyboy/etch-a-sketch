//etch a sketch type project from Odin Project.

const container = document.querySelector('.container');
const gridArea = document.getElementById('grid');
let place = "";
let size = "";
let red = 0;
let green = 0;
let blue = 255;
let played = false;

play();

//main play function
function play() {
    console.log("in play");
    if (played == true) {
        resetGrid();
        played = false;
    } else {
        gridSize()
        played = true;
    }
}
// prompts for the size of the grid
function gridSize() {
    size = prompt("What size do you want the grid?");
    createGrid(size, size);

}
//recolours the grid if reset
function resetGrid() {
    let reset = document.getElementsByClassName('grid-column');
    for (let i = 0; i < reset.length; i++) {
        //reset[i].style.backgroundColor = "white";
        reset[i].style.backgroundColor = 'white';

    }
}
// removes the grid from the page when redraw grid button pressed
function removeGrid() {
    console.log("REDRAW");
    const list = document.getElementsByClassName("grid-row");
    for (let i = list.length - 1; 0 <= i; i--)
        if (list[i] && list[i].parentElement)
            list[i].parentElement.removeChild(list[i]);
    gridSize();
}

// Creates the grid of div's and allocates the attributes to rows/columns
function createGrid(row, column) {
    let divno = 0;
    let w = 960 / column;
    let h = 450 / row

    for (let r = 0; r < row; r++) {
        let rw = document.createElement('div');
        rw.className = "grid-row";
        rw.setAttribute('style', 'opacity: 0.3;width: 992px; height:' + h + 'px;');
        divno++;
        for (let c = 0; c < column; c++) {
            let col = document.createElement('div');
            col.className = 'grid-column';
            col.setAttribute('id', "cell" + divno);
            col.setAttribute('onmouseover', "mouseOver(this)");
            col.setAttribute('style', 'opacity: 0.3;height: ' + h + 'px;width: ' + w + 'px;');
            rw.appendChild(col);
            divno++;
        }
        gridArea.appendChild(rw);
    }
    return gridArea;
}

//Button Listeners

resetbtn = document.getElementById('clearbtn');
resetbtn.addEventListener('click', resetGrid);
redraw = document.getElementById('redrawGrid');
redraw.addEventListener('click', removeGrid);
change = document.getElementById('changeColor');
change.addEventListener('click', changeColor);

// Uses the onmouseover and identifies the id of the div mouseovered
function mouseOver(elem) {
    let place = (elem.id);
    console.log(place);
    addColor(place);
    return place;
}

// calculates the new color when button pressed
function changeColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return red, green, blue;
}

// adds the new color as an attribute to the cell
function addColor(pixel) {
    pix = document.getElementById(pixel).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}