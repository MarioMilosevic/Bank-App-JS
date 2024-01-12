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
const accounts = [account1, account2, account3, account4];

const accountManager = new AccountManager();

accounts.forEach((account) => {
  accountManager.addAccount(account);
});

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
  inValue,
  outValue,
  sortBtn,
  transactions,
  container,
} = constants();

accountManager.getAccounts().forEach((account) => {
  account.username = account.owner
    .toLowerCase()
    .split(" ")
    .map((word) => word[0])
    .join("");
});

navBtn.addEventListener("click", function () {
  const account = login(accountManager.getAccounts());
  const sumDeposit = account.totalDeposit()
  inValue.textContent = `${sumDeposit}$`
  const sumWithdrawal = account.totalWithdrawal()
  outValue.textContent = `${sumWithdrawal}$`
});

const login = (accounts) => {
  let acc = "";
  accounts.forEach((account) => {
    if (
      account.username === nameInput.value &&
      account.pin === Number(passwordInput.value)
    ) {
      container.classList.remove("hidden");
      showMovements(transactions, account.movements);
      console.log(account);
      acc = account;
    }
  });
  return acc;
};
// treba da uzme od nekog od akaunta username i pasvord od tog unikatnog akaunta i samim tim da ucita njegov movement

// console.log(account1.movements);
console.log(accountManager.getAccounts());
