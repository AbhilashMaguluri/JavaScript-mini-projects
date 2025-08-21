function printSeries() {
  let n = parseInt(document.getElementById("rangeInput").value);
  let mode = document.querySelector('input[name="mode"]:checked').value;

  let f1 = 0, f2 = 1, result = f1 + " , " + f2 ;

  if (mode === "limit") {
    // Fibonacci by Limit
    while (true) {
      let f3 = f1 + f2;
      if (f3 < n) {
        result += " , "+ f3 + " ";
        f1 = f2;
        f2 = f3;
      } else {
        break;
      }
    }
  } else {
    // Fibonacci by Count
    for (let i = 2; i < n; i++) {
      let f3 = f1 + f2;
      result += " , "+f3 + " ";
      f1 = f2;
      f2 = f3;
    }
  }

  document.getElementById("output").innerText = result;
}
