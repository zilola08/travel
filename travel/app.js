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

const loginButton = document.querySelector('#login-button')
const loginPopup = document.querySelector('#login-popup')


// Showing popup when clicked on the LOGIN button:

loginButton.addEventListener('click', (e) => {
    setTimeout(() => {
        if (!loginPopup.classList.contains('shown')) {

            loginPopup.classList.add('shown');
        }
        // console.log(loginPopup.classList)
    }, 25);
});

// Showing popup when clicked on the LOGIN link insode the signup popup:
const loginLink = document.querySelector('#login-link')

loginLink.addEventListener('click', (e) => {
    setTimeout(() => {
        if (!loginPopup.classList.contains('shown') && signupPopup.classList.contains('shown')) {

            signupPopup.classList.remove('shown')
            loginPopup.classList.add('shown');
        }
        // console.log(loginPopup.classList)
    }, 25);
});
getFormDataLogin();


// Closing the pop-up when clicked outside:

const loginPopupContent = document.querySelector('.login-popup-content')



document.addEventListener("click", (e) => {
    // Get the element that was clicked
    const clickedEl = e.target;
    // console.log(clickedEl);

    if (!loginPopupContent.contains(clickedEl) && loginPopup.classList.contains("shown")) {
        // `popupContent` is the element we're detecting clicks outside of

        loginPopup.classList.remove("shown");
        // console.log(loginPopup.classList)

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
    // console.log(clickedEl);

    if (!signupPopupContent.contains(clickedEl) && signupPopup.classList.contains("shown")) {
        // `popupContent` is the element we're detecting clicks outside of

        signupPopup.classList.remove("shown");
        // console.log(popupEl.classList)
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







