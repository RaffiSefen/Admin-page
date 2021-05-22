let container = document.querySelector("#container");
let questions;

let getAllEndpoint = "http://localhost:3000/api/admin/all/question";
let deleteEndpoint = "http://localhost:3000/api/admin/delete/question/";

const getData = async () => {
  let res = await fetch(getAllEndpoint);
  let data = await res.json();
  questions = data;
  return questions;
};

const displayData = async () => {
  let callGetData = await getData();
  questions.map((question) => {
    let row = document.createElement("div");
    row.setAttribute("class", "border text-center");
    let title = document.createElement("h1");
    title.setAttribute("class", "text-success");
    let answer = document.createElement("p");
    let deleteBtn = document.createElement("a");
    deleteBtn.setAttribute("class", "btn btn-outline-danger");
    deleteBtn.setAttribute("href", "questions.html");
    let updateBtn = document.createElement("a");
    updateBtn.setAttribute("class", "btn btn-outline-success ml-2");
    updateBtn.setAttribute("href", `edit.html?id=${question._id}`);

    title.innerHTML = question.title;
    answer.innerHTML = question.answer;
    deleteBtn.innerHTML = "X";
    updateBtn.innerHTML = "Edit";

    container.appendChild(row);
    row.appendChild(title);
    row.appendChild(answer);
    row.appendChild(deleteBtn);
    row.appendChild(updateBtn);

    deleteBtn.addEventListener("click", async () => {
      await fetch(`${deleteEndpoint}${question._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Question has been deleted");
    });
  });
};

displayData();
