import { Router } from "express";

const router = Router();

// api/auth/register
router.post('/auth/register', (req, res) => {
    /* const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send({ message: 'Name, email and password are required' });
    }
     */
    res.send({ message: 'Hello Register', data: req.body });
    console.log(req.body);
});

export default router;
