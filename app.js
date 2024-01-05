import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import connectDb from "./database.js";
import authRouter from "./Routes/authRoutes.js";
import todoRouter from "./Routes/todoRoutes.js";
import users from "./models/userModel.js"

dotenv.config();

const port = process.env.PORT;

const app = express();

//middlewares
app.use(bodyParser.json());

//routes
app.use("/api/auth",authRouter);
app.use("/api/todo",todoRouter);
app.get("/", (req, res) => {
    res.send("hey!")
})

connectDb().then(() => {
    app.listen(port, () => {
        console.log("app started")
    })
})