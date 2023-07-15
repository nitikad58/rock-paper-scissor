let userScore=0;
let compScore=0;
const user_score_span=document.getElementById("user-score");
const comp_score_span=document.getElementById("comp-score");
const score_board_div=document.querySelector(".score-board");
const result_p= document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


function getCompChoice(){
  const choices=['r','s','p'];
  const randomChoices=Math.floor(Math.random()*3);
  return choices[randomChoices];
}

function convertToWord(letter){
   if(letter==="r") return "Rock";
   if(letter==="p") return "Paper";
   return "scissors";
}

function win(userChoice, compChoice){
  const smallUserWord="user".fontsize(3).sub();
  const smallCompWord="comp".fontsize(3).sub();
 userScore++;
 user_score_span.innerHTML= userScore;
 comp_score_span.innerHTML= compScore;
 document.getElementById(userChoice).classList.add('green-glow');
 setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')} , 300);
 return result_p.innerHTML = convertToWord(userChoice)+ smallUserWord+" beats "+ convertToWord(compChoice)+ smallCompWord+". You win!";
}

function lose(userChoice, compChoice){
  const smallUserWord="user".fontsize(3).sub();
  const smallCompWord="comp".fontsize(3).sub();
 compScore++;
 user_score_span.innerHTML= userScore;
 comp_score_span.innerHTML= compScore;
 document.getElementById(userChoice).classList.add('red-glow');
 setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')} , 300);
 return result_p.innerHTML = convertToWord(userChoice)+ smallUserWord+" loses to "+ convertToWord(compChoice) +smallCompWord+". You lost!";
}

function draw(userChoice, compChoice){
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
document.getElementById(userChoice).classList.add('gray-glow');
setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')} , 300);
 return result_p.innerHTML = convertToWord(userChoice)+ smallUserWord+" equals "+ convertToWord(compChoice)+ smallCompWord+". It's a draw!";
}

function game(userChoice)
{
  const compChoice=getCompChoice();
  switch (userChoice + compChoice)
  {
     case "rs":
     case "pr":
     case "sp":
     win(userChoice, compChoice);
     break;
     case "rp":
     case "ps":
     case "sr":
      lose(userChoice, compChoice);
      break;
      case "rr":
      case "pp":
      case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main(){
rock_div.addEventListener('click', function(){
game("r");
}) ;

paper_div.addEventListener('click', function(){
game("p");
}) ;

scissor_div.addEventListener('click', function(){
game("s");
});
}

main();
