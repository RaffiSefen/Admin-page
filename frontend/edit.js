let browserUrl = new URL(document.URL);
let browserId = browserUrl.searchParams.getAll("id")[0];

let form = document.querySelector("#form");

let titleInput = document.querySelector("#title");
let answerInput = document.querySelector("#answer");

let putEndpoint = "http://localhost:3000/api/admin/update/question/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let title = titleInput.value;
  let answer = answerInput.value;

  console.log("form submitted");
  await fetch(`${putEndpoint}${browserId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, answer }),
  });
});
