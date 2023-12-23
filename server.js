// importing modules from library
import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/connectionFile.js";
import autrouter from "./routers/authRouter.js";

import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();
connectToDatabase();
const app = express();

const port = process.env.PORT || 7000;
app.use(cors());
app.use(express.json());
app.use("/api/v1", autrouter);
app.use(express.static(path.join(__dirname, "./recommendation")));
console.log(path.join(__dirname, "./recommendation/build/index.html"));
console.log(path.join(__dirname, "./recommendation"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./recommendation/build/index.html"));
});

app.listen(port, () => {
  console.log("hi Iam liseningt at post".bgBlue + port);
});
