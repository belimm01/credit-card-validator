import { isAValidCreditCard } from '../service/creditCardService.js';
import { logger } from '../utils/Logger.js';

export const validateCreditCard = (req, res) => {
    const { creditCardNumber } = req.params;

    try {
        if (!/^\d+$/.test(creditCardNumber)) {
            return res.status(400).json({ error: 'Credit card number must be numeric' });
        }

        const isValid = isAValidCreditCard(creditCardNumber);
        res.json({ isValid });
    } catch (error) {
        logger.error(`An error occurred during credit card validation: ${error.message}`);
        res.status(500).json({ error: 'Internal server error' });
    }
};
