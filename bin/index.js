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

function newAcc(a, b) {
    rl.question("What is your name? ", function(resName) {
        rl.question("How much would you like to deposit? ", function(resMoney){
            let user = new bankAccount(resName, resMoney)
            console.log(`Name: ${user.name}, Money: ${user.money}`);
            rl.question("How much money would you like to withdraw? ", function(reqMoney) {
                user.withdraw(reqMoney);
                user.openStatus();
                rl.close();
            })
        })
    })

    let user = new bankAccount()
}




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

newAcc();