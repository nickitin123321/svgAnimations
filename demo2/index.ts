//const div = document.querySelector('.container');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '150px');
svg.setAttribute('height', '150px');

const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('width', '100');
rect.setAttribute('height', '100');
rect.setAttribute('x', '25');
rect.setAttribute('y', '25');
rect.setAttribute('fill', 'red');
document.body.appendChild(svg);
svg.appendChild(rect);

rect.classList.add('anirect');
// setTimeout(() => rect.classList.remove('anirect'), 6000);
