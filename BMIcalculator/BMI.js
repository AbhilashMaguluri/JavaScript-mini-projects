function calculateBMI() {
    let height = parseFloat(document.getElementById("ht").value);
    let weight = parseFloat(document.getElementById("wt").value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }
    height = height / 100;
    let bmi = (weight) / (height * height);
    document.getElementById("bmi").innerText = bmi.toFixed(2);


    if (bmi < 18.5) {
        document.getElementById("result").innerText = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("result").innerText = "Normal weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("result").innerText = "Overweight";
    }
    else if (bmi >= 30) {
        document.getElementById("result").innerText = "Obesity";
    }
}
