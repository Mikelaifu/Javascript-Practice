let raceNumber = Math.floor(Math.random()*1000);
let registerEarly = false
let runnerAge = 17

if (registerEarly !== true) {
  raceNumber += 1000
}

if (runnerAge > 18 && registerEarly === true){
  console.log("You will race at 9:30 am. ahd here is your racenumber : " + raceNumber )
} else if (runnerAge > 18 || registerEarly === true){
  console.log("You will race at 11:00 am. and here is your race number : " + raceNumber)
} else if (runnerAge <= 18 && registerEarly !== true) {
  console.log('You will race at 12:30 pm and here is your race number : ' + raceNumber)
} else {
  console.log("Please go see the registration deck.")
}