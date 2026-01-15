let count = 0;
let level = 1;

function updateCounter() {
    const counter = document.getElementById("counter");
    counter.innerText = count;

    counter.style.transform = "scale(1.25)";
    setTimeout(() => counter.style.transform = "scale(1)", 150);
}

function showMessage(text) {
    const msg = document.getElementById("message");
    msg.innerText = text;
    msg.classList.add("show");

    setTimeout(() => {
        msg.innerText = "";
        msg.classList.remove("show");
    }, 2000);
}

function increase() {
    count++;

    if (count === 10) {
        level++;
        document.getElementById("level").innerText = level;
        showMessage("🎉 Level Up! 10 is done!");
        count = 0;
    }

    updateCounter();
}

function decrease() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function reset() {
    count = 0;
    level = 1;
    document.getElementById("level").innerText = level;
    document.getElementById("message").innerText = "";
    updateCounter();
}
