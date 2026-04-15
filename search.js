const topics = [
    { name: "Linear Equations", link: "linear-equations.html" },
    { name: "Simultaneous Linear Equations", link: "simultaneous-linear-equations.html" },
    { name: "Quadratic Equations", link: "quadratic-equations.html" },
    { name: "Exponents and Logarithms", link: "exponents-and-logarithms.html" },
    { name: "Advanced Logarithms", link: "advanced-logarithms.html" },
];

// SHOW SUGGESTIONS
function showSuggestions() {
    let input = document.getElementById('topicSearch').value.toLowerCase().trim();
    let box = document.getElementById('suggestionsBox');

    box.innerHTML = "";

    if (!input) {
        box.style.display = "none";
        return;
    }

    let filtered = topics.filter(t =>
        t.name.toLowerCase().includes(input)
    );

    box.style.display = "block";

    if (filtered.length === 0) {
        let div = document.createElement("div");
        div.textContent = "Topic not found...";
        div.style.padding = "15px";
        div.style.color = "#666";
        box.appendChild(div);
        return;
    }

    filtered.forEach(t => {
        let a = document.createElement("a");
        a.href = t.link;
        a.textContent = t.name;

        // IMPORTANT FIX: prevent dropdown from closing too early on mobile
        a.addEventListener("click", function () {
            box.style.display = "none";
        });

        box.appendChild(a);
    });
}

// EXECUTE SEARCH
function executeSearch() {
    let input = document.getElementById('topicSearch').value.toLowerCase().trim();

    if (!input) return;

    let match = topics.find(t => t.name.toLowerCase() === input)
             || topics.find(t => t.name.toLowerCase().includes(input));

    if (match) {
        window.location.href = match.link;
    } else {
        alert("Sorry, we don't have notes on '" + input + "' yet.");
    }
}

// CLICK OUTSIDE TO CLOSE (FIXED FOR MOBILE + NAV AREA)
document.addEventListener('click', function (e) {
    let searchBox = document.getElementById('topicSearch');
    let dropdown = document.getElementById('suggestionsBox');
    let isClickInsideSearch = searchBox.contains(e.target);
    let isClickInsideDropdown = dropdown.contains(e.target);

    if (!isClickInsideSearch && !isClickInsideDropdown) {
        dropdown.style.display = "none";
    }
});