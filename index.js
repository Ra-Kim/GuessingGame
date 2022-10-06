let correct = true
let range = 2
const userName = prompt("What is your username: ")
prompt("Welcome " + userName + ", Press Enter to start")

function guessTheNumber (range) {
  const variable = (Math.floor(Math.random() * range + 1))
  number = Number(prompt(
    `Guess a number among 1 ${(range < 3) ? "and" : "to" } ${range} : `
  ))
  
  if( number === variable) {
    points = range - 1
    console.log(`Correct, you have ${points} point${points=== 1 ? "" : "s"}`)
  } else {
    correct = false
    console.log("Wrong, refresh to play again")
  }
  
}

while(correct){
  guessTheNumber(range)
  range++
}
