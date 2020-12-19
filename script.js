// Array of special characters to be included in password
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// An empty array that will return anything pushed by the 
var answer = [];

// This group of arrays are used to confirm what parameters the user chose
var specialChosen;
var lowerChosen;
var upperChosen;
var numericChosen;

// This variable will store the paramaters chosen by the user a
var chosenCharacters;

// Create variable to select the id generate on our html (button)
var generateBtn = document.querySelector("#generate");

// This function will expect the display of the password using the variables below and using querySelector on the html <textarea> tag
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This function have a variable that will call another variable in which it will return a value
function generatePassword() {

  var options = getPasswordOptions();
  
  return options
}

function getPasswordOptions() {

  // Created a variable that it will prompta the user to choose and convert the value into an integer
  var quantity = parseInt(prompt("Choose from 8 to 128 characters"));
  // If statement that will check if the user input something or if it was the correct parameter of what was specified
  if (!quantity) {
    alert("Need to input values");
  }
  // This else if will verify if the user is entering the correct parameters for the quantity of characters.
  else if (quantity < 8 || quantity > 128) {
    alert("Input based on the parameters given");

  }
// The user will be have to choose what parameters he wants to define his password
  else {

    specialChosen = confirm("Will this password contain special characters?");
    upperChosen = confirm("Will this password contain uppercase letters?");
    lowerChosen = confirm("Will this password contain lowercase letters?");
    numericChosen = confirm("Will this password contain numbers?");

  }

// We create with if and else if all the choices needed to create the password at the users preference
  if (!specialChosen && !upperChosen && !lowerChosen && !numericChosen) {
    alert("Must choose  at least one criteria");
  }

  else if (specialChosen && upperChosen && lowerChosen && numericChosen) {
    chosenCharacters = special.concat(upper, lower, numeric);
  }

  else if (specialChosen && upperChosen && lowerChosen) {
    chosenCharacters = special.concat(upper, lower);
  }

  else if (specialChosen && numericChosen && lowerChosen) {
    chosenCharacters = special.concat(numeric, lower);
  }

  else if (specialChosen && upperChosen && numericChosen) {
    chosenCharacters = special.concat(upper, numeric);
  }

  else if (specialChosen && numericChosen) {
    chosenCharacters = special.concat(numeric);
  }

  else if (specialChosen && upperChosen) {
    chosenCharacters = special.concat(upper);
  }

  else if (specialChosen && lowerChosen) {
    chosenCharacters = special.concat(lower);
  }

  else if (specialChosen) {
    chosenCharacters = special;
  }

  else if (upperChosen && lowerChosen && numericChosen) {
    chosenCharacters = upper.concat(lower, numeric);
  }

  else if (upperChosen && lowerChosen) {
    chosenCharacters = upper.concat(lower);
  }

  else if (upperChosen && numericChosen) {
    chosenCharacters = upper.concat(numeric);
  }

  else if (upperChosen) {
    chosenCharacters = upper;
  }

  else if (lowerChosen && numericChosen) {
    chosenCharacters = upper.concat(lower, numeric);
  }

  else if (lowerChosen) {
    chosenCharacters = lower;
  }

  else if (numericChosen) {
    chosenCharacters = numeric;
  }
 /*This for loop will take the quantity of characters and it will loop throughout the arrays specified on the variable 
 chosenCharacter and generate a random password based on the length of characters we desire*/
  for (var i = 0; i < quantity; i++) {
    var random = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
    // The array we called answer will get every selection made by the random variable and push it to his array
    answer.push(random);
  }
// This variable password will return the array answer as a string using the .join method
  var password = answer.join("");

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







