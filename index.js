var clicks = 0;

document.getElementById("clickme").addEventListener("click",
    function () {
        ++clicks;
        document.getElementById("counter").innerHTML = clicks;
    },
    false);
