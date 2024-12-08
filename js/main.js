let days = document.querySelector(".events .days");
let hours = document.querySelector(".events .hours");
let minutes = document.querySelector(".events .minutes");
let seconds = document.querySelector(".events .seconds");

let skillsSection = document.querySelector("section.our-skills");
let skillBars = document.querySelectorAll("section.our-skills .progress-bar .bar");

let statsSection = document.querySelector(".statistics");
let statsNumbers = document.querySelectorAll("span[data-target]");
let animationStarted = false;


let countDown = setInterval(() => {
    let EOY = new Date("2024-12-31T23:59:59").getTime();
    let dateDiff = EOY - Date.now();
    let d = `${Math.floor(dateDiff / (1000 * 60 * 60 * 24))}`;
    let h = `${Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`;
    let m = `${Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))}`;
    let s = `${Math.floor((dateDiff % (1000 * 60)) / 1000)}`;

    days.innerText = d.length < 2 ? `0${d}` : d;
    hours.innerText = h.length < 2 ? `0${h}` : h;
    minutes.innerText = m.length < 2 ? `0${m}` : m;
    seconds.innerText = s.length < 2 ? `0${s}` : s;

    if (dateDiff < 0) clearInterval(countDown);

}, 1000);


window.onscroll = function () {
    if (scrollY >= skillsSection.offsetTop) {

        skillBars.forEach(function (bar) {
            bar.style.width = bar.dataset.width;
        });
    }

    if (scrollY >= statsSection.offsetTop - 100 && !animationStarted) {
        statsNumbers.forEach((num) => statsAnnimation(num));
        animationStarted = true;
    }
}

function statsAnnimation(num) {
    let animation = setInterval(function () {
        num.textContent++;

        if (num.textContent == num.dataset.target) clearInterval(animation);
    }, 1000 / num.dataset.target);
}