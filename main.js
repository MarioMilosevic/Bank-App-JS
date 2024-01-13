"use strict";
import { initQuerySelectors } from "./initQuerySelectors";
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
let acc = "";
let sort = false;


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
} = initQuerySelectors();

accountManager.getAccounts().forEach((account) => {
  account.username = account.owner
    .toLowerCase()
    .split(" ")
    .map((word) => word[0])
    .join("");
});

navBtn.addEventListener("click", function () {
  const account = login(accountManager.getAccounts());
  welcomeBack.textContent = `Welcome back ${account.owner.split(' ')[0]}`;
  inValue.textContent = `${account.getDeposit()}$`
  outValue.textContent = `${account.getWithdrawal()}$`;
  currentBalance.textContent = `${account.getBalance()}$`
  // const sumDeposit = account.getDeposit();
  // inValue.textContent = `${sumDeposit}$`;
  // const sumWithdrawal = account.getWithdrawal();
  // const balance = sumDeposit - Math.abs(sumWithdrawal);
  // currentBalance.textContent = `${balance}$`;
});

const login = (accounts) => {
  accounts.forEach((account) => {
    if (
      account.username === nameInput.value &&
      account.pin === Number(passwordInput.value)
    ) {
      // container.classList.remove("hidden");
      showMovements(transactions, account.movements);
      acc = account;
    }
  });
  return acc;
};
sortBtn.addEventListener("click", function () {
  if (!sort) {
    showMovements(transactions, acc.sort());
    sort = true;
  } else {
    showMovements(transactions, acc.getAccountMovements());
    sort = false;
  }
});

// duplo vise moram imat na racunu od loan vrijednosti

loanBtn.addEventListener('click', function(){
  console.log(acc);
  console.log(loanInput.value);
  console.log(acc.getBalance());
  
  if (acc.getBalance() >= 2 * Number(loanInput.value)) {
    console.log("Loan approved!");
    // Add your additional logic or code that needs to be executed when the condition is true
  } else {
    console.log("Loan not approved.");
    // Optional: Code to be executed if the condition is false
  }
});


