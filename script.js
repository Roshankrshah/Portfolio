window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationItems.forEach(navigationItem => {
    navigationItem.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});


const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
});

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.content', {});
sr.reveal('.sde-img', {interval: 200});
//sr.reveal('.home__img', { delay: 400 });
sr.reveal('.media-icons', { interval: 200 });
sr.reveal('.input-box', { interval: 200 }); 
