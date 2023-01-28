// sketch logic

// const pixel = document.querySelector('.pixel')
// pixel.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'black';
// })

let gridValue = 16;
const mainContainer = document.querySelector('.container');

function drawGrid(gridValue) {
    // for loop 1
    for (let rowIndex = 0; rowIndex < gridValue; rowIndex++) {
        let gridRow = document.createElement('div');
        gridRow.classList.toggle('row');
        mainContainer.appendChild(gridRow);

        // for loop 2
        for (let squareIndex = 0; squareIndex < gridValue; squareIndex++) {
            let square = document.createElement('div');
            square.classList.toggle('pixel');
            square.addEventListener('mouseover', (e) => {
                    e.target.style.backgroundColor = 'black';
                })
            gridRow.appendChild(square);
        }       
    }
}