import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import quizRoute from "./routes/quiz.route.js";
import questionRoute from "./routes/question.route.js";
const app = express();
const port = 3001;
dotenv.config();
connectDB();
app.use(express.json());

app.listen(port, () => {
  console.log(`test ${port}`);
});

app.use("/quizzes", quizRoute);
app.use("/quizzes", questionRoute);
