// setting up global variables

const form = document.getElementById("form");
const fname = document.getElementById("form__fname");
const lname = document.getElementById("form__lname");
const email = document.getElementById("form__email");
const password = document.getElementById("form__password");
const button = document.getElementById('btn')
//functions for form validation
  function validateForm(){
    validateFname();
    validateLname();
    validateEmail();
    validatePassword();
  }

 //checking that First Name input is not empty
  function validateFname() {
  const errorTextFname = document.getElementById('error__fname');
  const firstName = fname.value;
  const formFirstName = document.getElementById('form__fname');
  if (firstName === "") {
    errorTextFname.style.visibility = "visible";
    formFirstName.style.borderColor = "red";
    formFirstName.style.backgroundImage = "url(images/icon-error.svg)";
    formFirstName.style.backgroundRepeat = "no-repeat";
    formFirstName.style.backgroundPosition = "90% 50%";

  } 
 
}
 
  //checking that Last Name imput is not empty
  function validateLname() {
    const errorTextLname = document.getElementById('error__lname');
    const lastName = lname.value;
    const formLastName = document.getElementById("form__lname");

    if (lastName === "") {
      errorTextLname.style.visibility = "visible";
      formLastName.style.borderColor = "red";
      formLastName.style.backgroundImage = "url(images/icon-error.svg)";
      formLastName.style.backgroundRepeat = "no-repeat";
      formLastName.style.backgroundPosition = "90% 50%";
    }
  
  }
//validating Email address
function validateEmail(){
  const errorTextEmail = document.getElementById('error__email');
  const formEmail = document.getElementById('form__email');
  const email = formEmail.value;
  if(email === "" || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    errorTextEmail.style.visibility = "visible";
    formEmail.style.borderColor = "red";
    formEmail.style.backgroundImage = "url(images/icon-error.svg)";
    formEmail.style.backgroundRepeat = "no-repeat";
    formEmail.style.backgroundPosition = "90% 50%";
  }
}

//validating Password
function validatePassword() {
  const errorPassword = document.getElementById("error__password");
  const formPassword = document.getElementById("form__password");
  const password = formPassword.value;
    if(password === "" || password.length < 5) {
      errorPassword.style.visibility = "visible";
      formPassword.style.borderColor = "red";
      formPassword.style.backgroundImage = "url(images/icon-error.svg)";
      formPassword.style.backgroundRepeat = "no-repeat";
      formPassword.style.backgroundPosition = "90% 50%";
    }
}


//functions for removing error messages

function onChangeFname() {
    const errorTextFname = document.getElementById('error__fname');
    const formFirstName = document.getElementById('form__fname');
    errorTextFname.style.visibility = "hidden";
    formFirstName.style.borderColor = "rgba(0, 0, 0, 0.1)";
    formFirstName.style.backgroundImage = "none";
}

function onChangeLname() {
  const errorTextLname = document.getElementById('error__lname');
  const formLastName = document.getElementById('form__lname');
  errorTextLname.style.visibility = "hidden";
  formLastName.style.borderColor = "rgba(0, 0, 0, 0.1)";
  formLastName.style.backgroundImage = "none";
}

function onChangeEmail() {
  const errorTextEmail = document.getElementById('error__email');
  const formEmail = document.getElementById('form__email');
  const email = formEmail.value;
  if(email != "" && email.indexOf("@") > -1 && email.indexOf(".") > -1 && email.length > 5) {
    errorTextEmail.style.visibility = "hidden";
    formEmail.style.borderColor = "rgba(0, 0, 0, 0.1)";
    formEmail.style.backgroundImage = "none";
  }
}

function onChangePassword() {
  const errorPassword = document.getElementById("error__password");
  const formPassword = document.getElementById("form__password");
  const password = formPassword.value;
  errorPassword.style.visibility = "hidden";
  formPassword.style.borderColor = "rgba(0, 0, 0, 0.1)";
  formPassword.style.backgroundImage = "none";
  
}