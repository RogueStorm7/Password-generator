
//Code here
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
    numberOfCharacters = prompt ("Please enter a valid number.");
  }
   else {
     alert ("Your password will be" + numberOfCharacters + "characters long.");
  
    }


    hasLowercase = confirm ("Do you want lowercase characters?");
    if (hasLowercase)  {
      var turnLowercase = alert ("Your password will hace lowercase characters.");

      }
      else{
        alert("Your password will NOT be lowercase characters.");
      }

      if  (hasUppercase) {
        alert ("Your password will have uppercase characters.");

      }
      else {
        alert("Your password will NOT have uppercase characters.");
      }

      hasNumbers = confirm ("Do you want to use numbers?");
      if (hasNumbers) {
        alert ("Your password will have numbers.");
      }
        else {
          alert ("Your password will NOT have numbers.")

      }
        hasSpecial = confirm ("Do you want special characters?");
        if (hasSpecial) {
          alert ("Your password will have special characters.");
      }
        else {
          alert ("Your password will NOT have special characters.");
        }
        
        if ( hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false)  {
            return "Please select at least one character type.";

        };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
