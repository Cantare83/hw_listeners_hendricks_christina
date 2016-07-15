//This event listens for a mouseover and then changes the reese's //image to the peanut butter patties image.

var image = document.images[0];

function changeImage() {
    image.setAttribute('src', 'img/pb_patties.jpg');
}

image.addEventListener('mouseover', changeImage);

//This event listens for a click on the first article's h2 and then //adds a paragraph to the end of the article.

var firstArticle = document.getElementById('firstArticleHead');

function addParagraph() {
    var newElement = document.createElement('p');
    newElement.innerHTML = '<p>Cupcake ipsum dolor sit amet danish powder topping carrot cake. Dragée cake jelly chocolate candy canes chocolate bar sugar plum gingerbread. Chocolate bar macaroon danish sesame snaps chocolate bar carrot cake jelly beans icing marzipan.</p>';
    document.getElementsByClassName('articles')[0].appendChild(newElement);
}

firstArticle.addEventListener('click', addParagraph);

//This event listens for a double click on the h1 and then gives //the h1 a class that changes the color of the text.

var header1 = document.getElementById('firstHeader');

function headerOne() {
    header1.className = 'blue';
}

header1.addEventListener('dblclick', headerOne);
