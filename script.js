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


var answer = [];

var hasSpecialCharacters;
var hasLowerCaseCharacters;
var hasUpperCaseCharacters;
var hasNumericCharacters;

var confirmation;


// Create variable to select the id generate on our html (button)
var generateBtn = document.querySelector("#generate");


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

  
  confirm("Create a password");

  var quantity = parseInt(prompt("Choose from 8 to 128 characters"));

  if (quantity >= 8 && quantity <= 128) {
    
       hasSpecialCharacters = confirm("Click ok to confirm special characters");
       hasNumericCharacters = confirm("Click ok to confirm numeric characters");
       hasLowerCaseCharacters = confirm("Click ok to confirm lower case characters");
       hasUpperCaseCharacters = confirm("Click ok to confirm upper case characters");

    for (var i = 0; i < quantity; i++){
     
      var random = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      answer.push(random);
      console.log(random); 
    }

   
    var password = answer.join("");
  
    return password;

  }

  else {

    confirm("Invalid amount");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





