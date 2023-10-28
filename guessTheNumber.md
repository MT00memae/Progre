const computerNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

for (let attempts = 1; attempts <= 3; attempts++) {
  const userGuess = parseInt(prompt("Sisesta üks number 1-10-ni (katse " + attempts + "/3)"), 10);

  if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
    if (userGuess === computerNumber) {
      console.log("Yay! Arvasid õige numbri ära!");
      break; 
    } else if (Math.abs(userGuess - computerNumber) === 1) {
      console.log("Oops, sa olid väga lähedal!");
    } else {
      console.log("Sorry, " + userGuess + " ei ole õige number.");
    }
  } else {
    console.log("Palun sisesta kehtiv number vahemikus 1-10.");
  }

  if (attempts === 3) {

    computerNumber = generateRandomNumber();
    console.log("Uus juhuslik number on valitud.");
  }
}
