// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // Call the generatePassword function to get a password
  var passwordText = document.querySelector("#password"); // Select the password input field

  if (password) {
    // Checks if the generated password is not an empty string
    passwordText.value = password; // Set the value of the password input field to the generated password
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// End OF STARTER CODE 


// Generate a random password based on user criteria
// Generate Password Function
function generatePassword() {
  var length = prompt("Enter the length of the password (8-128 characters):");

  // Validate the length input
  if (length < 8 || length > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return ""; // This return an empty string to indicate an error
  }
// CODE BLOCK VARIABLES
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected; indicates weather the user chooses no lowercase,no uppercase,no#,no S.Chars.
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    return ""; // Return an empty string to indicate an error
  }

  var charSet = "";

  // Define character sets based on selected types
  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz"; // Add lowercase characters to the character set
  }
  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Add uppercase characters to the character set
  }
  if (includeNumeric) {
    charSet += "0123456789"; // Add numeric characters to the character set
  }
  if (includeSpecial) {
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Add special characters to the character set
  }

  var password = "";

  // Generate password, charset by random selection, 
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password; // This will returns the generated password
}




/*Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)*/
