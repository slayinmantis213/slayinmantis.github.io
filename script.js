console.log("gday m8");

const toggleFlip = (elem) => {
    elem.classList.toggle('flipped');
}

const linkClick = (event) => {
    event.stopPropagation();
}