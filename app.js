// a method to populate the container
function populateBoard (size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'whitesmoke';
        square.classList.add('hover-effect');
        container.insertAdjacentElement('beforeend', square);
    }

}

populateBoard(16);

function changeSize (input) {
    populateBoard(input);
}


 


