const { BankAccount, hello } = require('./index');
// var index = require('./index');

describe('Checking it all works', () => {
    // Checking it works
    it('should equal 4', () => {
        var x = 2 + 2;
        expect(x).toEqual(4);
    });
    
    // Checking I can read index.js
    it('should return Hello', () => {
        expect(hello).toBe('hello');
    });
});



// testing BankAccount class methods
describe('BankAccount Method - Withdraw()', () => {
    let acc;
    beforeEach(() => {
        acc = new BankAccount("Dan", 88);
        console.log = jest.fn();
    });
    // check initial state
    test('Name = Dan, Money = 88', () => {
        expect(acc.name).toEqual('Dan');
        expect(acc.money).toEqual(88);
    });
    // check sum
    it('Should update sum to be 44', () => {
        acc.withdraw(44);
        expect(acc.money).toEqual(44);
        expect(console.log).toHaveBeenCalledWith("new sum: 44");
    });
    it.skip('Should print new sum', () => {
        console.log = jest.fn();
        expect(acc.withdraw(11)).toBe("new sum: 77");  
    });
    // Should fail if withdraw amount > current sum
    it('should fail to withdraw', () => {
        acc.withdraw(99);
        expect(acc.money).toEqual(88);
        expect(console.log).toHaveBeenCalledWith("You don't have enough money in your account");
    });
});

describe('BankAccount Method - Deposit()', () => {
    let acc;
    beforeEach(() => {
        acc = new BankAccount("Dan", 88)
        console.log = jest.fn();
    });
    test('Name = Dan, Money = 88', () => {
        expect(acc.name).toEqual('Dan');
        expect(acc.money).toEqual(88);
    });
    it("should have a new sum of 99", () => {
        acc.deposit(11);
        expect(acc.money).toEqual(99);
        expect(console.log).toHaveBeenCalledWith("new sum: 99");
    })
});

describe('BankAccount Methods - openStatus() / closeAccount()', () => {
    let acc;
    beforeEach(() => {
        acc = new BankAccount("Dan", 88)
        console.log = jest.fn();
    });
    it('should return openStatus as true', () => {
        acc.openStatus();
        expect(console.log).toHaveBeenCalledWith("account open? true");
    });
    // Now close accout and expect openStatus to be false
    it('should return openStatus as false', () => {
        acc.closeAccount();
        acc.openStatus();
        expect(console.log).toHaveBeenCalledWith("account open? false");
    })
})