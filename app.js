// a method to populate the container
let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16 , 1fr)';
container.style.gridTemplateRows = 'repeat(16 . 1fr)';

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'whitesmoke';
    container.insertAdjacentElement('beforeend', square);
}

//add functionality to the reset button

const resetButton = document.querySelector('.reset-button');

function resetResolution () {
    alert('placeholder for a prompt');
}

resetButton.addEventListener('click', resetResolution);


