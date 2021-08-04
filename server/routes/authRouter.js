import AuthController from '../controllers/authController.js';
import express from 'express';

const router = express.Router();
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/refresh_token', AuthController.generateAccessToken);

export default router;