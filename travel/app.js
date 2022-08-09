// BURGER MENU FOR MOBILE

const burgerMenuIcon = document.querySelector('.navbar-collapse-menu-icon');

const burgerMenu = document.querySelector('.navbar-burger')

const closeIcon = document.querySelector('.closing-icon')

const burgerLink = document.querySelectorAll('.nav-burger-item')

burgerMenuIcon.addEventListener('click', (e) => {
    setTimeout(() => {
        burgerMenu.classList.toggle('shown');
    }, 0.01);
})

closeIcon.addEventListener('click', (e) => {
    setTimeout(() => {
        burgerMenu.classList.remove('shown')
    }, 0.01);
})

burgerLink.forEach(link =>
    link.addEventListener('click', (e) => {
        setTimeout(() => {
            burgerMenu.classList.remove('shown')
        }, 0.01);
    }
    ))

document.addEventListener('click', (e) => {
    const clickedPoint = e.target;
    if (!burgerMenu.contains(clickedPoint)) {
        burgerMenu.classList.remove('shown')
    }
})

// SLIDER
const cards = document.querySelector('.cards');
const cardsArray = Array.from(document.querySelectorAll('.destination-img'))
let sliderImgSize = - (cardsArray[0].offsetLeft - cardsArray[1].offsetLeft);
let initImgIndex = 1;
// if (sliderImgSize >= 860) {
//     initImgIndex = 1;
// } else {
//     initImgIndex = 0;
// };
let currentImgIndex = initImgIndex;
const numberOfCards = cardsArray.length;
const minIndex = 0;
const maxIndex = numberOfCards;

let test = () => {
    console.log('test')
}

const boundIndexes = () => {
    if (currentImgIndex < minIndex) {
        currentImgIndex = minIndex;
        console.log('index less than 0');
        console.log(`this is index in the bound function: ${currentImgIndex}`)
    }

    else if (currentImgIndex > maxIndex) {
        currentImgIndex = maxIndex;
        console.log('index greater than max');
        console.log(`this is index in the bound function: ${currentImgIndex}`)
    }
}

// MEDIA QUERY 

const Desktop = window.matchMedia('(min-width: 767px)');
checkMediaQuery();


function checkMediaQuery() {
    if (Desktop.matches) {

        // DESKTOP-VERSION

        const moveToLeftFirstClick = () => { cards.style.left = `${+sliderImgSize}px` };
        const moveToRightFirstClick = () => { cards.style.left = `${-sliderImgSize}px` };

        const moveToLeft = () => { cards.style.left = `${parseInt(cards.style.left) + sliderImgSize}px` };
        const moveToRight = () => { cards.style.left = `${parseInt(cards.style.left) - sliderImgSize}px` };


        cardsArray.forEach(card => {
            card.addEventListener('click', (e) => {
                // console.log(cardsArray.indexOf(e.target))
                if (cardsArray.indexOf(e.target) == currentImgIndex) return

                else if (cardsArray.indexOf(e.target) < currentImgIndex) {

                    if (!isNaN(parseInt(cards.style.left))) {
                        moveToLeft();
                        currentImgIndex--;
                        boundIndexes();
                        console.log(cards.style.left, currentImgIndex)
                    } else {
                        moveToLeftFirstClick();
                        currentImgIndex--;
                        boundIndexes();
                        console.log(cards.style.left, currentImgIndex)
                    }
                }

                else if (cardsArray.indexOf(e.target) > currentImgIndex) {
                    if (!isNaN(parseInt(cards.style.left))) {
                        moveToRight();
                        currentImgIndex++;
                        boundIndexes()
                        console.log(cards.style.left, currentImgIndex)
                    } else {
                        moveToRightFirstClick();
                        currentImgIndex++;
                        boundIndexes()
                        console.log(cards.style.left, currentImgIndex)
                    }
                }
            })
        })


    } else {


        // MOBILE

        const rightArrowSlider = document.querySelector('.arrow-right-slider')
        const leftArrowSlider = document.querySelector('.arrow-left-slider')
        cards.style.left = '0px'

        let widthOfCardSmall = 360;
        let cardGapSmall = 20;
        let leftLimitSmall = widthOfCardSmall + cardGapSmall;
        let rightLimitSmall = - (widthOfCardSmall + cardGapSmall)
        const moveToRightSmall = () => cards.style.left = `${parseInt(cards.style.left) - (widthOfCardSmall + cardGapSmall)}px`;
        const moveToLeftSmall = () => cards.style.left = `${parseInt(cards.style.left) + (widthOfCardSmall + cardGapSmall)}px`;


        rightArrowSlider.addEventListener('click', (e) => {
            moveToRightSmall();
            boundCardsSmall();
            currentImgIndex++;
            boundIndexes();
            console.log(cards.style.left, currentImgIndex);
        })

        leftArrowSlider.addEventListener('click', (e) => {
            moveToLeftSmall();
            boundCardsSmall();
            currentImgIndex--;
            boundIndexes();
            console.log(cards.style.left, currentImgIndex);
        })


        function boundCardsSmall() {

            if (parseInt(cards.style.left) > leftLimitSmall) {
                cards.style.left = `${leftLimitSmall}px`;
            }
            // -> the left boundary -> this stops the slider at the point where the last image is fully shown and slider cant move further left



            if (parseInt(cards.style.left) < rightLimitSmall) {
                cards.style.left = `${rightLimitSmall}px`;
            }
            // -> the right boundary -> this stops the slider at the point where the first image is fully shown and slider cant move further right

        }
    }
}






