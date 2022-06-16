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
        activeStep = circles.length;
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
        activeStep = 1;
    }
    //once this function is called it will then call another function to update the DOM
    update()
})

function update(){
    circles.forEach((circle, index) => {
        //This if statement adds the active class to any circle, if the index of that circle is less than the current active circle element.
        if(index < activeStep){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });

    const active = document.querySelectorAll('.active');
    //The line below targets the width property of the progress line with the id of progress in the css page and updates the width percentage. This moves the line to the next step that is active once the user clicks the next button.
    //I subtracted one to achieve the correct percentage so that the line reaches the correct step.
    progress.style.width = (active.length -1)/(circles.length - 1)* 100 +'%'
    //the if statement block below handles the buttons disable function.
    if(activeStep === 1){
        prev.disabled = true;
    }
    else if(activeStep === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}