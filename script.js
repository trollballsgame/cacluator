function gebqs (selector) {
  return document.querySelector(selector);
}
let open = false
let valueR = 0
let valueX = 0
let valueY = 0
let operation = '';
const result = gebqs('#result')
const X = gebqs('#X')
const Y = gebqs('#Y')
const operationbutton = gebqs('#operationbutton')
function updateValues() {
    result.textContent = `X: ${valueX}, Y: ${valueY}, result: ${valueR}`;
}
function copyresult() {
    const copyText = valueR.toString();
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied the text: " + copyText);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert("Failed to copy text to clipboard");
    });
}
setInterval(() => {
    operation = gebqs('#operationbutton').value.trim();
    valueX = parseFloat(X.value);
    valueY = parseFloat(Y.value);
    operation = operationbutton.value.trim();
    if (operation === 'add' || operation === '+') {
        valueR = valueX + valueY;
    } else if (operation === 'subtract' || operation === '-') {
        valueR = valueX - valueY;
    } else if (operation === 'multiply' || operation === '*') {
        valueR = valueX * valueY;
    } else if (operation === 'divide' || operation === '/') {
        valueR = valueX / valueY;
    } else if (operation === 'modulo' || operation === '%') {
        valueR = valueX % valueY;
    } else if (operation === 'power' || operation === '^') {
        valueR = Math.pow(valueX, valueY);
    } else if (operation === 'mean' || operation === 'm') {
        valueR = (valueX + valueY) / 2;
    } else if (operation === 'min' || operation === '<<') {
        valueR = Math.min(valueX, valueY);
    } else if (operation === 'max' || operation === '>>') {
        valueR = Math.max(valueX, valueY);
    } else if (operation === 'sqrtX' || operation === '√X') {
        valueR = Math.sqrt(valueX);
    } else if (operation === 'logX' || operation === 'lnX') {
        valueR = Math.log(valueX);
    } else if (operation === 'expX' || operation === 'e^x') {
        valueR = Math.exp(valueX);
    } else if (operation === 'sqrtY' || operation === '√Y') {
        valueR = Math.sqrt(valueY);
    } else if (operation === 'logY' || operation === 'lnY') {
        valueR = Math.log(valueY);
    } else if (operation === 'expY' || operation === 'e^y') {
        valueR = Math.exp(valueY);
    } else if (operation === 'equal' || operation === '==') {
        valueR = valueX === valueY ? true : false;
    } else if (operation === 'unequal' || operation === '!=') {
        valueR = valueX !== valueY ? true : false;
    } else if (operation === 'hypot' || operation === 'h') {
        valueR = Math.hypot(valueX, valueY);
    } else if (operation === 'percent' || operation === '%%') {
        valueR = (valueX / valueY) * 100 + '%';
    } else if (operation === 'randomizer' || operation === 'r') {
        valueR = Math.floor(Math.random() * (valueY - valueX + 1)) + valueX;
    } else if (operation === 'roundX' || operation === 'rx') {
        valueR = Math.round(valueX);
    } else if (operation === 'roundY' || operation === 'ry') {
        valueR = Math.round(valueY);
    } else if (operation === 'greater' || operation === '>') {
        valueR = valueX > valueY ? true : false;
    } else if (operation === 'less' || operation === '<') {
        valueR = valueX < valueY ? true : false;
    } else if (operation === 'greaterequal' || operation === '>=') {
        valueR = valueX >= valueY ? true : false;
    } else if (operation === 'lessequal' || operation === '<=') {
        valueR = valueX <= valueY ? true : false;
    } else if (operation === 'CsX' || operation === '++X') {
        valueR = -valueX;
    } else if (operation === 'CsY' || operation === '++Y') {
        valueR = -valueY;
    } else if (operation === '') {
        valueR = "pick an operation";
    } else {
        valueR = "unknown operation";
    }
    updateValues();
}, 1000)