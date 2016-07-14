var firstHeader = document.getElementById('firstHeader');
var counter = 0;

function modifyHTML() {
    var newElement = document.createElement('p');
    newElement.innerHTML = 'This is click number ' + ++counter;
    document.body.appendChild(newElement);
}

firstHeader.addEventListener('click', modifyHTML);
