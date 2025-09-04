const checkbox = document.querySelector("#checkbox");
const navTitle = document.querySelector("#nav-title");
const headerTextMain = document.querySelector(".intro-text h1:first-child"); 
const headerTextSpan = document.querySelector(".intro-text h1:first-child span");
const headerTextSub = document.querySelector(".intro-text .sub");
const leftBtnText = document.querySelector(".buttons .left");
const rightBtnText = document.querySelector(".buttons .right");
const iframe = document.querySelector(".i-frame iframe");
const navLinks = document.querySelectorAll("nav a"); 

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        document.body.style.fontFamily = "Rock Salt";
        navTitle.textContent = "Abysmal";

        navLinks.forEach((link) => {
            if (link.textContent === "Perfect") {
                link.textContent = "Abysmal";
            }
        });

        headerTextMain.firstChild.textContent = "Let me ask you this question";
        headerTextSpan.textContent = "Before you leave";
        headerTextSub.textContent = "I plead";
        leftBtnText.textContent = "Save me";
        rightBtnText.textContent = "From these emotions";

        iframe.src = "https://www.youtube.com/embed/2KmKl_gRlDs?si=-_qnijLBgJ0vw_U5";
    } else {
        document.body.style.fontFamily = "Caveat";
        navTitle.textContent = "Perfect Blues";

        navLinks.forEach((link) => {
            if (link.textContent === "Abysmal") {
                link.textContent = "Perfect";
            }
        });

        headerTextMain.firstChild.textContent = "Playing the perfect blues";
        headerTextSpan.textContent = "Happy moments, take a breath";
        headerTextSub.textContent = "Singing a perfect tune";
        leftBtnText.textContent = "Feeling creatures";
        rightBtnText.textContent = "In the depth";

        iframe.src = "https://www.youtube.com/embed/M-9PLDrC_vQ?si=FhA4hS-BRNRNuoy1";
    }
});