import { Router } from 'express';
import { validateCreditCard } from '../controller/creditCardController.js';

export const router = Router();

// API endpoint for credit card validation
router.get('/api/validate/:creditCardNumber', validateCreditCard);
