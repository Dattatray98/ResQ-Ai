import express, { Request, Response} from "express";
import { MongoDatabase } from "./Config/MongoDB.config";
import User from "./Routes/User.route"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

MongoDatabase();

app.get('/', (req: Request, res: Response)=>{
    res.send("ResQ-Ai server is running!");
});


app.use("/api/user", User);

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 