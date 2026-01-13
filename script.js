function calc(){
let m = document.getElementById("mark").value;
let g = "";

if(m>=91) g="A1";
else if(m>=81) g="A2";
else if(m>=71) g="B1";
else if(m>=61) g="B2";
else if(m>=51) g="C1";
else if(m>=41) g="C2";
else if(m>=33) g="D";
else g="Fail";

document.getElementById("result").innerHTML="Grade : "+g;
}
