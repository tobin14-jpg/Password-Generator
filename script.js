// User input variables
var pLength;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;
var choices;


// All possible characters available
const upperChar = allCharArray(65, 90);
const lowerChar = allCharArray(97, 122);
const numberChar = allCharArray(48, 57);
const characterChar = allCharArray(33, 47).concat(allCharArray(58, 64)).concat(allCharArray(91, 96)).concat(allCharArray(123, 126));

// All characters available are put into an array through a function
function allCharArray(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Starting function to generate password
function generatePassword() {
  // Ask for user input
  pLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!pLength) {
    alert("Please pick a value"); 
  } else if (pLength < 8 || pLength > 128) {
    pLength = parseInt(prompt("You must choose between 8 - 128"));
    
 
  } else {
    confirmNumber = confirm("Would you like to include numbers?");
    confirmCharacter = confirm("Would you like to include special characters?");
    confirmUppercase = confirm("Would you like to include Uppercase letters?");
    confirmLowercase = confirm("Would you like to include Lowercase letters?");
};


    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");

  }
  
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = characterChar.concat(numberChar, upperChar, lowerChar);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = characterChar.concat(numberChar, upperChar);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = characterChar.concat(numberChar, lowerChar);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = characterChar.concat(lowerChar, upperChar);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numberChar.concat(lowerChar, upperChar);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = characterChar.concat(numberChar);

  } else if (confirmCharacter && confirmLowercase) {
      choices = characterChar.concat(lowerChar);

  } else if (confirmCharacter && confirmUppercase) {
      choices = characterChar.concat(upperChar);
  
  } else if (confirmLowercase && confirmNumber) {
      choices = lowerChar.concat(numberChar);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowerChar.concat(upperChar);

  } else if (confirmNumber && confirmUppercase) {
      choices = numberChar.concat(upperChar);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = characterChar;
  }
  else if (confirmNumber) {
      choices = numberChar;
  }
  else if (confirmLowercase) {
      choices = lowerChar;
  }
  
  else if (confirmUppercase) {
      choices = upperChar;
  };

password = []

// Random variable selection
for (var i = 0; i < pLength; i++) {
  var passwordChar = choices[Math.floor(Math.random() * choices.length)]
  password.push(String.fromCharCode(passwordChar))
}
return password.join("")
}



var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Adds the password into the text box 
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}






