import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import User from "../Models/User.model";

export const CreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        console.log("request body : ", req.body);

        if(!name || !email || !password){
            console.log("please provide all the details")
            return res.status(400).json({ message : 'please provide all the details'});
        }

        console.log("hashing password");
        const hashpassword = await bcrypt.hash(password, 10);
        console.log("password hashed successfully");

        const user = await User.create(
            {
                name,
                email,
                password: hashpassword,
            }
        );


        console.log("user create successfully : ", user);

        res.status(201).json({ message: "user created successfully : ", user });
    } catch (err) {
        console.log("got an error : ", err);
        res.status(500).json({ message : "Internal Server error : ", err})
    };
};



// export const GetUser = async (req: Request, res: Response) =>{
//     try{

//         cosnt {email, password} = req.body;
//     }catch(err){
//         console.log("got an error : ", err);
//     }
// }