import 'dotenv/config';
import express from "express";
import { connectDB } from "./db/db";
import router from "./router";

const app = express();

connectDB()

// Middleware para parsear el body de las peticiones
app.use(express.json());

app.use("/api", router);

export default app;
