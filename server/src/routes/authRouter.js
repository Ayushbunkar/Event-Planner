
import express from 'express';
import { RegisterUser,UpdateUser,LoginUser,LogoutUser } from '../controllers/authcontroller.js';
const router = express.Router();

router.post('/register',RegisterUser);
router.post('/login',LoginUser);
router.post('/logout',LogoutUser);
router.post('/update',UpdateUser);



export default router;
