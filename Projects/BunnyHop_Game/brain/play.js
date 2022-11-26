//connecting the html character to js elements.
let character = document.getElementById("character");
let snake = document.getElementById("obstacle");
//This function will allow the user to control when the bunny character will jump to escape the snake.

function jump(){
    //accessing the class list of the character
    character.classList.add("animate");
    //setting a time interval to remove the class, so that the user will be able to click multiple times allowing the rabbit to escape whenever they encounter a snake.
    setTimeout(function(){
        character.classList.remove("animate");
    },900);
};
let eaten =setInterval (function(){
    //this will allow us to get the numerical value of the top and left of the characters. this will allow us to figure out if the two are colliding ontop of each other.
   let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));

   let snakeLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

   if(snakeLeft < 250 && snakeLeft > 162 && characterTop >= 450){
    obstacle.style.animation ="none";
    obstacle.style.display = "none";
    alert("You have been eaten!")
    //the lines below are to check where the characters overlap.
    console.log(characterTop);
    console.log(snakeLeft);
   }
}, 10);