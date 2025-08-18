function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    let today = new Date();
    let dob = new Date(dobInput);

    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        dayDiff += prevMonth;
    }

    if (monthDiff < 0) {
        age--;
        monthDiff += 12;
    }

    document.getElementById("result").innerText =
        "Your Age is : " + age + " years " + monthDiff + " months " + dayDiff + " days ";
}
