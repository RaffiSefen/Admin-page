let form = document.querySelector("#form");

let postEndpoint = "http://localhost:3000/api/admin/new/question";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let answer = document.querySelector("#answer").value;
  console.log("Form Submitted");
  await fetch(postEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, answer }),
  });
});
