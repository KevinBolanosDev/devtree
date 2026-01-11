import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

    // Manejar errores de validación
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation errors',
            errors: errors.array(),
        });
    }

    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(409).json({
            success: false,
            message: 'User email already exists',
            data: userExists,
        });
    }

    const handle = slug(req.body.handle, '');
    const handleExists = await User.findOne({ handle });
    if (handleExists) {
        return res.status(409).json({
            success: false,
            message: 'User handle already exists',
            data: handleExists,
        });
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);

    console.log(slug(handle, '-'))


    await user.save();
    console.log(user);
    return res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: user,
    });
};

export default {
    createAccount,
};
