import express from 'express';
import ChildController from '../controllers/childController.js';
import auth from '../middleware/auth.js';

const router = express.Router();
console.log("router...")
router.post('/child', auth, ChildController.addChild)
router.get('/getChildren', auth, ChildController.getChildren)
router.get('/getUserChildren', auth, ChildController.getUserChildren)
router.get('/getChild', auth, ChildController.getChild)


export default router;