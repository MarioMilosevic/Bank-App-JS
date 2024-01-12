"use strict";

export class Account {
  constructor(owner, movements, interestRate, pin) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.pin = pin;
  }

  getAccountMovements() {
    return this.movements;
  }

  totalDeposit() {
    const depositMovements = this.movements.filter((mov) => mov > 0);
    const sumDeposit = depositMovements.reduce((acc, curr) => acc + curr)
    return sumDeposit
  }

  totalWithdrawal(){
    const withdrawalMovements = this.movements.filter((mov) => mov < 0)
    const sumWithdrawal = withdrawalMovements.reduce((acc, curr) => acc +curr)
    return sumWithdrawal
  }
}

export class AccountManager {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getAccounts() {
    return this.accounts;
  }
}
