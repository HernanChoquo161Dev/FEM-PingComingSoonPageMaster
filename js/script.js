const textAlertEmail = document.querySelector(".auto-check__text-alert");
const sendEmail =  document.querySelector(".notify-mail__btn");
const inputEmail = document.querySelector(".auto-check__input");

const emailList = ["@gmail.com","@outlook.com"];
let activeAlert = false;

function alertVisible(textAlertEmail, inputEmail){
    textAlertEmail.classList.toggle("auto-check__text-alert--visible");
    inputEmail.classList.toggle("auto-check__input--alert");
}

function checkEmail(inputEmail, emailList){
    for(b = 0; b < emailList.length; b++){
        if(inputEmail.value.indexOf(emailList[b]) != -1){
            return true;
        }
    }
    return false;
}

sendEmail.addEventListener('click', function (event) {
    if(!checkEmail(inputEmail, emailList) && !activeAlert){
        alertVisible(textAlertEmail, inputEmail);

        activeAlert = true;
    }
    else{
        if(activeAlert){
            alertVisible(textAlertEmail, inputEmail);

            activeAlert = false;
        }
    }
});

inputEmail.addEventListener("input", function(event){
    if(inputEmail.value != "" && activeAlert){
        alertVisible(textAlertEmail, inputEmail);

        activeAlert = false;
    }
});