var clicks = 0;

document.getElementById("clickme").addEventListener("click",
    function () {
        ++clicks;
        document.getElementById("counter").textContent = clicks;
    },
    false);

document.addEventListener("keydown",
    function (e) {
        document.getElementById("lastpressed").textContent = e.code;
    },
    false);
