function subtract() {

    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let digitFirstNum = Number(firstNumber.value);
    
    let digitSecondNum = Number(secondNumber.value);
    let result = document.getElementById('result');
    result.textContent = digitFirstNum - digitSecondNum

}