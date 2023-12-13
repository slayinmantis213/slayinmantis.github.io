console.log("gday m8");

const toggleFlip = (elem) => {
    elem.classList.toggle('flipped');
}

const linkClick = (event) => {
    event.stopPropagation();
}

const trigger = document.getElementById('head');
const cursorShadow = document.querySelector('.cursor-shadow');

document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;

    cursorShadow.style.transform = `translate(${x - 70}px, ${y - 250}px)`;
});

trigger.addEventListener('mouseenter', function () {
    cursorShadow.style.opacity = 1;
});

// nav.addEventListener('mouseleave', function () {
//     setTimeout(() => {
        
//     }, 1s);
//     cursorShadow.style.opacity = 0;
// });