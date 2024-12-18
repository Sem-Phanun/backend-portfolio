import { Router } from 'express';
import { SignInAuth, SignUpAuth } from '../controller/authController';


const authRoutes: Router = Router()

authRoutes.get('/login', (req, res) => {
    // Login logic
    res.json({ message: 'Logged in successfully' })
})
authRoutes.post('/signup', SignUpAuth)
authRoutes.post('/signin', SignInAuth)
export default authRoutes