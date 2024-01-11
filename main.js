"use strict";
import { constants } from "./constants";
import { Account, AccountManager } from "./classes";
// import { data } from "./data";

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
const accountManager = new AccountManager()
accountManager.addAccount(account1)
accountManager.addAccount(account2)
accountManager.addAccount(account3)
accountManager.addAccount(account4)


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
} = constants();

// const { account1, account2, account3, account4, accounts } = data();

// accounts.forEach((account) => {
//   account.username = account.owner
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0])
//     .join("");
// });

navBtn.addEventListener("click", function () {
  login();
});

const login = (acc) => {
  if (acc.password === nameInput.value && acc.pin === passwordInput.value) {
    console.log(acc);
  }
};
