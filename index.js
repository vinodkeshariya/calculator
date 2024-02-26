function Solve(val) {
  const v = document.getElementById("disply");
  v.value += val;
}
function Result() {
  const num1 = document.getElementById("disply").value;
  const num2 = eval(num1);
  document.getElementById("disply").value = num2;
}
function Clear() {
  const inp = document.getElementById("disply");
  inp.value = "";
}
function Back() {
  const ev = document.getElementById("disply");
  ev.value = ev.value.slice(0, -1);
}

