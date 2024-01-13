"use strict";

export class Account {
  constructor(owner, movements, interestRate, pin) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.pin = pin;
    this.in = this.movements.filter((mov) => mov > 0).reduce((acc, curr) => acc + curr, 0);
    this.out = this.movements.filter((mov) => mov < 0).reduce((acc, curr) => acc + curr, 0);
    this.totalBalance = this.in - Math.abs(this.out);
  }

  getAccountMovements() {
    return this.movements;
  }

  getDeposit(){
    return this.in
  }

  getWithdrawal(){
    return this.out
  }

  getBalance(){
    return this.totalBalance
  }
  // totalDeposit() {
  //   const sumDeposit = this.movements
  //     .filter((mov) => mov > 0)
  //     .reduce((acc, curr) => acc + curr);
  //   return sumDeposit;
  // }

  // totalWithdrawal() {
  //   const sumWithdrawal = this.movements
  //     .filter((mov) => mov < 0)
  //     .reduce((acc, curr) => acc + curr);
  //   return sumWithdrawal;
  // }

  sort() {
    const sort = [...this.movements].sort((a, b) => b - a);
    return sort;
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
