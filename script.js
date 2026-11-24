let currentInput = "0";
let previousInput = "";
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = currentInput.replace(".", ",");
}

function appendNumber(number) {
    if (currentInput === "Fout" || shouldResetDisplay) {
        currentInput = "0";
        shouldResetDisplay = false;
    }

    if (number === "." && currentInput.includes(".")) {
        return;
    }

    if (number === ".") {
        currentInput += ".";
    } else if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function toggleSign() {
    if (currentInput === "Fout") return;

    currentInput = String(-Number(currentInput));
    updateDisplay();
}

function percentage() {
    if (currentInput === "Fout") return;

    currentInput = String(Number(currentInput) / 100);
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === "Fout") return;

    if (operator !== null && !shouldResetDisplay) {
        calculate();
        if (currentInput === "Fout") return;
    }

    previousInput = currentInput;
    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === null || previousInput === "") return;

    const previous = Number(previousInput);
    const current = Number(currentInpt);

    let result;

    switch (operator) {
        case "+":
            result = previous + current;
            break;
        case "-":
            result = previous - current;
            break;
        case "*":
            result = previous * current;
            break;
        case "/":
            result = current === 0 ? NaN : previous / current;
            break;
        default:
            return;
    }

    currentInput = Number.isFinite(result)
        ? String(Number(result.toPrecision(12)))
        : "Fout";

    previousInput = "";
    operator = null;
    shouldResetDisplay = true;

    updateDisplay();
}

updateDisplay();