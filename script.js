function getSum(a, b) {
    return a + b;
}

function displaySum() {
    const a = parseFloat(document.getElementById('sumA').value);
    const b = parseFloat(document.getElementById('sumB').value);
    document.getElementById('sumResult').innerText = `Sum: ${getSum(a, b)}`;
}





function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

function displaySquare() {
    const num = parseFloat(document.getElementById('squareNum').value);
    document.getElementById('squareResult').innerText = `${isSquare(num)}`;
}




function greeting(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

function displayGreeting() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    document.getElementById('greetingResult').innerText = greeting(firstName, lastName, age);
}





function getMin(a, b, c) {
    return Math.min(a, b, c);
}

function displayMin() {
    const a = parseFloat(document.getElementById('minA').value);
    const b = parseFloat(document.getElementById('minB').value);
    const c = parseFloat(document.getElementById('minC').value);
    document.getElementById('minResult').innerText = `Minimum: ${getMin(a, b, c)}`;
}





function evenOrOdd(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) return "even";
    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) return "odd";
    return "even/odd";
}

function displayEvenOdd() {
    const a = parseInt(document.getElementById('oddEvenA').value);
    const b = parseInt(document.getElementById('oddEvenB').value);
    const c = parseInt(document.getElementById('oddEvenC').value);
    document.getElementById('evenOddResult').innerText = `Result: ${evenOrOdd(a, b, c)}`;
}




function inOrOutRange(x, y, num) {
    return (num >= x && num <= y) ? "In range" : "Out of range";
}

function displayRange() {
    const x = parseFloat(document.getElementById('rangeX').value);
    const y = parseFloat(document.getElementById('rangeY').value);
    const num = parseFloat(document.getElementById('rangeNum').value);
    document.getElementById('rangeResult').innerText = `Result: ${inOrOutRange(x, y, num)}`;
}




function createString(min, max, step) {
    let result = '';
    for (let i = min; i <= max; i += step) {
        result += i + ' ';
    }
    return result.trim();
}

function displayString() {
    const min = parseInt(document.getElementById('strMin').value);
    const max = parseInt(document.getElementById('strMax').value);
    const step = parseInt(document.getElementById('strStep').value);
    document.getElementById('stringResult').innerText = `String: ${createString(min, max, step)}`;
}




function rangeSum1(start, end) {
    let sum = 0;
    let j = 0;
    let g=end;
    while (j != end){
        for (let i = start; i <= g; i++) {
            sum += i;
    }
    g--;
    j++;
}
    return sum;
}

function displayRangeSum1() {
    const start = parseInt(document.getElementById('rangeSum1Start').value);
    const end = parseInt(document.getElementById('rangeSum1End').value);
    document.getElementById('rangeSum1Result').innerText = `Result: ${rangeSum1(start, end)}`;
}



function rangeSum2(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

function displayRangeSum2() {
    const min = parseInt(document.getElementById('rangeSum2Min').value);
    const max = parseInt(document.getElementById('rangeSum2Max').value);
    document.getElementById('rangeSum2Result').innerText = `Result: ${rangeSum2(min, max)}`;
}



function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2);
}

function displaySeriesSum() {
    const n = parseInt(document.getElementById('seriesSumN').value);
    document.getElementById('seriesSumResult').innerText = `Series sum: ${seriesSum(n)}`;
}



function countDigits(num) {
    return num.toString().length;
}

function displayCountDigits() {
    const num = parseInt(document.getElementById('countDigitsNum').value);
    document.getElementById('countDigitsResult').innerText = `Number of digits: ${countDigits(num)}`;
}
