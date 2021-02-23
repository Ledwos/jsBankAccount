#!/usr/bin/env node

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Class for making bank account

// variables - name, account number, money
// fxn withdraw - changes money dependent on input
// fxn deposit - changes money dependent on input
// fxn close account - does what it says

class bankAccount {
    constructor(name, money)  {
        this.name = name;
        this.money = money;
        this.open = true;
    };

    withdraw(amount) {
        this.money = this.money - amount;
        console.log(`new sum: ${this.money}`);
    };

    deposit(amount) {
        this.money = this.money + amount;
        console.log(`new sum: ${this.money}`);
    };

    openStatus() {
        console.log(`account open? ${this.open}`);
    };

    closeAccount() {
        this.open = false;
    };

};

function UINewAcc() {
    rl.question("What is your name? ", function(resName) {
        rl.question("How much would you like to deposit? ", function(resMoney){
            let user = new bankAccount(resName, resMoney);
            console.log(`Name: ${user.name}, Money: ${user.money}`);
            // call main function
        });
    });
};

function UIWithdraw(account) {
    rl.question("How much money would you like to withdraw? ", function(reqMoney) {
        account.withdraw(reqMoney);
        // call main function
    });
};

function UIDeposit(account) {
    rl.question("How much money would you like to deposit? ", function(reqMoney) {
        account.deposit(reqMoney);
        // call main function
    });
};

function UICloseAcc(account) {
    rl.question(`You are about to close ${account.name}'s account, do you with to continue? (y/n)`, function(resClose) {
        if (resClose === "y") {
            account.closeAccount();
        }
        // call main function
    });
}

function UIShop(account) {
    rl.question("Hello! What would you like to purchase? \n\n1- Pepperoni \n2- Hawaiian \n3- Margarita \n4- Chicken Supreme \n\n   Choice: ", function(item) {
        if (item === "1") {
            console.log("Pepperoni, the classic!");
        } else if (item === "2") {
            console.log("Hawaiian? sure, not judging");
        } else if (item === "3") {
            console.log("Margarita, nice and simple");
            rl.write(null, {ctrl: true, name: 'u'});
        } else if (item === "4"){
            console.log("Chicken Supreme, delicious!");
        }
    });
};

function UIMain(userInfo) {
    let user = userInfo;
    rl.question("Welcome to JS Bank! \n \nwhat would you like to do today? \n(select a number to continue) \n\n1- Open Account \n2- Withdraw \n3- Deposit \n4- Go Shopping \n\n   Choice: ", function(input) {
        if (input === "1") {
            console.log("Let\'s open an account!");
        } else if (input === "2") {
            user ? console.log("Let\'s withdraw some moneeyyyy") : console.log("You don't have an account yet");
        } else if (input === "3") {
            console.log("Let\'s stock up on cash $$$");
            rl.write(null, {ctrl: true, name: 'u'});
        } else if (input === "4"){
            console.log("yass queen, let\'s go shopping!");
            UIShop(user);
        }
    });
};

UIMain(null);





// Shop simulator:
// add a minigame to make purchase, thus showing transaction in action (or failing if account closed)



function userInput() {
    rl.question("how\'s it going? ", function(response) {
        if (response === "good") {
            console.log("That\'s great to hear! You're doing great :)");
        } else if (response === "bad") {
            console.log("Oh no! I\'m sure you can get over whatever is troubling you :)");
        } else {
            console.log("I\'m not sure I understood that. Hope you\'re doing good either way! \n \n Stay Positive :D");
            rl.close();
        }
    });
};

// userInput();

// UINewAcc();