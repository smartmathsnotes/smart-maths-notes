function showAllAnswersLog() {
    const x = document.getElementById("answer-key-log");
    const btn = document.getElementById("check-btn-log");

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        btn.textContent = "Hide Answers";
        btn.style.backgroundColor = "#e74c3c"; // Changes to Red
    } else {
        x.style.display = "none";
        btn.textContent = "Check All Answers";
        btn.style.backgroundColor = "#4a90e2"; // Changes back to Blue
    }
}

