function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        // Using eval to handle the math expressions for basic and scientific functions
        display = eval(display);
        document.getElementById('display').value = display;
    } catch (error) {
        document.getElementById('display').value = 'Error!';
    }
}

// Conversion function (Length, Weight, Temperature)
function convert(type) {
    let inputValue = prompt(`Enter value to convert:`);

    if (isNaN(inputValue) || inputValue === '') {
        alert('Invalid input!');
        return;
    }

    let result;
    inputValue = parseFloat(inputValue);

    if (type === 'length') {
        result = convertLength(inputValue);
    } else if (type === 'weight') {
        result = convertWeight(inputValue);
    } else if (type === 'temperature') {
        result = convertTemperature(inputValue);
    }

    alert(`Converted Value: ${result}`);
}

function convertLength(value) {
    // Conversion between meters and kilometers (can expand to other units)
    let kilometers = value / 1000;
    return `${value} meters = ${kilometers.toFixed(2)} kilometers`;
}

function convertWeight(value) {
    // Conversion from kilograms to pounds (can expand to other units)
    let pounds = value * 2.20462;
    return `${value} kg = ${pounds.toFixed(2)} lbs`;
}

function convertTemperature(value) {
    // Conversion between Celsius and Fahrenheit
    let fahrenheit = (value * 9/5) + 32;
    let celsius = (value - 32) * 5/9;
    return `${value}°C = ${fahrenheit.toFixed(2)}°F | ${value}°F = ${celsius.toFixed(2)}°C`;
}

// Handling scientific functions
function appendScientific(func) {
    // Append function name and open parenthesis
    document.getElementById('display').value += func + '(';
}
