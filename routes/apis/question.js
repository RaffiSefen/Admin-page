const express = require("express");
const isAdmin = require("../../middleware/auth");
const Question = require("../../model/Question");
const router = express.Router();

router.get("/admin/all/question", isAdmin, async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.send(allQuestions);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/admin/new/question", isAdmin, async (req, res) => {
  try {
    console.log(req.body);
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

router.put("/admin/update/question/:id", isAdmin, async (req, res) => {
  try {
    const foundedQuestion = await Question.findById(req.params.id);
    if (foundedQuestion) {
      const updateQuestion = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updateQuestion);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/admin/delete/question/:id", isAdmin, async (req, res) => {
  try {
    const foundedQuestion = await Question.findById(req.params.id);
    if (foundedQuestion) {
      const deleteQuestion = await Question.deleteOne();
      res.send("Successfully Deleted");
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
