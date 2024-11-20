// Append a value to the calculator display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;

    // Change the background color of the display to match button styles
    display.style.backgroundColor = "#6c757d"; // Button style background
    display.style.color = "#f8f9fa"; // Light text color
}

// Clear the calculator display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';

    // Reset input field to default style
    display.style.backgroundColor = "#495057"; // Default input background
    display.style.color = "#ffffff"; // Default text color
}

// Calculate the result of the expression
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace "×" with "*" for multiplication and evaluate the expression
        const result = eval(display.value.replace(/×/g, '*'));
        display.value = result;
    } catch (e) {
        display.value = 'Error'; // Display error if invalid expression
    }
}
