const placeForBoxes = document.querySelector('div#boxes');
const renderBtn = document.querySelector('#controls>button[data-action="render"]');
const destroyBtn = document.querySelector('#controls>button[data-action="destroy"]');
const input = document.querySelector('#controls>input');

let userInput;

input.addEventListener('input', (e) => {
    userInput = event.currentTarget.value;
});

renderBtn.addEventListener('click', (e) => {
    const boxesToDraw = createBoxes(userInput);
    placeForBoxes.append(...boxesToDraw);
});

destroyBtn.addEventListener('click', (e) => {
    destroyBoxes();
});

function createBoxes(amount) {
    let boxes = [];
    let startSide = 30;
    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.style.width = startSide + 'px';
        box.style.height = startSide + 'px';
        startSide += 10;
        box.style.backgroundColor = getRandomRGB();
        boxes.push(box);
    }
    return boxes;
}

function destroyBoxes() {
    placeForBoxes.innerHTML = '';
}

function getRandomRGB() {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  

