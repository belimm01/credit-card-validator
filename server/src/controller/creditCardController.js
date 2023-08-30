const {isAValidCreditCard} =  require('../service/creditCardService.js')

// API endpoint for credit card validation
const validateCreditCard = (req, res) => {
    const creditCardNumber = req.params.creditCardNumber;

    try {
        if (!/^\d+$/.test(creditCardNumber)) {
            return res.status(400).json({error: 'Credit card number must be numeric'});
        }

        const isValid = isAValidCreditCard(creditCardNumber);
        res.json({isValid});
    } catch (error) {
        console.error('An error occurred during credit card validation:', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {
    validateCreditCard
};
