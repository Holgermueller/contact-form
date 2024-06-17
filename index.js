"use strict";

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");

let radioVal;

const radios = document.querySelectorAll('input[name="query"]');
radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    radioVal = radio.value;
    return radioVal;
  });
});

const submitForm = () => {
  //Check if form is valid
  let checked = document.getElementById("consent").checked;

  if (firstName.value === "") {
    document.getElementById("firstNameError").style.display = "block";
  } else if (lastName.value === "") {
    document.getElementById("lastNameError").style.display = "block";
  } else if (email.value === "") {
    document.getElementById("emailError").style.display = "block";
  } else if (radioVal === undefined) {
    document.getElementById("fieldSetError").style.display = "block";
  } else if (message.value === "") {
    document.getElementById("messageError").style.display = "block";
  } else if (checked === false) {
    document.getElementById("consentError").style.display = "block";
  } else {
    console.log("success");
  }
};
