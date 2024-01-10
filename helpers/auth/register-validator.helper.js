import { body } from 'express-validator';

export const registerValidator = [
    body('name').notEmpty().isLength({ max: 30 }),
    body('email').notEmpty().isEmail(),
    body('password').isLength({ min: 5 })
]