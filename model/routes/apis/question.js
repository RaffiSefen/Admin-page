const express = require("express");
const Question = require("../../../model/Question");
const router = express.Router();

router.get("/admin/all/question", async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.send(allQuestions);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/admin/new/question", async (req, res) => {
  try {
    const { title, answer } = req.body;
    const newQuestion = new Question({
      title,
      answer,
    });

    res.send(newQuestion);
    await newQuestion.save();
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
