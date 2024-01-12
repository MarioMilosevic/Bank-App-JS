"use strict";
import { constants } from "./constants";
import { Account, AccountManager } from "./classes";
import { showMovements } from "./helpers";

const account1 = new Account(
  "Mario Milosevic",
  [200, 450, -400, 3000, -650, -130, 70, 1300],
  1.2,
  1111
);

const account2 = new Account(
  "Milica Bugarski",
  [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  1.5,
  2222
);

const account3 = new Account(
  "Emily Grace Anderson",
  [200, -200, 340, -300, -20, 50, 400, -460],
  0.7,
  3333
);
const account4 = new Account("Ethan Miller", [430, 1000, 700, 50, 90], 1, 4444);
const accounts = [account1,account2,account3, account4]

const accountManager = new AccountManager()

accounts.forEach(account => {
    accountManager.addAccount(account)
})

const {
  welcomeBack,
  nameInput,
  passwordInput,
  currentBalance,
  navBtn,
  transactionsDiv,
  transferToInput,
  transferAmountInput,
  transferBtn,
  loanInput,
  loanBtn,
  transactions
} = constants();


accounts.forEach((account) => {
  account.username = account.owner
    .toLowerCase()
    .split(" ")
    .map((word) => word[0])
    .join("");
});

navBtn.addEventListener("click", function () {
  login(accountManager.getAccounts());
  console.log(nameInput.value)
  console.log(passwordInput.value)
  console.log('dugme');
});

const login = (accounts) => {
  accounts.forEach(account => {
    if(account.username === nameInput.value && account.pin === Number(passwordInput.value)){
      showMovements(transactions, account.movements)
      // return account
    }
  })
  }
  // treba da uzme od nekog od akaunta username i pasvord od tog unikatnog akaunta i samim tim da ucita njegov movement

// console.log(account1.movements);
  