//pulls in data from the DOM.
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//This is an index to keep track of the active steps
let currentActive = 1;

// eventlistener functions add one to the currentActive varialbe when the buttun is cliked but if statement keeps it from passing the amount of steps.
next.addEventListener('click', () =>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    circles.forEach((circle, inx) =>{
        if(inx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    //This enables the progress line to move to the progress circles
    progress.style.width = (actives.length -1)/(circles.length - 1) * 100 + '%'
    //this conditional will change the state of the prev and next button
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}