const sliderContainer = document.querySelector('.slider-container')

const cards = document.querySelector('.cards')

// keep track mouse-down & mouse-up
let isPressedDown = false;

// x horizontal space of cursor from inner container
let cursorXspace;

sliderContainer.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXspace = e.offsetX - cards.offsetLeft;

    // console.log(e.offsetX)
    // -> x-coordinate of cursor counting from the window most left point

    console.log(cards.offsetLeft)

    // -> x-coordinate of the point where the cards-div starts

    // console.log(cursorXspace)
    // -> x-coordinate of cursor counting from the cards-div`s start

});

window.addEventListener('mouseup', () => {
    isPressedDown = false;
})
const firstImg = document.querySelector('.card:first-child')
const lastImg = document.querySelector('.card:last-child')

sliderContainer.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    // -> stops the function from executing if mouse is not pressed down

    e.preventDefault();
    // -> this stops the mouse on the screen from moving when the user moves the mouse

    cards.style.left = `${e.offsetX - cursorXspace}px`;
    //  -> this moves the cards-div to the x-position whcih is at wherever the mouse goes (e.offsetX) - distance between the start of the cards-div and the cursor (cursorXspace)

    boundCards();
    // this is to put the boundaries for the slider
}
);

function boundCards() {

    if (cards.offsetLeft < -1190) {
        cards.style.left = `-1190px`;
    }
    // -> the right boundary -> this stops the slider at the point where the first image is fully shown and slider cant move further right


    else if (cards.offsetLeft > 1180) {
        cards.style.left = `1180px`;
    }
    // -> the left boundary -> this stops the slider at the point where the last image is fully shown and slider cant move further left
}