function getNumbers(a) {
    return function sumOfTwoNumbers(b) {
      return a + b;
    };
  }
  firstNumber=+prompt('Введите любое число ->');
  secondNumber=+prompt('Введите любое число ->');
  let result = getNumbers(firstNumber)(secondNumber);
  alert("Их сумма равна " + result);