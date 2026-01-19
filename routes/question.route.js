import express from "express";
import { createManyQuestionController } from "../controllers/question.controller.js";

const router = express.Router();

router.route("/:quizId/questions").post(createManyQuestionController);

export default router;
