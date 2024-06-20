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
  let checked = document.getElementById("consent").checked;

  document.onkeyup = function () {
    let fNameError = document.getElementById("firstNameError");
    let fName = document.getElementById("firstName");
    if (fName.value.length === 0) return;
    fNameError.style.display = "none";
  };

  document.onkeyup = function () {
    let lNameError = document.getElementById("lastNameError");
    let lName = document.getElementById("lastName");
    if (lName.value.length === 0) return;
    lNameError.style.display = "none";
  };

  document.onkeyup = function () {
    let emailError = document.getElementById("emailError");
    let email = document.getElementById("email");
    if (email.value.length === 0) return;
    emailError.style.display = "none";
  };

  document.onkeyup = function () {
    let messageError = document.getElementById("messageError");
    let message = document.getElementById("message");
    if (message.value.length === 0) return;
    messageError.style.display = "none";
  };

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

const removeFieldsetError = () => {
  document.getElementById("fieldSetError").style.display = "none";
};

const removeConsentError = () => {
  document.getElementById("consentError").style.display = "none";
};
