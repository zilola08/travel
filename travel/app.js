const burgerMenuIcon = document.querySelector('.navbar-collapse-menu-icon');

const burgerMenu = document.querySelector('.navbar-burger')

const closeIcon = document.querySelector('.closing-icon')

const burgerLink = document.querySelectorAll('.nav-burger-item')

burgerMenuIcon.addEventListener('click', (e) => {
    setTimeout(() => {
        burgerMenu.classList.add('shown')
    }, 25);
})

closeIcon.addEventListener('click', (e) => {
    setTimeout(() => {
        burgerMenu.classList.remove('shown')
    }, 25);
})

burgerLink.forEach(link =>
    link.addEventListener('click', (e) => {
        setTimeout(() => {
            burgerMenu.classList.remove('shown')
        }, 25);
    }
    ))

document.addEventListener('click', (e) => {
    const clickedPoint = e.target;
    if (!burgerMenu.contains(clickedPoint)) {
        burgerMenu.classList.remove('shown')
    }
})



