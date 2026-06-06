const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const display = document.getElementById("result-text");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  if (textInput.value == "") {
    display.textContent = `Enter texts`;
    return;
  }

  const text = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseText = text.split("").reverse().join("");

  if (text === reverseText) {
    display.textContent = `${textInput.value} is a palindrome`;
    display.style.color = "green";
  } else {
    display.textContent = `${textInput.value} is not a palindrome`;
    display.style.color = "orange";
  }
}

clearButton.addEventListener("click", clearValue);

function clearValue() {
  textInput.value = "";
}
