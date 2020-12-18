// Array of special characters to be included in password
var special = ['@', '%', '+', '\\', '/', "'", '!','#','$','^','?',':',',',')','(','}', '{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lower = ['a','b','c','d','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y','Z'];


var answer = [];

var specialChosen;
var lowerChosen;
var upperChosen;
var numericChosen;

var arrayPlaceholder;

//var confirmation;


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

  var quantity = parseInt(prompt("Choose from 8 to 128 characters"));
// If statement that will check if the user input something or if it was the correct parameter of what was specified
  if (!quantity){
    alert("Need to input values");
  }
// else if statement defining 
  else if (quantity < 8 || quantity > 128){
    confirm("Input based on the parameters given");

  }

  else{

    specialChosen = confirm("Will this contain special characters?");
    upperChosen = confirm("Will this contain uppercase letters?");
    lowerChosen = confirm("Will this contain lowercase letters?");
    numericChosen = confirm("Will this contain numbers?");

  }

  if (!specialChosen, !upperChosen, !lowerChosen, !numericChosen){
    alert("Must choose a at least one criteria");
  }
//accounts for everything
  else if (specialChosen && upperChosen && lowerChosen && numericChosen){
    arrayPlaceholder = special.concat(upper, lower, numeric);
  }
// special,upper and lower
  else if (specialChosen && upperChosen && lowerChosen){
    arrayPlaceholder = special.concat(upper, lower);
  }
//special, numeric, lower
  else if (specialChosen && numericChosen && lowerChosen){
    arrayPlaceholder = special.concat(numeric, lower);
  }
 //special upper, numeric
  else if (specialChosen && upperChosen && numericChosen){
    arrayPlaceholder = special.concat(upper, numeric);
  }
// special, numeric
  else if (specialChosen && numericChosen){
    arrayPlaceholder = special.concat(numeric);
  }
// special upper
  else if (specialChosen && upperChosen){
    arrayPlaceholder = special.concat(upper);
  }
// special lower
  else if (specialChosen && lowerChosen){
    arrayPlaceholder = special.concat(lower);
  }
//special
  else if (specialChosen){
    arrayPlaceholder = special;
  }

  //Start Upper if elses

// upper, lower, numeric
  else if (lowerChosen && numericChosen){
    arrayPlaceholder = upper.concat(lower,numeric);
  }
// upper lower
  else if (upperChosen && lowerChosen){
    arrayPlaceholder = upper.concat(lower);
  }
//upper numeric
  else if (numericChosen){
    arrayPlaceholder = upper.concat(numeric);
  }
//upper
  else if (upperChosen){
    arrayPlaceholder = upper;
  }
// start of lowers

//lower numeric
  else if (lowerChosen && numericChosen){
    arrayPlaceholder = upper.concat(lower,numeric);
  }
// lower
  else if (lowerChosen){
    arrayPlaceholder = lower;
  }
//numeric
  else if (numericChosen){
    arrayPlaceholder = numeric;
  }



  for (var i = 0; i < quantity; i++){

    var random = arrayPlaceholder[Math.floor(Math.random() * arrayPlaceholder.length)];
      answer.push(random);
      console.log(random);

  }
    var password = answer.join("");
    
    return password;


  }

 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





