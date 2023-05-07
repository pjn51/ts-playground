class Account {
  id: number;
  balance: number;

  constructor(id: number, initialBalance: number) {
    this.id = id;
    this.balance = initialBalance;
    console.log(`Created new account with initial balance $${initialBalance}`)
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Desposited $${amount}. New balance is \$${this.balance}.`)
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient balance');
    }
    console.log(`Withdrew $${amount}. New balance is $${this.balance}.`)
    this.balance -= amount;
  }
}

function transfer(fromAccount: Account, toAccount: Account, amount: number): void {
  fromAccount.withdraw(amount);
  toAccount.deposit(amount);
}

// Example usage:

const account1 = new Account(1, 1000);
const account2 = new Account(2, 500);

console.log('Initial balances:');
console.log(`Account 1: ${account1.balance}`);
console.log(`Account 2: ${account2.balance}`);

account1.deposit(200);
account1.withdraw(100);
transfer(account1, account2, 300);

console.log('Balances after operations:');
console.log(`Account 1: ${account1.balance}`);
console.log(`Account 2: ${account2.balance}`);
