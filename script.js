/* =========================================================
   SHREYAS APTE - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("open");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");

    });

});


/* =========================================================
   TYPING EFFECT
   ========================================================= */

const typingText = document.getElementById("typing-text");

const typingWords = [
    "Cyber Security Professional",
    "Certified Ethical Hacker",
    "Founder & Director",
    "Cybersecurity Consultant",
    "Security Trainer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % typingWords.length;

        }

    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   SKILL BAR ANIMATION
   ========================================================= */

const skillBars =
    document.querySelectorAll(".skill-progress");

const skillSection =
    document.getElementById("skills");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    skillBars.forEach(bar => {

                        bar.classList.add("animate");

                    });

                    skillObserver.disconnect();

                }

            });

        },
        {
            threshold: 0.25
        }
    );


if (skillSection) {

    skillObserver.observe(skillSection);

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PROFILE IMAGE SUPPORT
   Supports PNG + JPG/JPEG
   ========================================================= */

const profileImage =
    document.getElementById("profileImage");

if (profileImage) {

    profileImage.onerror = function () {

        /*
         * If profile.png does not exist,
         * automatically try profile.jpg
         */

        if (!this.dataset.triedJpg) {

            this.dataset.triedJpg = "true";

            this.src = "profile.jpg";

        }

    };

}


/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
   ========================================================= */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(3, 7, 18, 0.92)";

    } else {

        header.style.background =
            "rgba(3, 7, 18, 0.72)";

    }

});


/* =========================================================
   MOUSE PARALLAX FOR PROFILE
   ========================================================= */

const heroImage =
    document.querySelector(".hero-image");

if (
    heroImage &&
    window.matchMedia("(min-width: 900px)").matches
) {

    document.addEventListener("mousemove", event => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 50;

        const y =
            (window.innerHeight / 2 - event.clientY) / 50;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "%c⚡ Shreyas Apte | Cyber Security Portfolio",
    "color:#00f5ff;font-size:16px;font-weight:bold;"
);

console.log(
    "%cCybersecurity is not just a technology. It's a mindset.",
    "color:#00ff88;font-size:12px;"
);
