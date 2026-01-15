let count = 0;
let tasbih = 0;
let goal = 0;

const COUNT_LIMIT = 100;   
const TASBIH_LIMIT = 10;  

function increase() {
    count++;

    if (count === COUNT_LIMIT) {
        tasbih++;
        count = 0;
    }

    if (tasbih === TASBIH_LIMIT) {
        goal++;
        tasbih = 0;
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
    tasbih = 0;
    goal = 0;
    updateUI();
}

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("tasbih").innerText = tasbih;
    document.getElementById("goal").innerText = goal;
}
