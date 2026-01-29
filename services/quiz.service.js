import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";

// GET ALL
export const getAllQuiz = async () => {
  return await Quiz.find().populate("questions");
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
  const quiz = await Quiz.findById(id).select("questions");
  if (quiz && quiz.questions.length > 0) {
    await Question.deleteMany({ _id: { $in: quiz.questions } });
  }
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
  return await Quiz.findById(id).populate("questions");
};

// GET QUIZ BY ID WITH KEYWORD FILTER
export const getQuizByIdWithKeyword = async (id, keyword) => {
  const quiz = await Quiz.findById(id).populate({
    path: "questions",
    match: { keywords: { $regex: keyword } },
  });
  return quiz;
};

// CREATE QUESTION IN QUIZ
export const createQuestionInQuiz = async (quizId, questionData) => {
  const question = await Question.create(questionData);
  await Quiz.findByIdAndUpdate(quizId, {
    $push: { questions: question._id },
  });
  return question;
};

// CREATE MANY QUESTIONS IN QUIZ
export const createManyQuestionsInQuiz = async (quizId, questionsData) => {
  const data = Array.isArray(questionsData) ? questionsData : [questionsData];

  const transformedData = data.map((q) => {
    const transformed = {
      ...q,
      correctAnswerIndex: Array.isArray(q.correctAnswerIndex)
        ? q.correctAnswerIndex[0]
        : q.correctAnswerIndex,
    };

    if (q.keyword) {
      transformed.keywords = q.keyword;
      delete transformed.keyword;
    }

    return transformed;
  });

  const questions = await Question.insertMany(transformedData);
  const questionIds = questions.map((q) => q._id);
  await Quiz.findByIdAndUpdate(quizId, {
    $push: { questions: { $each: questionIds } },
  });
  return questions;
};
