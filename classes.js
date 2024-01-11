"use strict";

export class Account {
  constructor(owner, movements, interestRate, pin) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.pin = pin;
  }
}

export class AccountManager{
    constructor(){
        this.accounts = []
    }

    addAccount(account){
        this.accounts.push(account)
    }
}
