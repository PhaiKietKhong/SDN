import Question from "../models/Question.js";

// GET ALL QUESTIONS
export const getAllQuestions = async () => {
  return await Question.find();
};

// CREATE QUESTION
export const createQuestion = async (questionData) => {
  return await Question.create(questionData);
};

// GET QUESTION BY ID
export const getQuestionById = async (id) => {
  return await Question.findById(id);
};

// UPDATE QUESTION BY ID
export const updateQuestionById = async (id, data) => {
  return await Question.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );
};

// DELETE QUESTION BY ID
export const deleteQuestionById = async (id) => {
  return await Question.deleteOne({ _id: id });
};
