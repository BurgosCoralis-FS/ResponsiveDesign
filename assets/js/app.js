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
const allImages = document.querySelectorAll(".stars-gallery img");

allImages.forEach(image => {
    // Do something with each image here
    console.log(image.src); // Log the source of each image
});

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
        //change font
        document.querySelector("body").style.fontFamily = "Rock Salt"
        //change title
        navTitle.textContent = "The Abysmal EP";

        //change nav links
        navLink.forEach((link) => {
            if (link.textContent === "Perfect") {
                link.textContent = "Abysmal";
            }
        });

        //change lyrics
        headerTextHear.textContent = "Let me ask you this question";
        headerTextConnecting.textContent = "Before you leave";
        headerTextSub.textContent = "I plead";
        blckBtnText.textContent = "Save me";
        blueBtnText.textContent = "from these emotions";
        aboutHeaderTextHear.textContent = "It's hard to process";
        aboutTextConnecting.textContent = "All these things";
        secondAboutHeaderText.textContent = "I never ask for much";
        secondAboutText.textContent = "Don't leave before you answer";

        //change images
        allImages.forEach(image => {
            console.log(image.alt);
            if (image.alt === "album cover") {
                image.src = "assets/images/the-abysmal-ep.png";
            } else if (image.alt === "Hannah on a surf boat") {
                image.src = "assets/images/hannah5.webp";
            } else if (image.alt === "Hannah with waves behind her") {
                image.src = "assets/images/hannah6.webp";
            } else if (image.alt === "Hannah taking a selfie at the beach") {
                image.src = "assets/images/hannah7.webp";
            } else if (image.alt === "Hannah looking straight at the camera") {
                image.src = "assets/images/hannah8.jpeg";
            }
        });

        // Change iframe source
        iframe.src = "https://www.youtube.com/embed/2KmKl_gRlDs?si=-_qnijLBgJ0vw_U5";
    } else {
        //change font back to original
        document.querySelector("body").style.fontFamily = "Caveat"
        
        // change title back to original
        navTitle.textContent = "perfect blues";

        // change nav links back to original
        navLink.forEach((link) => {
            if (link.textContent === "Abysmal") {
                link.textContent = "Perfect";
            }
        });

        // change lyrics back to original
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

        //change images back to original
        allImages.forEach(image => {
            console.log(image.alt);
            if (image.alt === "album cover") {
                image.src = "assets/images/cover.jpeg";
            } else if (image.alt === "Hannah on a surf boat") {
                image.src = "assets/images/hannah1.jpeg";
            } else if (image.alt === "Hannah with waves behind her") {
                image.src = "assets/images/hannah2.png";
            } else if (image.alt === "Hannah taking a selfie at the beach") {
                image.src = "assets/images/hannah3.jpeg";
            } else if (image.alt === "Hannah looking straight at the camera") {
                image.src = "assets/images/hannah4.webp";
            }
        });
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
