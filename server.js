const express = require("express");
const connectToDb = require("./db/connectToDb");
const questionRouter = require("./model/routes/apis/question");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api", questionRouter);
connectToDb();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
