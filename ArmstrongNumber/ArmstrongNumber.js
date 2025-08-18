function checkArmstrong() {
  let n = Number(document.getElementById("input").value);
  document.getElementById("result").innerHTML = "You entered: " + n + "<br>";

  let temp = n,
    digits = 0;

  while (temp > 0) {
    temp = Math.floor(temp / 10);
    digits++;
  }

  temp = n;
  let r, sum = 0;

  while (temp > 0) {
    r = temp % 10;
    sum += Math.pow(r, digits);
    temp = Math.floor(temp / 10);
  }

  if (n === sum) {
    document.getElementById("result").innerHTML += n + " is an Armstrong number.";
  } else {
    document.getElementById("result").innerHTML += n + " is not an Armstrong number.";
  }
}
