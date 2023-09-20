// Assignment Code
var generateBtn = document.querySelector("#generate");

//character sets
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  //password length check

var passLength = prompt("How long do you want your password to be? Input a number from 8 to 128.");


console.log(passLength);

if (passLength < 8) {
  alert("Password is too short! Enter a number equal to or greater than 8.");
  return" ";
}
if (passLength > 128) {
  alert("Password is too long! Enter a number equal to or less than 128.");
  return " ";
}
if (isNaN(passLength)) {
  alert("Please enter a valid number between 8 and 128.")
}

//check criteria

var checkUpper = window.confirm("Do you want to include uppercase letters in your password?");
var checkLower = window.confirm("Do you want to include lowercase letters in your password?");
var checkNumbers = window.confirm("Do you want to include numbers in your password?");
var checkSpecial = window.confirm("Do you want to include special characters in your password?");

//check if at least one character type is selected

valid = false;
while (valid === false){
  if(checkUpper === false && checkLower === false && checkNumbers === false && checkSpecial === false) {
    alert("Please confirm at least one character case and try again.");
    var checkUpper = window.confirm("Do you want to include uppercase letters in your password?");
var checkLower = window.confirm("Do you want to include lowercase letters in your password?");
var checkNumbers = window.confirm("Do you want to include numbers in your password?");
var checkSpecial = window.confirm("Do you want to include special characters in your password?");
  }
  else{
    valid=true;
  }
}


//generate password

var charSet = '';
if (checkUpper) charSet+=upperCase;
if (checkLower) charSet+=lowerCase;
if (checkNumbers) charSet+= numbers;
if (checkSpecial) charSet+= special;

var password = '';
for (i = 0; i < passLength; i++) {
  var randomSet = Math.floor(Math.random() * charSet.length);
  password += charSet.charAt(randomSet);
}
return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
