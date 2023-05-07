var Account = /** @class */ (function () {
    function Account(id, initialBalance) {
        this.id = id;
        this.balance = initialBalance;
        console.log("Created new account with initial balance $".concat(initialBalance));
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Desposited $".concat(amount, ". New balance is $").concat(this.balance, "."));
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        console.log("Withdrew $".concat(amount, ". New balance is $").concat(this.balance, "."));
        this.balance -= amount;
    };
    return Account;
}());
function transfer(fromAccount, toAccount, amount) {
    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
}
// Example usage:
var account1 = new Account(1, 1000);
var account2 = new Account(2, 500);
console.log('Initial balances:');
console.log("Account 1: ".concat(account1.balance));
console.log("Account 2: ".concat(account2.balance));
account1.deposit(200);
account1.withdraw(100);
transfer(account1, account2, 300);
console.log('Balances after operations:');
console.log("Account 1: ".concat(account1.balance));
console.log("Account 2: ".concat(account2.balance));
