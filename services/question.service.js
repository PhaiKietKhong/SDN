import question from "../models/Question.js";

export const createQuestion = async (quizId, questionData) => {
  return question.create({ ...questionData, quizId: quizId });
};

export const createManyQuestion = async (quizId, questionData) => {
  const data = Array.isArray(questionData) ? questionData : [questionData];
  const questionsWithId = data.map((q) => ({ ...q, quizId }));
  return await question.insertMany(questionsWithId);
};
