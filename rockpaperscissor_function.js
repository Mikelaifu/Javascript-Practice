const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb') {
      return userInput
    } else {
      console.log('Error')
    }
  }
  
  const getComputerChoice =() => {
  randomNumber =  Math.floor(Math.random(0,2));
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
                     }
  }
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "the game is a tie";
    };
    if (userChoice === 'rock') {
      if(computerChoice === 'scissors'){
        return "the user won";
      } else{
        return 'the computer won';
      }
    };
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return 'the user won'
      } else {
        return 'the computer won'
      }
    };
    
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock') {
        return "computer won!"
      } else {
        return 'You won'
      }
    };
    if (userChoice === 'bomb'){
      return 'you won significantly! '
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You throw ' + userChoice);
    console.log('computer throw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
    
  }
  playGame();
  
  
  
  
  