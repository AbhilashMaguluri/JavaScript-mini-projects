let voter_name = prompt("Enter the voter name ").trim();
if (!voter_name) {
    voter_name = "Not Provided";
}
document.getElementById("vn").textContent = voter_name;

let voter_age = Number(prompt("Enter the voter's age"));

if (isNaN(voter_age) || voter_age < 0) {
    document.getElementById("va").textContent = "Invalid Age";
    document.getElementById("result").textContent = "Invalid Input";
    document.getElementById("result").style.color = "red";
} else {
    document.getElementById("va").textContent = voter_age;
    if (voter_age >= 18) {
        document.getElementById("result").textContent = "Eligible to Vote";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Not Eligible to Vote";
        document.getElementById("result").style.color = "red";
    }
}
