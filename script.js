//Creating variables for the elements that will interact.
const inputText = document.getElementById("text-input");
const btnCheck = document.getElementById("check-btn");
const resultText = document.getElementById("result");

// This function removes spaces and non alphanumeric characters(punctuation, spaces and symbols).
const functionClearInput = () => {
    let input = inputText.value.toLowerCase();
    let inputVerified = "";
    for (let i=0;  i<input.length; i++){
        if ((input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) || ((input.charCodeAt(i) > 47 && input.charCodeAt(i) < 58))){
            inputVerified += input[i];    
        }
    } 
    return inputVerified;
};

// This is the function that will check if the value is a palindrome.
const isPalindrome = () => {
    alertInputValue();
    const valueCheck = functionClearInput();
    let backwards = [];
    let finalWord = "";
    for (let i=0; i<valueCheck.length; i++){
        backwards.unshift(valueCheck[i]);
    }
    for (let i=0; i<backwards.length; i++){
        finalWord += backwards[i];
    }
    if (valueCheck === finalWord) {
        resultText.innerText = `${inputText.value} is a palindrome`;
    } else {
        resultText.innerText = `${inputText.value} is not a palindrome`;
    }
};

//This function alerts to enter an input.
const alertInputValue = () => {
    if (inputText.value === ""){
        alert("Please input a value");
    }
};
btnCheck.addEventListener("click", isPalindrome);
