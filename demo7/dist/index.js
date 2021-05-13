"use strict";
const div = document.querySelector('.container');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '100%');
svg.setAttribute('height', '100%');
const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('width', '100');
rect.setAttribute('height', '100');
rect.setAttribute('x', '0');
rect.setAttribute('y', '0');
rect.setAttribute('stroke', 'green');
rect.setAttribute('fill', 'green');
div === null || div === void 0 ? void 0 : div.appendChild(svg);
svg.appendChild(rect);
let coordX = 0;
let coordY = 0;
const v = 5;
function step(timestamp) {
    const object = document.querySelector('rect');
    coordX += v;
    const width = svg.getBoundingClientRect().width;
    const height = svg.getBoundingClientRect().height;
    if (coordX > width / 2) {
        object === null || object === void 0 ? void 0 : object.setAttribute('fill', 'black');
    }
    // const degrees = milliseconds * 0.36;
    object === null || object === void 0 ? void 0 : object.setAttribute('transform', `translate(${coordX})`);
    // object.style.transform = `translateX(${coordX}px)`;
    const id = window.requestAnimationFrame(step);
    // console.log(milliseconds);
    if (coordX > width - 100) {
        object === null || object === void 0 ? void 0 : object.setAttribute('fill', 'red');
        coordY += v;
        if (coordY > height / 2) {
            object === null || object === void 0 ? void 0 : object.setAttribute('fill', 'black');
        }
        object === null || object === void 0 ? void 0 : object.setAttribute('transform', `translate(${width - 100} ${coordY})`);
        if (coordY > height - 100) {
            window.cancelAnimationFrame(id);
        }
    }
}
window.requestAnimationFrame(step);
