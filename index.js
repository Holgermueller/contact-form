"use strict";

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let checked = document.getElementById("consent").checked;
let queryType = document.querySelectorAll('input[name="query"]:checked').value;

const submitForm = () => {
  let firstNameValue = queryType;

  console.log(firstNameValue);
};
