const mongoose = require("mongoose");
const questionSchema = require("../schema/questionSchema");

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
