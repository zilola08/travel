const sliderContainer = document.querySelector('.slider-container')

const cards = document.querySelector('.cards')

// keep track mouse-down & mouse-up
let isPressedDown = false;

// x horizontal space of cursor from inner container
let cursorXspace;

sliderContainer.addEventListener('pointerdown', (e) => {
    isPressedDown = true;
    cursorXspace = e.offsetX - cards.offsetLeft;

    // console.log(e.offsetX)
    // -> x-coordinate of cursor counting from the window most left point

    // console.log(cards.offsetLeft)

    // -> x-coordinate of the point where the cards-div starts

    // console.log(cursorXspace)
    // -> x-coordinate of cursor counting from the cards-div`s start

});

window.addEventListener('pointerup', () => {
    isPressedDown = false;
})

const firstImg = document.querySelector('.card:first-child')
const lastImg = document.querySelector('.card:last-child')


sliderContainer.addEventListener("pointermove", (e) => {
    if (!isPressedDown) return;
    // -> stops the function from executing if mouse is not pressed down
    e.preventDefault();
    // -> this stops the mouse on the screen from moving when the user moves the mouse

    cards.style.left = `${e.offsetX - cursorXspace}px`;
    //  -> this moves the cards-div to the x-position whcih is at wherever the mouse goes (e.offsetX) - distance between the start of the cards-div and the cursor (cursorXspace)

    boundCards();
    // this is to put the boundaries for the slider
    dots();
}
);

// Setting boundaries for the slider-movement

let numberOfCards = cards.childElementCount;
let widthOfCard = 800;
let cardGap = 60;
let leftOverlay = 530;
let sliderSize = (widthOfCard * numberOfCards) + (cardGap * (numberOfCards - 1));

let leftLimit = widthOfCard + cardGap;
let RightLimit = - (sliderSize - (widthOfCard + cardGap) - leftOverlay)


function boundCards() {

    if (parseInt(cards.style.left) > leftLimit) {
        cards.style.left = `${leftLimit}px`;
    }
    // -> the left boundary -> this stops the slider at the point where the last image is fully shown and slider cant move further left


    if (parseInt(cards.style.left) < RightLimit) {
        cards.style.left = `${RightLimit}px`;
    }
    // -> the right boundary -> this stops the slider at the point where the first image is fully shown and slider cant move further right
}
// }

const allDots = document.querySelectorAll(".dot");

const dots = () => {

    if (cards.offsetLeft >= ((widthOfCard + cardGap) / 2) && cards.offsetLeft <= (widthOfCard + cardGap)) {
        allDots[0].classList.add("active-dot");

        allDots[1].classList.remove("active-dot");

        allDots[2].classList.remove("active-dot");
    }

    else if (cards.offsetLeft >= -((widthOfCard + cardGap) / 2) && cards.offsetLeft <= ((widthOfCard + cardGap) / 2)) {
        allDots[1].classList.add("active-dot");

        allDots[0].classList.remove("active-dot");

        allDots[2].classList.remove("active-dot");
    }

    else if (cards.offsetLeft >= -(widthOfCard + cardGap) && cards.offsetLeft <= -((widthOfCard + cardGap) / 2)) {
        allDots[2].classList.add("active-dot");

        allDots[1].classList.remove("active-dot");

        allDots[0].classList.remove("active-dot");
    }
}

// LOGIN POPUP

const loginButton = document.querySelector('#login_button')
const popupEl = document.querySelector('#popup')


// Showing popup when clicked on the LOGIN button:

loginButton.addEventListener('click', (e) => {
    setTimeout(() => {
        if (!popupEl.classList.contains("shown")) {
            // Add class `show` to filterList element
            popupEl.classList.add("shown");
        }
    }, 250);
})

// Closing the pop-up when clicked outside:

const popupContent = document.querySelector('.popup-content')

document.addEventListener("click", (e) => {
    // Get the element that was clicked
    const clickedEl = e.target;
    // console.log(clickedEl);

    if (!popupContent.contains(clickedEl)) {
        // `popupContent` is the element we're detecting clicks outside of

        popupEl.classList.remove("shown");
        // console.log(popupEl.classList)
    }
}
)





