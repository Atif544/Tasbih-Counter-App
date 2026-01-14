let count = 0;
let level = 0;

function increase() {
    count++;

    if (count === 50) {
        level++;
        count = 0;
    }

    updateUI();
}

function decrease() {
    if (count > 0) {
        count--;
    }
    updateUI();
}

function resetAll() {
    count = 0;
    level = 0;
    updateUI();
}

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("level").innerText = level;
}
