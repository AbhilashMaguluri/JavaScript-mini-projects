function calculateNotes() {
  let amount = parseInt(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("count").innerHTML = "Please enter a valid amount!";
    return;
  }

  const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  let NOTES = "";
  let COUNT = "";

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    let count = Math.floor(amount / note); 

    if (count > 0) {
      NOTES += "₹" + note + "<br>";
      COUNT += count + "<br>";
      amount = amount % note; 
    }
  }

  document.getElementById("notes").innerHTML = NOTES;
  document.getElementById("count").innerHTML = COUNT;
}
