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

console.log('a:nth-of-type(1)')




//    (2) design interaction  //
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', rotate)

function rotate () {
  design.classList.toggle('rotate')
}


console.log('a:nth-of-type(2)');



//     (3) & interaction      //
let and  = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', slide)
// and.addEventListener('animationed', slide)

function slide() {
  and.classList.toggle('slide')
}

console.log('a:nth-of-type(3)')





//       (4) development interaction     //
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', rotate2)
development.addEventListener('animationend', rotate2)

function rotate2() {
  development.classList.toggle('rotate2')
}

console.log('a:nth-of-type(4)')




//        (5) Sprint 5 interaction         //
let sprint5 = document.querySelector('a:nth-of-type(5)') 

// sprint5.addEventListener('click', expand)
// sprint5.addEventListener('animationend', expand)


// //    MOUSEDOWN FUNCTION    //

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

function expand() {
  sprint5.classList.toggle('expand')
}

console.log('a:nth-of-type(5)')





  //             (6)  fix interaction       //
// let fix = document. querySelector('a:nth-of-type(6)')

// fix.addEventListener('click', disappear)
// fix.addEventListener('animationend', disappear)


// function disappear() {
//   fix.classList.toggle('disappear')
// }

// console.log('a:nth-of-type(6)')
//     HOVER FUNCTION     //

let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener('animationend', disappear)

fix.addEventListener("mouseover", hovered, false);
fix.addEventListener("mouseout", hoveredOut, false);

function hovered(e) {
    console.log("Hovered!");
}

function hoveredOut(e) {
    console.log("Hovered Away!");
}

function disappear() {
  fix.classList.toggle('disappear')
}
console.log('a:nth-of-type(6)')



//            (7) the interaction            //
// let the = document.querySelector('a:nth-of-type(7)')

// the.addEventListener('click', dimensional)
// the.addEventListener('animationend', dimensional)

// function dimensional() {
//   the.classList.toggle('dimensional')
// }

//         DOUBLE CLICK FUNCTION          //

let the = document.querySelector('a:nth-of-type(7)');

the.addEventListener('animationend', misformed)
the.addEventListener('dblclick', doSomething, false)

function doSomething(e) {
    console.log('Mouse clicked on something...twice!');
}

function misformed() {
  the.classList.toggle('misformed')
}

console.log('a:nth-of-type(7)')




//            (8) flow interaction            //
let flow = document.querySelector('a:nth-of-type(8)')

// flow.addEventListener('click', flying)
// flow.addEventListener('animationend', flying)

// function flying() {
//   flow.classList('flying')
// }



//           KEY PRESSDOWN             //
document.addEventListener("keydown", function(event) {
  if (event.key === "L" || event.code === "KeyL") {
    flow.classList.add("flying"); 
    console.log("Toets ingedrukt: L");
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "L" || event.code === "KeyL") {
    flow.classList.remove("landing");
    console.log("Toets losgelaten: L");
  }
});

console.log('a:nth-of-type(8)')















