const scrollUp = document.querySelector("#scroll-up");
const checkbox = document.querySelector("#checkbox");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navTitle = document.querySelector("#nav-title");
const navLink = document.querySelectorAll("#nav-link");
const headerTextHear = document.querySelector(".intro-text .hear");
const headerTextConnecting = document.querySelector(".intro-text .connecting");
const headerTextSub = document.querySelector(".intro-text .sub");
const blckBtnText = document.querySelector(".intro-text .black");
const blueBtnText = document.querySelector(".intro-text .blue");
const iframe = document.querySelector(".i-frame iframe");
const aboutHeaderTextHear = document.querySelector(".about .hear");
const aboutTextConnecting = document.querySelector(".about .connecting");
const secondAboutHeaderText = document.querySelector(".about h3:nth-child(3)");
const secondAboutText = document.querySelector(".about p:nth-child(4)");
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");

    // Update header text based on theme
    if (document.body.classList.contains("dark")) {
        navTitle.textContent = "The Abysmal EP";
        navLink.forEach((link) => {
            if (link.textContent === "Perfect") {
                link.textContent = "Abysmal";
            }
        });
        headerTextHear.textContent = "Let me ask you this question";
        headerTextConnecting.textContent = "Before you leave";
        headerTextSub.textContent = "I plead";
        blckBtnText.textContent = "Save me";
        blueBtnText.textContent = "from these emotions";
        aboutHeaderTextHear.textContent = "It's hard to process";
        aboutTextConnecting.textContent = "All these things";
        secondAboutHeaderText.textContent = "I never ask for much";
        secondAboutText.textContent = "Don't leave before you answer";

        // Change iframe source
        iframe.src = "https://www.youtube.com/embed/2KmKl_gRlDs?si=-_qnijLBgJ0vw_U5";
    } else {
        navTitle.textContent = "perfect blues";
        navLink.forEach((link) => {
            if (link.textContent === "Abysmal") {
                link.textContent = "Perfect";
            }
        });
        headerTextHear.textContent = "Playing the perfect blues";
        headerTextConnecting.textContent = "Happy moments, take a breath";
        headerTextSub.textContent = "Singing a perfect tune";
        blckBtnText.textContent = "Feeling creatures";
        blueBtnText.textContent = "in the depth";
        aboutHeaderTextHear.textContent = "Perfect background, perfect light.";
        aboutTextConnecting.textContent = "Perfect scenery, perfect sight";
        secondAboutHeaderText.textContent = "Perfect sunshine, perfect night";
        secondAboutText.textContent = "Perfect everything, perfect life";

        // Change iframe source back to original
        iframe.src = "https://www.youtube.com/embed/M-9PLDrC_vQ?si=FhA4hS-BRNRNuoy1";
    }
});

hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
