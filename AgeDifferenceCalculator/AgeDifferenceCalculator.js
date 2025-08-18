function calculateAge() {
    let dobInput1 = document.getElementById("dob1").value;
    let dobInput2 = document.getElementById("dob2").value;

    if (!dobInput1 || !dobInput2) {
        document.getElementById("result").innerText = "Please enter both dates.";
        return;
    }

    let dob1 = new Date(dobInput1);
    let dob2 = new Date(dobInput2);

    // Always make dob1 the smaller date
    if (dob1 > dob2) {
        let temp = dob1;
        dob1 = dob2;
        dob2 = temp;
    }

    let years = dob2.getFullYear() - dob1.getFullYear();
    let months = dob2.getMonth() - dob1.getMonth();
    let days = dob2.getDate() - dob1.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(dob2.getFullYear(), dob2.getMonth(), 0).getDate();
        days += prevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        "The age difference is: " + years + " years " + months + " months " + days + " days";
}
