let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// (1) frontend interaction //
let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', scale)
frontend.addEventListener('animationend', scale)

function scale() {
  frontend.classList.toggle('scale')
}



//    (2) design interaction  //
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', rotate)

function rotate () {
  design.classList.toggle('rotate')
}


console.log('a:nth-of-type(2)');



//    & interaction      //
let and  = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', slide)
// and.addEventListener('animationed', slide)

function slide() {
  and.classList.toggle('slide')
}

console.log('a:nth-of-type(3)')





//      development interaction     //
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', rotate2)
development.addEventListener('animationend', rotate2)

function rotate2() {
  development.classList.toggle('rotate2')
}

console.log('a:nth-of-type(4)')




//         Sprint 5 interaction         //
let sprint5 = document.querySelector('a:nth-of-type(5)') // Verander dit naar het gewenste element
let isMouseDown = false;
let mousedownTimeout;

sprint5.addEventListener('mousedown', function () {
  isMouseDown = true;
  clearTimeout(mousedownTimeout);
  console.log('Mousedown event detected.');

  mousedownTimeout = setTimeout(function () {
    isMouseDown = false;
    expand();
    console.log('Expand class added.');
  }, 3000);
});

function expand() {
  mousedownElement.classList.toggle('expand');
}


  //               fix interaction       //
let fix = document. querySelector('a:nth-of-type(6)')


// // rotate js
// development.addEventListener('click', rotate2)
// development.addEventListener('animationend', rotate2)
// // development.addEventListener('mousedown', expand)

// function rotate2() {
//   development.classList.toggle('rotate2')
// }

// // expand js

// development.addEventListener('mousedown', expand)
// // development.addEventListener('animationend', expand)

// function expand() {
//   development.classList.toggle('expand')
// }



// // mousedown gpt
// let mousedownTimeout;

// development.addEventListener('mousedown', function() {
//   // Clear any previous timeout to avoid multiple executions
//   clearTimeout(mousedownTimeout);
  
//   // Set a timeout of 3000 milliseconds (3 seconds) to trigger the expand animation
//   mousedownTimeout = setTimeout(expand, 3000);
// });

// development.addEventListener('animationend', rotate2);

// function rotate2() {
//   development.classList.toggle('rotate2');
// }

// function expand() {
//   development.classList.toggle('expand');
// }
