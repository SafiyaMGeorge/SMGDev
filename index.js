const userChoice = document.getElementById('user_choice');
const compChoice = document.getElementById('comp_choice');
const gameResults = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.btn');
const loader = document.getElementById('results_loader');
/*The lines above selects all the buttons in the game. This triggers all the functions and variable in this event listener to execute.*/

const userInfo = document.getElementById('user_info');
const userForm = document.getElementById('user_info_form');
const userName = document.getElementById('user_name');
const submitBtn = document.getElementById('submit');
let user;

//Scoreboard logic
let uScore = 0;
let aiScore = 0;
drawScore = 0;
let userScore = document.getElementById("u_score");
let compScore = document.getElementById("ai_score");
let draw =document.getElementById("d_score");

 function userScoreLogic(){
    uScore ++;
    userScore.innerHTML = uScore;
  };

 function aiScoreLogic(){
    aiScore ++;
    compScore.innerHTML = aiScore;
  }

  function drawScoreLogic(){
    drawScore ++;
    draw.innerHTML = drawScore;
  }

// The line below selects the html section that the avatar img will be displayed in.
  let avatarSection = document.getElementById('avatar_cir');
//This line below creates an html img element.
  let avatar = document.createElement('img');
//global function to inser images when user select avatar and when game decisoins are made.

//avatar styling
  let avatarStyle = `
    #avatar_cir{
  background-color:#BBA0CA;
  border-radius:50%;
  width:80px;
  height:80px;
  margin:5px 0 0 5px;
  display:flex;
  justify-content:center;
  align-items:center;
}`
  
  function avatarSource(imgUrl){
  avatar.src = imgUrl;
}
  function userAvatarChoice(){
// the two lines below seclect the html elements that holds the img src for the avatarselection.
  let avatarOp1 = document.getElementById('avatar_1');
  let avatarOp2 = document.getElementById('avatar_2');
  
//The if statements checks if the the first raido button is selected and if so assigns the src    for the appropriate image to the avatar variable.
  if(avatarOp1.checked){
      avatarSource(avatarOp1.value)
      console.log(avatarOp1.value)
  }
  else{
 // avatar.setAttribute('src', avatarOp2.value );
    avatarSource(avatarOp2.value)
    console.log(avatarOp2.value)
  }
}


/*Image that will appear when user wins
  const uWinAv1 = avatarSource('https://cdn-icons-png.flaticon.com/512/10006/10006143.png')
  const uWinAv2 = avatarSource('https://cdn-icons-png.flaticon.com/512/8669/8669821.png')
//Image that will appear when a draw occurs
  const drawAv1 = avatarSource('https://cdn-icons-png.flaticon.com/512/10006/10006130.png')
  const drawAv2 = avatarSource('https://cdn-icons-png.flaticon.com/512/8669/8669808.png')
//Image that will appear when user lose
  const uLoseAv1 = avatarSource('https://cdn-icons-png.flaticon.com/512/10006/10006137.png')
  const uLoseAv2 = avatarSource('https://cdn-icons-png.flaticon.com/512/8669/8669816.png')
  */
//This loop holds the logic for the game.
  choiceBtns.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
 //loading game choices
    function loading(){
      let loadingImg = document.createElement('img');
      loadingImg.src= "https://cdn-icons-png.flaticon.com/512/6729/6729743.png"
    }
//the line belows place the clicked button id value as the user's choice
  userChoice.innerHTML = e.target.id;
   
//The variable below calcutates a random number to help choose the computer's choices.
  let randomChoice = Math.floor(Math.random()*(3-1+1)) +1;
   
// The function below chooses the computer choice based off the random number from the random choice variable above. I placed the randomChoice variable outside the computer function so that it can also be used in the function to determine the game results.
    
   function computerSelection(){
    if(randomChoice == 1){
       compChoice.innerHTML = " Rock"
    }
   else if(randomChoice == 2){
      compChoice.innerHTML = " Paper"
    }
   else if(randomChoice == 3){
     compChoice.innerHTML = " Scissors"
   }
}
//The function below the game results based on the user's and computer's choices
    
    
    
  function determineResults(){
//Draws
  if(randomChoice == 1 && e.target.id == " Rock"){
    gameResults.innerHTML = " It's a draw!";
    drawScoreLogic();
  }
  else if(randomChoice == 2 && e.target.id == " Paper"){
    gameResults.innerHTML = " It's a draw!";
    drawScoreLogic();
  }
  else if(randomChoice == 3 && e.target.id == " Scissors"){
    gameResults.innerHTML = " It's a draw!";
    drawScoreLogic();
  }
  //User Wins
  else if(randomChoice == 1 && e.target.id == " Paper"){
    gameResults.innerHTML = " You Win!";
    userScoreLogic();
  }
  else if(randomChoice == 2 && e.target.id == " Scissors"){
    gameResults.innerHTML = " You Win!";
    userScoreLogic();
  }
  else if(randomChoice == 3 && e.target.id == " Rock"){
    gameResults.innerHTML = " You Win!";
    userScoreLogic();
  }
  //Computer Wins
  else if(randomChoice == 1 && e.target.id == " Scissors"){
    gameResults.innerHTML = " Computer Wins!";
    aiScoreLogic();
  }
  else if(randomChoice == 2 && e.target.id == " Rock"){
    gameResults.innerHTML = " Computer Wins!";
    aiScoreLogic();
  }
  else if(randomChoice == 3 && e.target.id == " Paper"){
    gameResults.innerHTML = " Computer Wins!";
    aiScoreLogic()
  }
}
 //Calls the two fumctions  
  computerSelection();
  determineResults();
}))

submitBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  
  //This variable stores the user input.
    user = userName.value;
  
  
  //The block of code below takes the the data the user inputted and displays it in the html.
  //This line creates the paragraph element in the DOM
    let name = document.createElement("p");
  
  
  //This line creates the text that will go in the paragraph element. The user variable stores      the user input, the name.
    let text = document.createTextNode('Welcome ' + user);
    name.appendChild(text);
  
  
  //This couple of lines enter the new created text into the DOM.
    let nameElement = document.getElementById('player_name');
    nameElement.appendChild(name);
  
  
  //call function that displays user avatar in html
    userAvatarChoice();
  
  //This line inputs the new html img element with is src link into the selected section in the html DOM.
    avatarSection.appendChild(avatar);
  
  //This block below creates the style element for the avatar cir and styles it.
    let avatarCirStyle = document.createElement('style');
      avatarCirStyle.innerText= avatarStyle;
      document.head.appendChild(avatarCirStyle);
  
  
  
    let popUp = document.getElementById('user_info_form');
  //This line removes the popup when the button is clicked.
    popUp.remove();
});

