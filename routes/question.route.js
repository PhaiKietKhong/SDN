import express from "express";
import {
  getAllQuestionsController,
  createQuestionController,
  getQuestionByIdController,
  updateQuestionByIdController,
  deleteQuestionByIdController,
} from "../controllers/question.controller.js";

const router = express.Router();

// API 6 & 7: GET all questions and POST new question
router.route("/").get(getAllQuestionsController).post(createQuestionController);

// API 8, 9 & 10: GET, PUT, DELETE question by ID
router
  .route("/:id")
  .get(getQuestionByIdController)
  .put(updateQuestionByIdController)
  .delete(deleteQuestionByIdController);

export default router;
