"use strict";

export const showMovements = (parent, movements) => {
  parent.innerHTML = "";
  movements.forEach((movement, index) => {
    const mov = document.createElement("div");
    mov.classList.add("movement");
    mov.innerHTML = `<div class="movementIndex">${index + 1} 
    ${
      movement > 0
        ? '<div class="deposit">Deposit</div>'
        : '<div class="withdrawal">Withdrawal</div>'
    }</div>
        <div class="movementValue">${movement}$</div>
        `;
    parent.appendChild(mov);
  });
};
