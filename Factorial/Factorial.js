function calculateFactorial() {
  let n = parseInt(document.getElementById("numberInput").value);

  if (isNaN(n) || n < 0) {
    output.innerText = " Please enter a valid non-negative number.";
    return;
  }

  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  output.innerHTML = `You entered: <b>${n}</b><br>Factorial of ${n} is: <b>${fact}</b>`;
}
