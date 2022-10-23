let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16 , 1fr)';
container.style.gridTemplateRows = 'repeat(16 . 1fr)';

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'whitesmoke';
    container.insertAdjacentElement('beforeend', square);
}