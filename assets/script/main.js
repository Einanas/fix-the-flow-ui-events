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
and.addEventListener('animationed', slide)

function scale() {
  and.classList.toggle('slide')
}

console.log('a:nth-of-type(3)')