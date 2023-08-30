const {isAValidCreditCard} = require( '../src/service/creditCardService.js')

// Test cases
test('Valid credit card number: 49927398716', () => {
    expect(isAValidCreditCard('49927398716')).toBe(true);
});

test('Invalid credit card number: 49927398717', () => {
    expect(isAValidCreditCard('49927398717')).toBe(false);
});

test('Invalid credit card number: 1234567812345678', () => {
    expect(isAValidCreditCard('1234567812345678')).toBe(false);
});

test('Valid credit card number: 1234567812345670', () => {
    expect(isAValidCreditCard('1234567812345670')).toBe(true);
});

test('Valid credit card number: 2222405343248877', () => {
    expect(isAValidCreditCard('2222405343248877')).toBe(true);
});

test('Valid credit card number: 2222990905257051', () => {
    expect(isAValidCreditCard('2222990905257051')).toBe(true);
});
