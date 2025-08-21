function createInputs() {
    let numSubjects = document.getElementById("numSubjects").value;
    let container = document.getElementById("marksContainer");
    container.innerHTML = ""; // clear old inputs

    for (let i = 0; i < numSubjects; i++) {
        container.innerHTML += `
            <div class="subject-input">
                <label>Subject ${i + 1}:</label>
                <input type="number" id="mark${i}" placeholder="Obtained" min="0">
                <input type="number" id="max${i}" placeholder="Max" min="1">
            </div>
        `;
    }

    document.getElementById("calcBtn").style.display = "inline-block";
}

function calculatePercentage() {
    let numSubjects = document.getElementById("numSubjects").value;
    let totalObtained = 0;
    let totalMax = 0;

    for (let i = 0; i < numSubjects; i++) {
        let obtained = parseFloat(document.getElementById("mark" + i).value) || 0;
        let max = parseFloat(document.getElementById("max" + i).value) || 0;

        totalObtained += obtained;
        totalMax += max;
    }

    let percentage = ((totalObtained / totalMax) * 100).toFixed(2);

    document.getElementById("result").innerHTML =
        `<strong>Total Obtained:</strong> ${totalObtained} / ${totalMax}<br>
         <strong>Percentage:</strong> ${percentage}%`;
}
