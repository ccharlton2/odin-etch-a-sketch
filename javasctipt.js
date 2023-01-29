const mainContainer = document.querySelector('.container');
const drawButton = document.querySelector('.draw');
const gridDimensionInput = document.querySelector('.grid-value');
const modeSelectInputs = document.querySelectorAll('.mode-select > input');

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

modeSelectInputs.forEach((input) => {
    input.addEventListener('click', () => {
        mainContainer.textContent = '';
    });
});

function getGridDimension(input) {
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

    for (let rowIndex = 0; rowIndex < gridValue; rowIndex++) {
        let gridRow = document.createElement('div');
        gridRow.classList.toggle('row');
        mainContainer.appendChild(gridRow);

        for (let squareIndex = 0; squareIndex < gridValue; squareIndex++) {
            let square = document.createElement('div');
            let modeSelection = '';
            square.classList.toggle('pixel');

            square.addEventListener('mouseover', (e) => {
                if (e.buttons) {
                    modeSelection = getModeSelection();

                    switch (modeSelection) {
                        case 'normal':
                            e.target.style.backgroundColor = 'rgb(0, 0, 0)';
                            break;
                        case 'crazy':
                            e.target.style.backgroundColor = getRandomRgb();
                        break;
                        case 'etch':
                        
                        break;
                    
                        default:
                            e.target.style.backgroundColor = 'rgb(0, 0, 0)';
                            break;
                    }
                    if (modeSelection === 'normal') {
                        e.target.style.backgroundColor = 'rgb(0, 0, 0)';
                    }
                }
            })

            square.addEventListener('click', (e) => {
                modeSelection = getModeSelection();
                e.target.style.backgroundColor = 'rgb(0, 0, 0)';
            })
            gridRow.appendChild(square);
        }
    }
}

function getModeSelection() {
    const crazyRadio = document.getElementById('crazy');
    const etchRadio = document.getElementById('etch');

    if (crazyRadio.checked) {
        return 'crazy';
    }
    else if (etchRadio.checked) {
        return 'etch';
    }
    else {
        return 'normal';
    }
}

function getRandomRgb() {
    let red = generateRandomRgbValue();
    let green = generateRandomRgbValue();
    let blue = generateRandomRgbValue();

    return `rgb(${red}, ${green}, ${blue})`;
}

function generateRandomRgbValue() {
    return Math.floor(Math.random() * 255);
}