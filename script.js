// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  var options = getPasswordOptions();
  return options

}

function getPasswordOptions() {

  confirm("Minimum characters for password is 8");
  var length = parseInt(prompt("How Many Characters"));
  if (length >= 8 && length <= 128) {
    var hasSpecialCharacters = confirm("Click ok to confirm special characters");
    
    
    var rando = Math.floor(Math.random() * length);

    return (specialCharacters[rando]);

  }
  else {

    confirm("Invalid amount");
  }

}

// var hasNumericCharacters = confirm("Click ok to confirm numeric characters");
// var hasLowerCaseCharacters = confirm("Click ok to confirm lower case characters");
// var hasUpperCaseCharacters = confirm("Click ok to confirm upper case characters");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


