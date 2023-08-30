const { Router } = require('express');
const { logger } = require('../utils/Logger.js');
const { validateCreditCard } = require('../controller/creditCardController.js'); // Make sure the path is correct

const router = Router();

router.use((req, res, next) => {
    logger.info(`Received request: ${req.method} ${req.url}`);
    next();
});

// API endpoint for credit card validation
router.get('/api/validate/:creditCardNumber', validateCreditCard);

module.exports = {router};
