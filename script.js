/* =====================================
   PAGE NAVIGATION
===================================== */

let currentPage = 1;

const totalPages = 5;


function showPage(pageNumber) {

    if (pageNumber < 1) {
        pageNumber = 1;
    }

    if (pageNumber > totalPages) {
        pageNumber = totalPages;
    }

    currentPage = pageNumber;

    document.querySelectorAll(".page").forEach((page, index) => {

        page.classList.remove("active");

        if (index === pageNumber - 1) {
            page.classList.add("active");
        }

    });


    /* UPDATE DOTS */

    document.querySelectorAll(".dot").forEach((dot, index) => {

        dot.classList.remove("active-dot");

        if (index === pageNumber - 1) {
            dot.classList.add("active-dot");
        }

    });

}


/* NEXT */

function nextPage() {

    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }

}


/* PREVIOUS */

function previousPage() {

    if (currentPage > 1) {
        showPage(currentPage - 1);
    }

}


/* RESTART */

function goHome() {

    showPage(1);

}


/* =====================================
   LIGHT DIYA
===================================== */

function lightDiya(button) {

    button.innerHTML = "🪔 Diya is glowing ✨";

    button.style.background =
        "linear-gradient(135deg, #e0ad6f, #efc88d)";

    flowerShower();

}


/* =====================================
   FLOWER SHOWER
===================================== */

function flowerShower() {

    const flowers = [
        "🌸",
        "🌼",
        "🌺",
        "✿",
        "❀"
    ];

    for (let i = 0; i < 25; i++) {

        const petal =
            document.createElement("div");

        petal.className = "floating-petal";

        petal.innerHTML =
            flowers[Math.floor(Math.random() * flowers.length)];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        petal.style.fontSize =
            (14 + Math.random() * 14) + "px";

        document.body.appendChild(petal);


        setTimeout(() => {

            petal.remove();

        }, 4000);

    }

}


/* =====================================
   SHOW MUSHAK
===================================== */

function showMushak() {

    const mushak =
        document.querySelector(".mushak-image");

    if (mushak) {

        mushak.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

    flowerShower();

}


/* =====================================
   OFFER MODAK
===================================== */

function offerModak(element) {

    const modak =
        document.querySelector(".modak-image");

    if (!modak) return;


    modak.classList.remove("offered");


    void modak.offsetWidth;


    modak.classList.add("offered");


    if (element.tagName === "BUTTON") {

        element.innerHTML =
            "Modak offered to Bappa ♡";

    }

    flowerShower();

}


/* =====================================
   RING BELL
===================================== */

function ringBell(button) {

    button.innerHTML = "🔔 Ting Ting! ✨";

    flowerShower();

}


/* =====================================
   CELEBRATION
===================================== */

function celebrate() {

    const mushak =
        document.getElementById("mushak");

    if (mushak) {

        mushak.classList.remove("mushak-run");

        void mushak.offsetWidth;

        mushak.classList.add("mushak-run");

    }

    flowerShower();

}


/* =====================================
   KEYBOARD NAVIGATION
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }

});


/* =====================================
   START ON PAGE 1
===================================== */

showPage(1);
