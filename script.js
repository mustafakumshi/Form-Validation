"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank");
  } else if (usernameVal.length <= 4) {
    setErrorMsg(username, "Minimum 5 characters requiered");
  } else {
    setSuccessMsg(username);
  }

  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }

  if (phoneNumberVal === "") {
    setErrorMsg(phoneNumber, "Phone Number cannot be blank");
  } else if (phoneNumberVal.length !== 10) {
    setErrorMsg(phoneNumber, "Not a valid Phone Number");
  } else {
    setSuccessMsg(phoneNumber);
  }

  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Minimum 6 Characters");
  } else {
    setSuccessMsg(password);
  }

  if (confirmPasswordVal === "") {
    setErrorMsg(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordVal !== passwordVal) {
    setErrorMsg(confirmPassword, "Passwords do not Match");
  } else {
    setSuccessMsg(confirmPassword);
  }
};

function setErrorMsg(input, errormsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsg;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
