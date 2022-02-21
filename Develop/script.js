// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var empty = [];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|","}", "~","\\"];

var choosetypes = function () {
  while (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
      var passwordlength = window.prompt("Choose a NUMBER between 8 and 128 for the length of your desired password.");
      passwordlength = parseInt(passwordlength);
  }
  var confirmupper = window.confirm("Do you want to include UPPER CASE characters in your password?");
  if (confirmupper) {
      empty = empty.concat(upper);
      window.alert("Your password will include UPPER CASE characters.");
  } 
  else {
      window.alert("Your password will NOT have UPPER CASE characters.");
  }
  var confirmlower = window.confirm("Do you want to include LOWER CASE characters in your password?");
  if (confirmlower) {
      empty = empty.concat(lower);
      window.alert("Your password will include LOWER CASE characters.");
  } 
  else {
      window.alert("Your password will NOT have LOWER CASE characters.");
  }
  var confirmnum = window.confirm("Do you want to include NUMBERS in your password?");
  if (confirmnum) {
      empty = empty.concat(num);
      window.alert("Your password will include NUMBERS.");
  } 
  else {
      window.alert("Your password will NOT have NUMBERS.");
  }
  var confirmspecial = window.confirm("Do you want to include SPECIAL characters in your password?");
  if (confirmspecial) {
      empty = empty.concat(special);
      window.alert("Your password will include SPECIAL characters");
  } 
  else {
      window.alert("Your password will NOT have SPECIAL characters");
  }
  while (confirmupper != true && confirmlower != true && confirmnum != true && confirmspecial != true) {
      window.alert("You must choose at least one type of character in your password! Try again.");
      break;
  }
  return [passwordlength, confirmupper, confirmlower, confirmnum, confirmspecial];
};

var generatePassword = function () {
  var alltypes = choosetypes();
  var newpassword = "";
  for (var i = 0; i < alltypes[0]; i++) {
      newpassword += empty[Math.floor(Math.random() * empty.length)];
  }
  empty = [];
  return newpassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
