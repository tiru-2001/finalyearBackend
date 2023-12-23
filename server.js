// importing modules from library
import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/connectionFile.js";
import autrouter from "./routers/authRouter.js";

dotenv.config();
connectToDatabase();
const app = express();

const port = process.env.PORT || 7000;
app.use(cors());
app.use(express.json());
app.use("/api/v1", autrouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log("hi Iam liseningt at post".bgBlue + port);
});
