//Select elements
let output = document.getElementById("grade");

function getGrade() {
  let score = document.getElementById("number").value;
  console.log(score);
  let grade;

  if (score > 90 && score <= 100) {
    grade = "A";
    document.querySelector("#grade-container").classList.add("focus");
    output.style.color = "#2CA02A";
  } else if (score > 80 && score <= 90) {
    grade = "B";
    output.style.color = "#2AA5AD";
  } else if (score > 70 && score <= 80) {
    grade = "C";
    output.style.color = "#2C2AAD";
  } else if (score > 60 && score <= 70) {
    grade = "E";
    output.style.color = "#8A258C";
  } else if (score > 50 && score <= 60) {
    grade = "D";
    output.style.color = "#AD712A";
  } else if (score > 0 && score <= 50) {
    grade = "F";
    output.style.color = "#AD2A2A";
  }

  output.innerHTML = grade;
}
