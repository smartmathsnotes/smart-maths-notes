/* ================= ANSWERS TOGGLE ================= */
function showAllAnswers() {
    const x = document.getElementById("answer-key");
    const btn = document.getElementById("check-btn");

    if (!x || !btn) return;

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        btn.textContent = "Hide Answers";
        btn.style.backgroundColor = "#e74c3c";
    } else {
        x.style.display = "none";
        btn.textContent = "Check All Answers";
        btn.style.backgroundColor = "#4a90e2";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const hamburgers = document.querySelectorAll(".hamburger");

    hamburgers.forEach(hamburger => {
        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();

            const menu = hamburger.parentElement.querySelector(".mobile-menu");
            if (!menu) return;

            menu.classList.toggle("show");
        });
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".mobile-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    });

});
/* =====================================================
   🔥 3. SEARCH PLACEHOLDER FIX
===================================================== */
function setSearchPlaceholder() {
    const input = document.getElementById("topicSearch");
    if (!input) return;

    if (window.innerWidth <= 768) {
        input.placeholder = "Search Maths";
    } else {
        input.placeholder = "Search Maths Topics...";
    }
}

window.addEventListener("load", setSearchPlaceholder);
window.addEventListener("resize", setSearchPlaceholder);

let isResizing = false;

window.addEventListener("resize", () => {
    isResizing = true;
    setTimeout(() => isResizing = false, 200);
});


/* =====================================================
   🔥 4. DROPDOWN FIX
===================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");

    if (!dropBtn || !dropdown) return;

    dropBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });
document.addEventListener("click", function (e) {
    if (e.target.closest(".dropdown")) return;
    if (e.target.closest(".dropbtn")) return;

    dropdown.classList.remove("active");
});
});


/* =====================================================
   🔥 5. NAVBAR AUTO HIDE ON SCROLL (ALL PAGES)
===================================================== */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        navbar.style.top = "-100px";
    } else {
        // scrolling up → show
        navbar.style.top = "0";
    }

    lastScrollY = window.scrollY;
});

window.addEventListener("orientationchange", () => {
    lastScrollY = window.scrollY;
});