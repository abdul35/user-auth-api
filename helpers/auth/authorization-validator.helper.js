import { body } from 'express-validator';

export const authorizationValidator = [
    body('email').notEmpty().isEmail(),
    body('password').isLength({ min: 5 })
]