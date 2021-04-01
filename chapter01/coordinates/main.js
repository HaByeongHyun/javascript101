'use strict';

function resultFun(x) {
  const positionLeft = x.clientX;
  const positionTop = x.clientY;

  document.getElementById('result').style.left = positionLeft - 10 + 'px';
  document.getElementById('result').style.top = positionTop - 10 + 'px';
}

if (document.addEventListener) {
  document.addEventListener('mouseover', resultFun);
}

// const mouseOver = document.querySelector('body');
// function drag() {
//   const rect = mouseOver.getBoundingClientRect();
//   console.log(rect);
// }

// mouseOver.addEventListener('mouseover', (event) => {});
