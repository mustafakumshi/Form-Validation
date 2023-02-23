"use strict";

// SYNTAX----------------------------
class DemoClass {
  //Constructor
  constructor() {
    //Constructor body
  }

  // instance field
  instanceField = "hello world";

  //instance method
  instanceMethod() {
    //body
  }

  //static field
  static staticField = "hello static";
  static staticMethood() {
    //body
  }

  //private fields
  #privateFields = "Abc@123";
}

// BANK EXAMPLE ----------------------
const dataBase = [
  { name: "roshan", password: "123", balance: "1000" },
  { name: "harry", password: "12", balance: "500" },
  { name: "abc", password: "1", balance: "100" },
];
class Bank {
  #userDetails = {};
  #isLoggedIn = false;
  login(name, password) {
    let ifUserExists = dataBase.find((user) => user.name === name);
    if (ifUserExists) {
      if (ifUserExists.password === password) {
        this.#userDetails = ifUserExists;
        this.#isLoggedIn = true;
      } else {
        alert("Password is not correct");
      }
    } else {
      alert("User does not exists");
    }
  }
  get getBalance() {
    if (this.#isLoggedIn) {
      return this.#userDetails.balance;
    } else {
      alert("Please login");
    }
  }
  set setBalance(newbalance) {
    if (this.#isLoggedIn) {
      this.#userDetails.balance = newbalance;
    } else {
      alert("Please login");
    }
  }
}
