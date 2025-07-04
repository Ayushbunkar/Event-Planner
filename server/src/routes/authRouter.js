
import express from 'express';
import { RegisterUser,UpdateUser,LoginUser,LogoutUser } from '../controllers/authcontroller';
const router = express.Router();

router.post('/register',Registraion);
router.post('/login',LoginUser);
router.post('/logout',LogoutUser);
router.post('/update',UpdateUser);


// router.post('/register', (req, res) => {
//   res.json({ message: 'User registered successfully' });
// });

// router.post('/login', (req, res) => {
//   res.json({ message: 'User logged in successfully' });
// });

// router.post('/logout', (req, res) => {
//   res.json({ message: 'User logged out successfully' });
// });

export default router;
