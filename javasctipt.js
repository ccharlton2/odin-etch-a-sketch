// sketch logic

// const pixel = document.querySelector('.pixel')
// pixel.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'black';
// })

const mainContainer = document.querySelector('.container');
const drawButton = document.querySelector('.draw');
const gridDimensionInput = document.querySelector('.grid-value');

drawButton.addEventListener('click', () => {
    let gridDimensionInput = document.querySelector('.grid-value');
    let gridValue = getGridDimension(gridDimensionInput.value);

    if (parseInt(gridValue)) {
        drawGrid(gridValue);
    }
    else {
        alert(gridValue);
    }
});

function getGridDimension(input) {
// validate is number, trim, if blank space default 16
    if (input.trim() === '') {
        return 16;
    }
    else {
        let trimmedInput = input.trim();
        if (parseInt(trimmedInput)) {

            return +trimmedInput <= 70 ? trimmedInput : 'Value cannot be higher than 70!';
        }
        else {
            return 'No characters please!'
        }
    }
}

function drawGrid(gridValue) {
    mainContainer.textContent = '';
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