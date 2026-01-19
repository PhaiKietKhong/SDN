import { createManyQuestion } from "../services/question.service.js";

export const createManyQuestionController = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const questionData = req.body;
    await createManyQuestion(quizId, questionData);
    return res
      .status(200)
      .json({ success: true, message: "add questions successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error when create question" });
  }
};

export const createQuestionController = async (req, res) => {
  try {
  } catch (error) {}
};
