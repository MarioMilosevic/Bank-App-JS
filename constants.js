"use strict";

export const constants = () => {
  const welcomeBack = document.querySelector("#welcomeBack");
  const nameInput = document.querySelector("#nameInput");
  const passwordInput = document.querySelector("#passwordInput");
  const currentBalance = document.querySelector("#currentBalance");
  const navBtn = document.querySelector(".navBtn");
  const transactionsDiv = document.querySelector(".transactions");
  const transferToInput = document.querySelector("#transferTo");
  const transferAmountInput = document.querySelector("#transferAmount");
  const transferBtn = document.querySelector(".transferBtn");
  const loanInput = document.querySelector("#loan");
  const loanBtn = document.querySelector(".loanBtn");
  const transactions = document.querySelector('.transactions')
  const inValue = document.querySelector('.inValue') 
  const outValue = document.querySelector('.outValue') 
  const sortBtn = document.querySelector('.sort')
const container = document.querySelector('.container')
  return {
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
    transactions,
    inValue,
    outValue,
    sortBtn,
    container
  };
};
