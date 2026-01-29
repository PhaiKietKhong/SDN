import {
  createQuiz,
  deleteAllQuiz,
  deleteQuizById,
  getAllQuiz,
  getQuizById,
  updateQuizById,
  getQuizByIdWithKeyword,
  createQuestionInQuiz,
  createManyQuestionsInQuiz,
} from "../services/quiz.service.js";

// CREATE
export const createQuizController = async (req, res) => {
  try {
    const { title, description } = req.body;

    await createQuiz({ title, description });

    return res.status(201).json({
      success: true,
      message: "Quiz created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
export const getAllQuizController = async (req, res) => {
  try {
    const quizzes = await getAllQuiz();

    return res.status(200).json({
      success: true,
      data: quizzes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE ALL
export const deleteAllQuizController = async (req, res) => {
  try {
    await deleteAllQuiz();

    return res.status(200).json({
      success: true,
      message: "Deleted all quizzes successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE BY ID
export const updateByQuizIdController = async (req, res) => {
  try {
    const result = await updateQuizById(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Quiz updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteQuizByIdController = async (req, res) => {
  try {
    await deleteQuizById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getQuizByIdController = async (req, res) => {
  try {
    const quiz = await getQuizById(req.params.id);
    return res.status(200).json({ quiz });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET QUIZ BY ID WITH KEYWORD FILTER
export const getQuizByIdWithKeywordController = async (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: "Keyword is required in request body",
      });
    }
    const quiz = await getQuizByIdWithKeyword(req.params.quizId, keyword);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE SINGLE QUESTION IN QUIZ
export const createQuestionInQuizController = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const questionData = req.body;
    const question = await createQuestionInQuiz(quizId, questionData);
    return res.status(201).json({
      success: true,
      message: "Question created and added to quiz successfully",
      data: question,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE MANY QUESTIONS IN QUIZ
export const createManyQuestionsInQuizController = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const questionsData = req.body;
    const questions = await createManyQuestionsInQuiz(quizId, questionsData);
    return res.status(201).json({
      success: true,
      message: "Questions created and added to quiz successfully",
      data: questions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
