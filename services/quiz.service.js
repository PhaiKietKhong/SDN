import Quiz from "../models/Quiz.js";

// GET ALL
export const getAllQuiz = async () => {
  return await Quiz.find();
};

// CREATE
export const createQuiz = async (data) => {
  return await Quiz.create(data);
};

// DELETE ALL
export const deleteAllQuiz = async () => {
  return await Quiz.deleteMany({});
};

// DELETE QUIZ BY ID
export const deleteQuizById = async (id) => {
  return await Quiz.deleteOne({ _id: id });
};

// UPDATE BY ID
export const updateQuizById = async (id, data) => {
  return await Quiz.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );
};

// GET QUIZ BY ID
export const getQuizById = async (id) => {
  return await Quiz.findById(id);
};
