// Validate a credit card number using Luhn's algorithm.
export const isAValidCreditCard = (cardNumber) => {
    let sum = 0;
    const parity = cardNumber.length % 2;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        const currentDigit = parseInt(cardNumber[i], 10);

        if ((i + 1) % 2 === parity) {
            sum += currentDigit;
        } else if (currentDigit > 4) {
            sum += 2 * currentDigit - 9;
        } else {
            sum += 2 * currentDigit;
        }
    }

    return sum % 10 === 0;
};
