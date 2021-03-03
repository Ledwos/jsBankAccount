const { BankAccount } = require('./index');
var index = require('./index');

describe('Checking it all works', () => {
    // Checking it works
    it('should equal 4', () => {
        var x = 2 + 2;
        expect(x).toEqual(4);
    });
    
    // Checking I can read index.js
    it('should return Hello', () => {
        expect(index.hello).toBe('hello');
    });
});



// testing BankAccount class methods
describe('BankAccount Method - Withdraw()', () => {
    // check initial state
    test('Name = Dan, Money = 88', () => {
        expect(BankAccount.name).toEqual('Dan');
        expect(BankAccount.money).toEqual(88);
    });
    // check sum
    beforeEach(() => {
        console.log = jest.fn();
    })
    it("Should update sum to be 44", () => {
        BankAccount.withdraw(44);
        expect(BankAccount.money).toEqual(44);
        expect(console.log).toHaveBeenCalledWith("new sum: 44");
    });
    it.skip("Should print new sum", () => {
        console.log = jest.fn();
        expect(BankAccount.withdraw(10)).toBe("new sum: 34");  
    });
    // Should fail if withdraw amount > current sum
    it('should fail to withdraw', () => {
        BankAccount.withdraw(99);
        expect(BankAccount.money).toEqual(44);
        expect(console.log).toHaveBeenCalledWith("You don't have enough money in your account");
    });
})