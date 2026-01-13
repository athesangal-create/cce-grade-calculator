function calculate() {
  let fa = Number(document.getElementById("fa").value);
  let sa = Number(document.getElementById("sa").value);
  let total = fa + sa;
  let grade = "";

  if (total >= 91) grade = "A1";
  else if (total >= 81) grade = "A2";
  else if (total >= 71) grade = "B1";
  else if (total >= 61) grade = "B2";
  else if (total >= 51) grade = "C1";
  else if (total >= 41) grade = "C2";
  else grade = "D";

  document.getElementById("result").innerHTML =
    "Total : " + total + "<br>Grade : " + grade;
}

function clearAll() {
  document.getElementById("fa").value = "";
  document.getElementById("sa").value = "";
  document.getElementById("result").innerHTML = "";
}
