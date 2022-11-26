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