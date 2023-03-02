// burger menu visibility and fucntionality
const burgerMenu = document.querySelector('.burger-menu');
let isMenuVisible = false;
burgerMenu.addEventListener('click', () => {
    menuVisibilityCheck();
});

const menuVisibilityCheck = () => {
    const burgerIcon = document.querySelector('.burger-menu a');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavList = document.querySelectorAll('.social-list li a');
    if (!isMenuVisible) {
        mobileNav.classList.remove('mobile-nav-invisible');
        mobileNav.classList.add('mobile-nav-visible');
        for (i = 0; i < mobileNavList.length; i++) {
            mobileNavList[i].classList.add('dark-menu');
        }
        burgerIcon.classList.add('dark-menu')
        isMenuVisible = true;
    } else {
        mobileNav.classList.remove('mobile-nav-visible');
        for (i = 0; i < mobileNavList.length; i++) {
            mobileNavList[i].classList.remove('dark-menu');
        }
        burgerIcon.classList.remove('dark-menu');
        isMenuVisible = false;

    }
}

const mobileSelectors = document.querySelectorAll('.mobile-nav-list li a');
mobileSelectors.forEach(selector => {
    selector.addEventListener('click', () => {
        menuVisibilityCheck();
    });
});


// hide scroll arrow 
const scrollArrow = document.querySelector(`.scrollArrow`);

const hideOrShowArrow = () => {
    const scrollPos = 20;
    let windowY = window.scrollY;
    if (windowY > scrollPos) {
        scrollArrow.style.display = `none`;
    } else {
        scrollArrow.style.display = `block`;
    }
}
window.addEventListener(`scroll`, hideOrShowArrow);

// add date in footer
const currentYear = new Date().getFullYear();
document.querySelector('.current-year').innerHTML = currentYear;

// alternating image and text on work cards
const workCards = document.querySelectorAll('.work-image');
workCards.forEach ( (card, index) => {
    if (index % 2 != 0) {
        card.classList.add('even-image-card');
    }
});

// properties for image carousel
const splide = new Splide( '.splide', {
    arrows: false,
    pagination: false,
    type : 'loop',
    focus : 'center',
    perPage: 2,
    breakpoints: {
        480: {
            perPage: 1,
            height: '50vh',
            width: '100%'
        },
    },
    autoScroll: {
    speed: 0.15,
    pauseOnHover : false,
    pauseOnFocus: false,
    },
    width : '100vw',
    heightRatio: 0.5,
    height: '80vh',
    reducedMotion: {
        autoScroll: {
            speed: 0.01,
            pauseOnHover : true,
            pauseOnFocus: true,
        },
    }

});
splide.mount(window.splide.Extensions);