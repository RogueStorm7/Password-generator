// Code here
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
  console.log("Hey you clicked the button");

  //1.Prompt the user for the password criteria
  // a. password length 8 < 128
  // b. Uppercase, Lowercase, Numbers, Special characters
  // Validate the input.
  //3. Generate the password

  //4. Display password to the page.
  //return "Generated password will go here!"

  var numericChararcters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', ')', '(', '+', '-', '_', '~', '.', '<', '>', '\\', '?', '/', '=', ';', ':', ',', '[', ']', '{', '}', '  '];
  var possibleCharacters = [];
  var numberofChararcters;
  // get input and validate
  numberofChararcters = parseInt(prompt("How many characters do you want in your password? Please choose between 8-128 characters"));
  console.log(numberofChararcters, typeof numberofChararcters)
  if (numberofChararcters < 8 || numberofChararcters > 128) {
    return " Please choose a valid number of characters.";
  } else if (isNaN(numberofChararcters)) {
    return " Please enter a valid number";
  } else {
    alert(" Your password will be " + numberofChararcters + " characters long.");

    //}

    var hasLowercase = confirm(" Do you want lowercase characters?");
    // if (hasLowercase) {
    //   alert(" Your password will have lowercase characters.");
    // }
    // else {
    //   alert(" Your password will NOT be lowercase characters.");
    // }

    var hasUppercase = confirm(" Do you want uppercase characters? ");
    // if (hasUppercase) {
    //   alert("Your password will have uppercase characters.");
    // }
    // else {
    //   alert(" Your password will NOT have uppercase characters.");
    // }

    var hasNumbers = confirm(" Do you want to use numbers?");
    // if (hasNumbers) {
    //   alert(" Your password will have numbers.");
    // }
    // else {
    //   alert("Your password will NOT have numbers.")

    // }
    var hasSpecial = confirm("Do you want special characters?");
    // if (hasSpecial) {
    //   alert("Your password will have special characters.");
    // }
    // else {
    //   alert("Your password will NOT have special characters.");
    // }

    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return "Please select at least one character type.";
    };

    // get selected characters
    if (hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numericChararcters);
    }
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

    // pick random cards out of new pool for length of password
    let finalPassword = "";
    for (let i = 0; i < numberofChararcters; i++) {
      let rng = [Math.floor(Math.random() * possibleCharacters.length)];
      // or finalPassword += possiblrCharacters[rng];
      finalPassword = finalPassword + possibleCharacters[rng];
    }
    return finalPassword;
  };
}
// get referencess to the #generate element
//var generateBtn = document.querySelector("#generate");

// write password to the # password input
function writePassword() {
  console.log("try to writePassword")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}
//generate event listen
generateBtn.addEventListener("click", function () {
  writePassword();

})

function copyPassword() {
  document.getElementById("password").select();
  document.surroundContents()("Copy");
  alert("Password copied to clipboard!");
}