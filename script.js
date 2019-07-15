// Create Grid of divs

const container = document.querySelector('.container');
const gridArea = document.getElementById('grid');
let place = "";



function resetGrid() {
    let reset = document.getElementsByClassName('grid-column');
    for (let i = 0; i < reset.length; i++) {
        //reset[i].style.backgroundColor = "white";
        reset[i].classList.remove("colorIt");
    }
}

function createGrid(row, column) {
    let divno = 0;
    for (let r = 0; r < row; r++) {
        let rw = document.createElement('div');
        rw.className = "grid-row";

        rw.setAttribute('style', 'opacity: 0.3;height: 25px;width: 992px');
        divno++;
        for (let c = 0; c < column; c++) {
            let col = document.createElement('div');
            col.className = 'grid-column';
            col.setAttribute('id', "cell" + divno);
            col.setAttribute('onmouseover', "mouseOver(this)");

            col.setAttribute('style', 'opacity: 0.3;width: 60px;height: 25px');
            rw.appendChild(col);
            divno++;
        }
        gridArea.appendChild(rw);
    }


    return gridArea;
}


window.onload = createGrid(16, 16);

resetbtn = document.getElementById('clearbtn');
resetbtn.addEventListener('click', resetGrid);

function mouseOver(elem) {
    let place = (elem.id);
    console.log(place);
    addColor(place);
    return place;
}

function addColor(pixel) {

    pix = document.getElementById(pixel).classList.add('colorIt');
}