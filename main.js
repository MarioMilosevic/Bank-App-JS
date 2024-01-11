"use strict";
import { constants } from "./constants";
import { data } from "./data";
import { transformName } from "./helpers";
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

const { account1, account2, account3, account4, accounts } = data();

accounts.forEach(account => {
    account.password = transformName(account.owner)
})

console.log(accounts);


navBtn.addEventListener('click', function(){
console.log('afhalk');
})



