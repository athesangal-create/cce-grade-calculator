function calc() {
  let m = document.getElementById("mark").value;
  let g = "";

  if (m >= 90) g = "A1";
  else if (m >= 80) g = "A2";
  else if (m >= 70) g = "B1";
  else if (m >= 60) g = "B2";
  else if (m >= 50) g = "C1";
  else if (m >= 40) g = "C2";
  else g = "Fail";

  document.getElementById("result").innerHTML = "Grade: " + g;
}
