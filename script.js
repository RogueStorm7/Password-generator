// Assignment Code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numberOfChararcters = ['0','2','3','4','5','6','7','8','9'];
  var uppercaseCharacters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialCharacters = ['!','@','#','$','%','^','&','*',')','(','+','-','_','~','.','<','>','\\','?','/','=',';',':',',', '[',']','{','}', '  '];
  var possibleCharacters = [];
  
  // get input and validate
  numberOfCharacters = prompt ("how many characters do you want in your password? Please choose between 8-128 characters");
  if(numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt ("Please enter a valid number.")
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
