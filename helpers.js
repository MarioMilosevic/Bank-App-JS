"use strict";

// export const showMovements = (parent, movements) => {
//   parent.innerHTML = "";
//   movements.forEach((movement, index) => {
//     const mov = document.createElement("div");
//     const movementType = movement > 0 ? 'Deposit' : 'Withdrawal'
//     mov.classList.add("movement");
//     mov.innerHTML = `<div class="movementIndex">${index + 1}
//     ${movement > 0  ? `<div class="movement-type-${movementType}">${movementType}</div>
//         <div class="movementValue">${movement}$</div>
//         `;
//     parent.appendChild(mov);
//   });
// };

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
