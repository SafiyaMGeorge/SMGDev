const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//The line below represent whichever element is active depending on the step the user is on.
let activeStep = 1;

//Event listeners on each button listening for a click
next.addEventListener('click', () =>{
    //This function adds one to the current active step. So if the active step was two, when the user clicks next it will add one to that. This will make the now current active three. Essentially moving to the next step.
    activeStep++
    //The if statement ensures that the function does not go past the lenth of the cirlce class. There are only four elements with the circle class. Therefore the length is four.
    if(activeStep > circles.length){
        activeStep = circles.length
    }
    //once this function is called it will then call another function to update the DOM
    update()
})

//this is the reverse effect of the previous block
prev.addEventListener('click', () =>{
    //This function adds one to the current active step. So if the active step was two, when the user clicks next it will add one to that. This will make the now current active three. Essentially moving to the next step.
    activeStep--
    //The if statement sets the current active step to one if the current active is less than or equal to one. As one is there first step
    if(activeStep <= 1){
        activeStep = 1
    }
    console.log(activeStep)
    //once this function is called it will then call another function to update the DOM
    update()
})