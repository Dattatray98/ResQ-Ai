import { Router } from "express";
import { CreateUser } from "../Controllers/User.controller";

const router = Router();


router.post('/createuser', CreateUser);

export default router;