function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const resultElement = document.getElementById('binaryResult');

    if (decimalInput.trim() === '' || isNaN(decimalInput)) {
        resultElement.textContent = '';
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);
    const binaryResult = decimalNumber.toString(2);
    resultElement.textContent = `Représentation binaire : ${binaryResult}`;
}
