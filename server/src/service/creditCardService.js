// Function to validate credit card numbers using Luhn's Algorithm
const isAValidCreditCard = (cardNumber) => {
    let sum = 0
    let parity = cardNumber.length % 2

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let currentDigit = parseInt(cardNumber[i])

        if ((i + 1) % 2 === parity) {
            sum += currentDigit
        } else if (currentDigit > 4) {
            sum += 2 * currentDigit - 9
        } else {
            sum += 2 * currentDigit
        }
    }

    return sum % 10 === 0
}

module.exports = {isAValidCreditCard};
