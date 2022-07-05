// Button call out
var generateBtn = document.querySelector("#generate");

// "click" to Intiate logic
generateBtn.addEventListener("click", writePassword);

// Character variable assignments for each character type
let lowerCaseArr = ["a", "b", "c"];
let upperCaseArr = ["A", "B", "C"];
let numArr = [1, 2, 3];
let symbolsArr = ["!", "@", "#"];

let passArr = [];
let newPasswrd = [];

//Function to generate character types
function generatePassword() {
  let charsNum = parseInt(prompt("How many characters would you like?"));

  let lowerCaseConfirm = confirm(
    "Do you want to include Lower Case Characters?"
  );
  let upperCaseConfirm = confirm(
    "Do you want to include Upper Case Characters?"
  );
  let numberConfirm = confirm("Do you want to include Numbers?");
  let symbolsConfirm = confirm("Do you want to include symbols?");

  if (charsNum >= 8 && charsNum <= 128) {
    if (lowerCaseConfirm) {
      // console.log(lowerConfirm);
      passArr = passArr.concat(lowerCaseArr);
    }

    if (upperCaseConfirm) {
      // console.log(upperConfirm);
      passArr = passArr.concat(upperCaseArr);
    }

    if (numberConfirm) {
      console.log(numberConfirm);
      passArr = passArr.concat(numArr);
    }

    if (numArr) {
      console.log(symbolsConfirm);
      passArr = passArr.concat(symbolsArr);
    }

    for (let i = 0; i < charsNum; i++) {
      newPasswrd = newPasswrd.concat(
        passArr[Math.floor(Math.random() * passArr.length)]
      );
    }

    console.log(newPasswrd);

    // Alert if amount of characters is not chosen within parameters set
  } else {
    alert("You must pick a lenght of characters bewtween 8 & 128!");
  }

  // The end product to submit password to text area
  return newPasswrd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword().join("");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// 1. Create generate password funtions
// 2. Prompts and Confrims to collect data
// 3. Function to creat main logic
// 4. Console data
// 5. Submit data to be shown
