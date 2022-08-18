const getEmail = document.getElementById("email");
const getMessage = document.getElementById("message");
const getSendButton = document.getElementById("send-button");
const getErrorEmail = document.getElementById("error-email");
const getErrorMessage = document.getElementById("error-message");
let validateEmail = false;
let validateMessage = false;

//funzione generica per controllo input
function validateInput(inputValue, regex, error) {
    const onlySpaceString = /^[ \ ]+$/;
    let returnError = false;
    if((!regex.test(inputValue) && inputValue.length > 0) || onlySpaceString.test(inputValue)){
        error.innerText = "Input error";
        returnError = false;
    } else if(inputValue.length === 0) {
        error.innerText = "Required field";
        returnError = false;
    } else {
        error.innerText = "";
        returnError = true;
    }
    return returnError;
}

//funzione per disattivare/abilitare bottone di invio
function enableButtonSend(validationMessage, validationEmail) {
    if(validationMessage && validationEmail) {
        getSendButton.removeAttribute("disabled");
    } else if((!validationMessage || !validationEmail) && !getSendButton.hasAttribute("disabled")) {
        getSendButton.setAttribute("disabled", "");
    }
}

//controllo email
function emailCheck() {
    const email = document.getElementById("email");
    const emailValue = email.value;
    const emailRegex = /^[_\-\.0-9a-zA-Z]+@[_\-\.0-9a-zA-Z]+\.[a-zA-Z]{2,7}$/;

    validateEmail = validateInput(emailValue, emailRegex, getErrorEmail);
    enableButtonSend(validateMessage, validateEmail);
}

//controllo messaggio
function messageCheck() {
    const message = document.getElementById("message");
    const messageValue = message.value;
    const messageRegex = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/; //ammette solo carratteri alfanumerici e alcuni cartteri speciali

    validateMessage = validateInput(messageValue, messageRegex, getErrorMessage);
    enableButtonSend(validateMessage, validateEmail);
}

/*svuota l'alert di errore input quando il cursore
abbandona la sezione del form (richiamata da html)*/
function resetFieldError() {
    getErrorEmail.innerText = "";
    getErrorMessage.innerText = "";
}

//validazione email
getEmail.addEventListener("keyup",emailCheck);
getEmail.addEventListener("blur", emailCheck);

//validazione messaggio
getMessage.addEventListener("keyup", messageCheck);
getMessage.addEventListener("blur", messageCheck);
