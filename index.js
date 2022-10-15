let correct = true
let range = 2
const userName = prompt("What is your username: ")
prompt("Welcome " + userName + ", Press Enter to start")

function guessTheNumber (range) {
  const variable = (Math.floor(Math.random() * range + 1))
  number = Number(prompt(
    `Guess a number among 1 ${(range < 3) ? "and" : "to" } ${range} : `
  ))
  let points = range - 1
  if( number === variable) {
    console.log(`Correct, you have ${points} point${points=== 1 ? "" : "s"}`)
  } else {
    correct=false
    console.log(`Wrong, your score is ${points-1}`)
    console.log("Do you want to play again?")
    let decision = prompt("Enter Y/N")
    if(decision.toLowerCase() == "y"){
      correct=true;
      range = 2
      game(range);
    }else if(decision.toLowerCase() == "n"){
      console.log("Thanks for playing")
    }else{
      console.log("Enter a correct letter")
    }
    
  }
  
}
function game(range = 2){
    while(correct){
    guessTheNumber(range)
    range++
  }
}

game()

