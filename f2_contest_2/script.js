function validateForm(){
    const emailinput = document.getElementById("email").value;
    const emailerror = document.getElementById("emailError");

    const isEmailValid = emailinput.length > 3 && emailinput.includes("@") && emailinput.includes(".");
    isEmailValid ? emailerror.style.display= "none" :  emailerror.style.display="block";

    const passwordInput = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const isPasswordValid = passwordInput.length > 8
    isPasswordValid ? passwordError.style.display = "none" : passwordError.style.display="block";

    formSuccess.style.display = (isEmailValid && isPasswordValid) ? "block" : "none";
}

function submitButton(event){
    event.preventDefault();
    const confirmSubmit = confirm("Do you want to submit the form?");
      if (confirmSubmit) {
        alert("Successful signup!");
      } else {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("emailError").style.display = "none";
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("formSuccess").style.display = "none";
      }
      return false
}