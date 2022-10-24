let color = 'black';


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
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'whitesmoke';
        container.insertAdjacentElement('beforeend', square);
    }

}

populateBoard(16);

function changeSize (input) {
    if (input >= 2 && input <= 100) {
    populateBoard(input);
    } else {
        console.log('error');
    }
}

function colorSquare() {
    if ((color === 'random')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

function changeColor(choice) {
    color = choice;
}
 function resetBoard() {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'whitesmoke');
 }
 


