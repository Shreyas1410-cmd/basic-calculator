function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display); // Uses eval to calculate the expression
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
