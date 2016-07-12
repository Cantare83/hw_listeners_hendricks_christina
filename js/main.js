var firstHeader = document.getElementById('firstHeader');

function modifyHTML() {
    var newElement = document.createElement('p');
    newElement.innerHTML = '<p>This is click number x</p>';
    document.getElementsByTagName('body')[0].appendChild(newElement);
}

firstHeader.addEventListener('click', modifyHTML);
