"use strict";

export const showMovements = (parent, movements) => {
  parent.innerHTML = "";
  movements.forEach((movement, index) => {
    const mov = document.createElement("div");
    mov.classList.add('movementContainer')
    const movementType = movement > 0 ? "Deposit" : "Withdrawal";
    mov.innerHTML = `<div class="indexType"><span class="movementIndex">${index + 1}</span>
        <span class="movement movement-type-${movementType}">${movementType}</span></div>
        <span class="movementValue">${movement}$</span>`;
    parent.appendChild(mov);
  });
};

export const calculate = (account) => {
  account.getDeposit();
  account.getWithdrawal();
  account.calculateBalance();
};
