import express from "express";
import {
  createQuizController,
  deleteAllQuizController,
  deleteQuizByIdController,
  getAllQuizController,
  getQuizByIdController,
  updateByQuizIdController,
  getQuizByIdWithKeywordController,
  createQuestionInQuizController,
  createManyQuestionsInQuizController,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router
  .route("/")
  .post(createQuizController)
  .get(getAllQuizController)
  .delete(deleteAllQuizController);

router
  .route("/:id")
  .get(getQuizByIdController)
  .put(updateByQuizIdController)
  .delete(deleteQuizByIdController);

router.route("/:quizId/populate").post(getQuizByIdWithKeywordController);

router.route("/:quizId/question").post(createQuestionInQuizController);

router.route("/:quizId/questions").post(createManyQuestionsInQuizController);

export default router;
