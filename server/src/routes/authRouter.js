
import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'User logged in successfully' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'User logged out successfully' });
});

export default router;
