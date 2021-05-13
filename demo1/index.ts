function createSvg(): void {
  const div = document.querySelector('.container');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '500');
  svg.setAttribute('height', '350');
  div?.appendChild(svg);
}
function createCircle(): void {
  const svg = document.querySelector('svg');
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', '30');
  circle.setAttribute('cx', '50');
  circle.setAttribute('cy', '50');
  circle.setAttribute('fill', 'orange');
  svg?.appendChild(circle);
}
function createCircleAnimate(): void {
  const animateCircle = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  const circle = document.querySelector('circle');
  animateCircle.setAttribute('attributeName', 'cx');
  animateCircle.setAttribute('from', '50');
  animateCircle.setAttribute('to', '450');
  animateCircle.setAttribute('dur', '4s');
  animateCircle.setAttribute('begin', 'click');
  animateCircle.setAttribute('repeatCount', '1');
  animateCircle.setAttribute('fill', 'remove');
  circle?.appendChild(animateCircle);
}
createSvg();
createCircle();
createCircleAnimate();
