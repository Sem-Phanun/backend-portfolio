import { Request, Response } from 'express';
import { prisma } from '..';
import { compareSync, hashSync } from 'bcrypt';

export const SignUpAuth = async (req: Request, res: Response) => {
    const { name, email,bio,profilePicture, password } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                bio,
                profilePicture,
                password: hashSync(password, 10),
            },
        });
        res.json(user);        
    }catch{
        console.log('log')
    }
}

export const SignInAuth = async (req: Request, res:Response) => {
    // Sign in logic
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw Error(`User` + ` does not exist`)
        }
        if(!compareSync(password,user.password)){
            throw Error(`Incorrect password`)
        }
        res.json({message: 'Logged in successfully'});
    }catch (err) {
        console.log(err);
    }
}