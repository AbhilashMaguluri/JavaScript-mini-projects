function checkPalindrome() {
  let n = parseInt(document.getElementById("numberInput").value);
  let temp = n;
  let sum = 0, r;

  while (n > 0) {
    r = n % 10;
    sum = sum * 10 + r;
    n = Math.floor(n / 10);
  }

  if (temp == sum) {
    document.getElementById("output").innerText = temp + " is a palindrome";
  } else {
    document.getElementById("output").innerText = temp + " is not a palindrome";
  }
}
