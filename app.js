const container = document.querySelector('container');

for (i = 0, i < 16, i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

}

var menu = document.querySelectorAll('.menu');
var listItem = document.createElement('li');

for (var i=0; i < menu.length; ++i) {
    menu[i].appendChild(listItem.cloneNode());
    // or menu[i].appendChild(document.createElement('li'));
    // the point is, you'll have to create a new element and append it
}