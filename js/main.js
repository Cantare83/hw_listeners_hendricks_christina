//This event listens for a mouseover and then changes the reese's //image to the peanut butter patties image.

var image = document.images[0];

function changeImage() {
    image.setAttribute('src', 'img/pb_patties.jpg');
}

image.addEventListener('mouseover', changeImage);
