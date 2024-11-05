let diagnosisHistory = [];

function diagnose() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const appetite = document.getElementById("appetite").value.toLowerCase();
    const thirst = document.getElementById("thirst").value.toLowerCase();
    const urination = document.getElementById("urination").value.toLowerCase();
    const vision = document.getElementById("vision").value.toLowerCase();
    const urineSugar = document.getElementById("urineSugar").value.toLowerCase();
    const fastingSugar = document.getElementById("fastingSugar").value.toLowerCase();
    const familyHistory = document.getElementById("familyHistory").value.toLowerCase();

    let resultMessage = "";
    let tipsMessage = "";

    // Basic analysis for diagnosis
    if (appetite === "h" && thirst === "h" && urination === "h") {
        resultMessage = `${name}, aged ${age} (${gender}), 🩸 High risk of diabetes detected. Please consult a doctor.`;
        tipsMessage = "💡 Tips: Maintain a balanced diet, exercise regularly, and monitor your blood sugar levels. Avoid sugary snacks.";
    } else if (fastingSugar === "h" || urineSugar === "a") {
        resultMessage = `${name}, aged ${age} (${gender}), 🔍 Possible diabetes. It's advisable to get tested.`;
        tipsMessage = "💡 Tips: Reduce intake of refined carbs, increase physical activity, and consider regular check-ups.";
    } else {
        resultMessage = `${name}, aged ${age} (${gender}), ✅ Low risk of diabetes.`;
        tipsMessage = "💡 Tips: Keep a healthy lifestyle with a balanced diet and regular exercise.";
    }

    // Display result
    document.getElementById("result").innerText = resultMessage;

    // Display tips
    document.getElementById("tips").innerText = tipsMessage;
    document.getElementById("tips").style.display = "block"; // Show tips section

    // Add result to history
    const historyEntry = `Diagnosis: ${resultMessage}`;
    diagnosisHistory.push(historyEntry);
    displayHistory();
}

function displayHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "<h3>Diagnosis History</h3>"; // Clear previous history title
    diagnosisHistory.forEach((entry, index) => {
        historyDiv.innerHTML += `<p>${index + 1}: ${entry}</p>`;
    });
}

function resetForm() {
    document.getElementById("diagnosis-form").reset(); // Reset the form inputs
    document.getElementById("result").innerText = ""; // Clear result
    document.getElementById("tips").innerText = ""; // Clear tips
    document.getElementById("tips").style.display = "none"; // Hide tips section
    diagnosisHistory = []; // Clear history
    displayHistory(); // Update history display
}
