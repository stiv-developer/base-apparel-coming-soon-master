
function sendEmail(){

    var inputEmail = document.getElementById("email");

    var content = inputEmail.closest(".content");

    var groupEmail = inputEmail.parentElement;

    var iconError = content.getElementsByClassName("icon-error");
    
    var spanError = content.getElementsByClassName("error-email");

    console.log(iconError);

    if(inputEmail.value.trim() == '' || !esEmailValido(inputEmail.value)){
        groupEmail.classList.add("border-error-input");
        for (var i = 0; i < iconError.length; i++) {
            iconError[i].style.display = "block";
        }

        for (var i=0; i < spanError.length; i++){
            spanError[i].style.display = "block";
        }
    } else{
        groupEmail.classList.remove("border-error-input");
        for (var i = 0; i < iconError.length; i++) {
            iconError[i].style.display = "none";
        }

        for (var i=0; i < spanError.length; i++){
            spanError[i].style.display = "none";
        }
    }

    // Clear focus from the input to avoid unintended border styling
    inputEmail.blur();
}

function esEmailValido(email){
    const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
}