//import exrpess from 'express';
import AuthController from '../controllers/authController.js';

//const router = exrpess.Router();

// router.post('/register', AuthController.register);
// router.post('/login', AuthController.login);
// router.post('/logout', AuthController.logout);
// router.post('/refresh_token', AuthController.generateAccessToken);

//export default router;
import express from 'express';

//import { generateAccessToken, login, logout, register } from '../controllers/authController.js';

const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);
// router.post('/refresh_token', generateAccessToken);

router.post('/a', AuthController.a);
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/refresh_token', AuthController.generateAccessToken);

export default router;