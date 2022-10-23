// a method to populate the container
let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16 , 1fr)';
container.style.gridTemplateRows = 'repeat(16 , 1fr)';

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'whitesmoke';
    square.classList.add('hover-effect');
    square.addEventListener('onmouseenter', changeColor);
    container.insertAdjacentElement('beforeend', square);
}

function changeColor(square) {
    square.style.backgroundColor = 'gray';
}

//add functionality to the reset button

const resetButton = document.querySelector('.reset-button');


function resetResolution () {
    prompt('Please input a number between 2 and 100.')
}

resetButton.addEventListener('click', resetResolution);

 


