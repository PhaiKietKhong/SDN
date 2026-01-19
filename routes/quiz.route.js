import express from "express";
import {
  createQuizController,
  deleteAllQuizController,
  deleteQuizByIdController,
  getAllQuizController,
  getQuizByIdController,
  updateByQuizIdController,
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

export default router;
