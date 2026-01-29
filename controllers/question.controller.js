import {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
} from "../services/question.service.js";

// GET ALL QUESTIONS
export const getAllQuestionsController = async (req, res) => {
  try {
    const questions = await getAllQuestions();
    return res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE QUESTION
export const createQuestionController = async (req, res) => {
  try {
    const questionData = req.body;
    const question = await createQuestion(questionData);
    return res.status(201).json({
      success: true,
      message: "Question created successfully",
      data: question,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET QUESTION BY ID
export const getQuestionByIdController = async (req, res) => {
  try {
    const question = await getQuestionById(req.params.id);
    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE QUESTION BY ID
export const updateQuestionByIdController = async (req, res) => {
  try {
    const result = await updateQuestionById(req.params.id, req.body);
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Question updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE QUESTION BY ID
export const deleteQuestionByIdController = async (req, res) => {
  try {
    const result = await deleteQuestionById(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Question deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
