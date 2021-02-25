#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// TO DO
// - Implement rl.close();
// - Clear screen? Stretch goal


// bank account Class
class BankAccount {
    constructor(name, money)  {
        this.name = name;
        this.money = money;
        this.open = true;
    };

    withdraw(amount) {
        console.log(`Balance: £ ${this.money}`);
        if (amount <= this.money) {
            this.money = this.money - amount;
            console.log(`new sum: ${this.money}`);
        } else {
            console.log("You don't have enough money in your account");
        }
    };

    deposit(amount) {
        this.money = Number(this.money) + Number(amount);
        console.log(`new sum: ${this.money}`);
    };

    openStatus() {
        console.log(`account open? ${this.open}`);
    };

    closeAccount() {
        this.open = false;
    };

};

// Terminal functions

function UINewAcc() {
    rl.question("What is your name? ", function(resName) {
        rl.question("How much would you like to deposit? ", function(resMoney){
            let acc = new BankAccount(resName, resMoney);
            console.log(`Name: ${acc.name}, Money: ${acc.money} \n\n`);
            // call main function
            UIMain(acc);
        });
    });
};

function UIWithdraw(account) {
    rl.question("How much money would you like to withdraw? ", function(reqMoney) {
        account.withdraw(reqMoney);
        // call main function
        UIResponse(4, account);
    });
};

function UIDeposit(account) {
    rl.question("How much money would you like to deposit? ", function(reqMoney) {
        account.deposit(reqMoney);
        // call main function
        UIResponse(3, account);
    });
};

function UICloseAcc(account) {
    rl.question(`You are about to close ${account.name}'s account, do you with to continue? (y/n)`, function(resClose) {
        if (resClose === "y") {
            account.closeAccount();
        } else if (resClose === "n") {
            UIMain();
        }
    });
}

function UIShop(account) {
    rl.question("Hello! What would you like to purchase? \n\n1- Pepperoni : £12 \n2- Hawaiian : £14 \n3- Margarita : £8 \n4- Chicken Supreme : £12 \n5- Home \n\n   Choice: ", function(item) {
        if (item === "1") {
            console.log("Pepperoni, the classic!");
            account.withdraw(12);
            UIResponse(2, account);
        } else if (item === "2") {
            console.log("Hawaiian? sure, not judging");
            account.withdraw(14);
            UIResponse(2, account);
        } else if (item === "3") {
            console.log("Margarita, nice and simple");
            account.withdraw(8);
            UIResponse(2, account);
        } else if (item === "4"){
            console.log("Chicken Supreme, delicious!");
            account.withdraw(12);
            UIResponse(2, account);
        } else if (item === "5"){
            UIMain(account);
        } else {
            UIShop(account);
        }
    });
};

// Generic responses for traversing in terminal
function UIResponse(res, accRes) {
    switch (res) {
        case 1:
            rl.question("Open account? (y/n)", function(response) {
                if (response === "y") {
                    UINewAcc();
                } else if (response === "n") {
                    UIMain(accRes);
                } else {
                    UIResponse(1, accRes);
                }
            });
            break;
        case 2:
            rl.question("Back to home? (y/n)", function(response) {
                if (response === "y") {
                    UIMain(accRes)
                } else if (response === "n") {
                    UIShop(accRes);
                } else {
                    UIResponse(2, accRes);
                }
            });
            break;
        case 3:
            rl.question("Back to home? (y/n)", function(response) {
                if (response === "y") {
                    UIMain(accRes)
                } else if (response === "n") {
                    UIDeposit(accRes);
                } else {
                    UIResponse(3, accRes);
                }
            });
            break;
        case 4:
            rl.question("Back to home? (y/n)", function(response) {
                if (response === "y") {
                    UIMain(accRes)
                } else if (response === "n") {
                    UIWithdraw(accRes);
                } else {
                    UIResponse(4, accRes);
                }
            });
            break;
        case 5:
            rl.question("Back to home? (y/n)", function(response) {
                if (response === "y") {
                    UIMain(accRes);
                } else if (response === "n") {
                    UIResponse(5, accRes);
                } else {
                    UIResponse(5, accRes);
                }
            });
            break;
            
    }
};

function UIMain(userInfo) {
    let user = userInfo;
    rl.question("Welcome to JS Bank! \n \nwhat would you like to do today? \n(select a number to continue) \n\n1- Open Account \n2- Withdraw \n3- Deposit \n4- Check Balance \n5- Go Shopping \n\n   Choice: ", function(input) {
        if (input === "1") {
            user ? (console.log(`${userInfo.name} you already have an account`), UIResponse(5, userInfo)): (console.log("Let\'s open an account!"), UINewAcc());
        } else if (input === "2") {
            user ? (console.log("Let\'s withdraw some moneeyyyy \n"), UIWithdraw(user)) : (console.log("You don't have an account yet"), UIResponse(1));
        } else if (input === "3") {
            user ? (console.log("Let\'s stock up on cash $$$ \n"), UIDeposit(user)) : (console.log("You don't have an account yet"), UIResponse(1));
        } else if (input === "4"){
            user ? (console.log(`Balance: £ ${user.money}`), UIResponse(5, user)) : (console.log("You want money? Open an account first!"), UIResponse(1));
        } else if (input === "5"){
            user ? (console.log("let\'s go shopping!"), UIShop(user)) : (console.log("You're trying to go shopping without an account? \nEverything is digital now, open an account :)\n\n"), UIResponse(1));
        } else if (input === "6") {
            user ? UICloseAcc(user) : UIResponse(1);
        } else {
            UIMain(user);
        }
    });
};

UIMain(null);
