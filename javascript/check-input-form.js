const getEmail = document.getElementById("email");
const getMessage = document.getElementById("message");
const getSendButton = document.getElementById("send-button");
const getErrorEmail = document.getElementById("error-email");
const getErrorMessage = document.getElementById("error-message");
let validateEmail;
let validateMessage;

//funzione generica per controllo input
function validateInput(inputValue, regex, returnError, error) {
    if(!regex.test(inputValue) && inputValue.length > 0){
        error.innerText = "Input error!";
        returnError = true;
    } else if(inputValue.length === 0) {
        error.innerText = "Required field!";
        returnError = true;
    } else {
        error.innerText = "";
        returnError = false;
    }
    return returnError;
}

//funzione per disattivare/abilitare bottone di invio
function enableButtonSend() {
    if(!validateMessage && !validateEmail) {
        getSendButton.removeAttribute("disabled");
    } else if((validateMessage || validateEmail) && !getSendButton.hasAttribute("disabled")) {
        getSendButton.setAttribute("disabled", "");
    }
}

//controllo email
function emailCheck() {
    let email = document.getElementById("email");
    let emailValue = email.value;
    let emailRegex = /^[_\-\.0-9a-zA-Z]+@[_\-\.0-9a-zA-Z]+\.[a-zA-Z]{2,7}$/;
    let emailError = true;

    validateEmail = validateInput(emailValue, emailRegex, emailError, getErrorEmail);
    enableButtonSend();
}

//controllo messaggio
function messageCheck() {
    let message = document.getElementById("message");
    let messageValue = message.value;
    let messageError = true;
    let messageRegex = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/; //ammette solo carratteri alfanumerici e alcuni cartteri speciali

    validateMessage = validateInput(messageValue, messageRegex, messageError, getErrorMessage);
    enableButtonSend();
}

//validazione email
getEmail.addEventListener("keyup",emailCheck);
getEmail.addEventListener("blur", emailCheck);

//validazione messaggio
getMessage.addEventListener("keyup", messageCheck);
getMessage.addEventListener("blur", messageCheck);