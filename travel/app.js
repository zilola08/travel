// MEDIA QUERY 
const desktop = window.matchMedia('(min-width: 767px)');

// Refresh the page when the window size changes:

// LOGIN & SIGNUP POPUPS
// General Settings

const loginButton = document.querySelector('#login-button')
const loginPopup = document.querySelector('#login-popup')


// Showing popup when clicked on the LOGIN link inside the signup popup:
const loginLink = document.querySelector('#login-link')

loginLink.addEventListener('click', (e) => {
    setTimeout(() => {
        if (!loginPopup.classList.contains('shown') && signupPopup.classList.contains('shown')) {
            signupPopup.classList.remove('shown')
            loginPopup.classList.add('shown');
        }
    }, 25);
});
getFormDataLogin();


// Closing the pop-up when clicked outside:
const loginPopupContent = document.querySelector('.login-popup-content')
document.addEventListener("click", (e) => {
    // Get the element that was clicked
    const clickedEl = e.target;
    if (!loginPopupContent.contains(clickedEl) && loginPopup.classList.contains("shown")) {
        // `popupContent` is the element we're detecting clicks outside of
        loginPopup.classList.remove("shown");
    }
}
);


// SIGNUP POPUP
const signupLink = document.querySelector('#signup-link')
const signupPopup = document.querySelector('#signup-popup')

// Showing popup when clicked on the link inside the login popup:
signupLink.addEventListener('click', (e) => {
    setTimeout(() => {
        if (!signupPopup.classList.contains("shown")) {
            // Add class `show` to filterList element
            loginPopup.classList.remove("shown");
            signupPopup.classList.add("shown");
        }
    }, 25);
})
getFormDataSignup();


// Closing the pop-up when clicked outside:
const signupPopupContent = document.querySelector('.signup-popup-content')
document.addEventListener("click", (e) => {
    // Get the element that was clicked
    const clickedEl = e.target;
    if (!signupPopupContent.contains(clickedEl) && signupPopup.classList.contains("shown")) {
        // `popupContent` is the element we're detecting clicks outside of
        signupPopup.classList.remove("shown");
    }
}
)

// Collect form data in alert
function getFormDataLogin() {
    document.querySelector('.submit-data-login').addEventListener('click', function (e) {
        console.log('data submitted')
        e.preventDefault();
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;
        alert(`Email: ${email}, password: ${password}`);
    });
}

function getFormDataSignup() {
    document.querySelector('.submit-data-signup').addEventListener('click', function (e) {
        console.log('data submitted')
        e.preventDefault();
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;
        alert(`Email: ${email}, password: ${password}`);
    });
}

// SLIDER
// General Setings
const cards = document.querySelector('.cards');
const cardsArray = Array.from(document.querySelectorAll('.destination-img'))
const numberOfCards = cardsArray.length - 1;
const minIndex = 0;
const maxIndex = numberOfCards;
const dotsArray = Array.from(document.querySelectorAll('.dot'))
cards.style.left = '0px'

let sliderImgSize = - (cardsArray[0].offsetLeft - cardsArray[1].offsetLeft);
let initImgIndex = 1;
let currentImgIndex = initImgIndex;

const test = (a) => console.log(a)
// if (sliderImgSize >= 860) {
//     initImgIndex = 1;
// } else {
//     initImgIndex = 0;
// };
const boundIndexes = () => {
    if (currentImgIndex < minIndex) { currentImgIndex = minIndex }
    else if (currentImgIndex > maxIndex) { currentImgIndex = maxIndex }
}

const deleteAllActiveClass = () => {
    dotsArray.forEach(dot => {
        dot.classList.remove('active-dot')
    })
}

const addActiveClass = () => {
    dotsArray.forEach(dot => {
        if (dotsArray.indexOf(dot) == currentImgIndex) {
            dot.classList.add('active-dot');
        }
    })
}

// DESKTOP AND MOBILE SETTINGS:
window.onresize = function () { location.reload(); }

// Check the media query and choose the appropriate settings:
checkIfDesktop();
function checkIfDesktop() {
    if (desktop.matches) {
        // DESKTOP

        // SLIDER-DESKTOP

        const moveToLeft = () => { cards.style.left = `${parseInt(cards.style.left) + sliderImgSize}px` };
        const moveToRight = () => { cards.style.left = `${parseInt(cards.style.left) - sliderImgSize}px` };

        cardsArray.forEach(card => {
            card.addEventListener('click', (e) => {
                // console.log(cardsArray.indexOf(e.target))
                if (cardsArray.indexOf(e.target) == currentImgIndex) return

                else if (cardsArray.indexOf(e.target) < currentImgIndex) {
                    moveToLeft();
                    currentImgIndex--;
                }

                else if (cardsArray.indexOf(e.target) > currentImgIndex) {
                    moveToRight();
                    currentImgIndex++;
                }

                boundIndexes();
                deleteAllActiveClass();
                addActiveClass();
                console.log(cards.style.left, currentImgIndex)
            })
        })

        // LOGIN POPUP DESKTOP

        // Showing popup when clicked on the LOGIN button:
        loginButton.addEventListener('click', (e) => {
            setTimeout(() => {
                if (!loginPopup.classList.contains('shown')) {

                    loginPopup.classList.add('shown');
                }
                // console.log(loginPopup.classList)
            }, 25);
        });



    } else {
        // MOBILE
        // SLIDER MOBILE
        const rightArrowSlider = document.querySelector('.arrow-right-slider')
        const leftArrowSlider = document.querySelector('.arrow-left-slider')
        const arrowSliders = Array.from(document.querySelectorAll('.arrow-slider'))

        let widthOfCardSmall = 360;
        let cardGapSmall = 20;
        let leftLimitSmall = widthOfCardSmall + cardGapSmall;
        let rightLimitSmall = - (widthOfCardSmall + cardGapSmall)
        const moveToRightSmall = () => cards.style.left = `${parseInt(cards.style.left) - (widthOfCardSmall + cardGapSmall)}px`;
        const moveToLeftSmall = () => cards.style.left = `${parseInt(cards.style.left) + (widthOfCardSmall + cardGapSmall)}px`;
        const makeArrowPale = () => {
            if (currentImgIndex == minIndex) {
                leftArrowSlider.classList.add('end')
            } else if (currentImgIndex == maxIndex) {
                rightArrowSlider.classList.add('end')
            } else {
                arrowSliders.forEach(arrow => {
                    arrow.classList.remove('end')
                });
            }
        }


        rightArrowSlider.addEventListener('click', (e) => {
            moveToRightSmall();
            boundCardsSmall();
            currentImgIndex++;
            boundIndexes();
            deleteAllActiveClass();
            addActiveClass();
            makeArrowPale();

            console.log(cards.style.left, currentImgIndex, maxIndex);
        })

        leftArrowSlider.addEventListener('click', (e) => {
            moveToLeftSmall();
            boundCardsSmall();
            currentImgIndex--;
            boundIndexes();
            deleteAllActiveClass();
            addActiveClass();
            makeArrowPale();

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

        // BURGER MENU MOBILE

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

        // LOGIN POPUP MOBILE
        const loginButtonMobile = document.querySelector('.login-popup-link')

        // Showing popup when clicked on the ACCOUNT button in the burger menu:
        loginButtonMobile.addEventListener('click', (e) => {
            setTimeout(() => {
                if (!loginPopup.classList.contains('shown')) {

                    loginPopup.classList.add('shown');
                }
                // console.log(loginPopup.classList)
            }, 25);
        });


    }
}






