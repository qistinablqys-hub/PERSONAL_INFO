// Function to handle Modal Windows Opening/Closing
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// =====================================
// Tool 1: Simple Calculator
// =====================================
function calculate(operator) {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let res = document.getElementById('calcRes');

    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    let final = 0;
    if (operator === '+') final = n1 + n2;
    if (operator === '-') final = n1 - n2;
    if (operator === '*') final = n1 * n2;
    if (operator === '/') final = n2 !== 0 ? n1 / n2 : "Error: Div by zero";

    res.innerHTML = `Result: <strong>${final}</strong>`;
}

// =====================================
// Tool 2: BMI Checker (Fixed: Uses CM)
// =====================================
function checkBMI() {
    let weight = parseFloat(document.getElementById('bmiWeight').value);
    let heightCm = parseFloat(document.getElementById('bmiHeight').value);
    let res = document.getElementById('bmiRes');

    if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
        res.innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    // Convert CM to Meters behind the scenes
    let heightM = heightCm / 100;
    
    // Formula: kg / (m * m)
    let bmi = weight / (heightM * heightM);
    let status = "";
    
    if (bmi < 18.5) status = "Pergi Kuruskan Badan Sana! 🥺";
    else if (bmi < 24.9) status = "Nice Bro, Keep it Up! 😎";
    else if (bmi < 29.9) status = "Suh Makan Sikit Kau Gi Melahap! 😅";
    else status = "Obese";

    res.innerHTML = `BMI: <strong>${bmi.toFixed(2)}</strong> (${status})`;
}

// =====================================
// Tool 3: Income Tax Calculator
// =====================================
function checkTax() {
    let income = parseFloat(document.getElementById('taxIncome').value);
    let res = document.getElementById('taxRes');

    if (isNaN(income) || income < 0) {
        res.innerHTML = "⚠️ Enter valid income.";
        return;
    }

    let tax = 0;
    if (income > 50000) tax = 1800 + (income - 50000) * 0.13;
    else if (income > 35000) tax = 600 + (income - 35000) * 0.08;
    else if (income > 20000) tax = 150 + (income - 20000) * 0.03;
    else if (income > 5000) tax = (income - 5000) * 0.01;

    res.innerHTML = `Estimated Tax: <strong>RM ${tax.toFixed(2)}</strong>`;
}

// =====================================
// Tool 4: Unit Converter
// =====================================
function convertUnit(type) {
    let val = parseFloat(document.getElementById('unitInput').value);
    let res = document.getElementById('unitRes');

    if (isNaN(val)) {
        res.innerHTML = "⚠️ Enter a value first.";
        return;
    }

    let final = 0, unitStr = "";
    if (type === 'cmToM') { final = val / 100; unitStr = "m"; }
    if (type === 'mToCm') { final = val * 100; unitStr = "cm"; }
    if (type === 'mToKm') { final = val / 1000; unitStr = "km"; }
    if (type === 'kmToM') { final = val * 1000; unitStr = "m"; }

    res.innerHTML = `Result: <strong>${final} ${unitStr}</strong>`;
}
