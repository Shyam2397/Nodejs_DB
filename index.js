import express from "express";
import cors from "cors";
import { studentsRouter } from "./Routes/student.js";
import dotenv from "dotenv";
// initializing a express server

const app = express();

// Environmental configuration
dotenv.config();

//port
const PORT = process.env.PORT;

//middleware
app.use(express.json());

app.use(cors());

//application routes
app.use("/students", studentsRouter);

//start the server
app.listen(PORT, () => console.log(`Server started in localhost : ${PORT}`));
