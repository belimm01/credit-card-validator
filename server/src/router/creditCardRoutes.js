import { Router } from 'express';
import { validateCreditCard } from '../controller/creditCardController.js';

export const router = Router();

router.get('/api/validate/:creditCardNumber', validateCreditCard);
