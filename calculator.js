const OPERATIONS = ["+", "-", "*", "/", undefined];
const NUMBER_LIMIT = 1000;

function validateType(array, type) {
  array.forEach((element) => {
    if (typeof element !== type) throw new Error("Invalid input type");
  });
}

function validateOperators(array) {
  array.forEach((element) => {
    if (!OPERATIONS.includes(element)) throw new Error("Invalid operator");
  });
}

function applyOperation(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Division by zero");
      return num1 / num2;

    default:
      throw new Error("Unknown operation");
  }
}

const precedence = (op) => {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
};

function calculator(calculatorInputs) {
  var {
    num1,
    operation1,
    num2,
    operation2 = undefined,
    num3 = 0,
  } = calculatorInputs;

  validateType([num1, num2, num3], "number");
  validateOperators([operation1, operation2]);

  // Task Prerequsitie: ignore numbers bigger than NUMBER_LIMIT
  if (num1 > NUMBER_LIMIT) num1 = 0;
  if (num2 > NUMBER_LIMIT) num2 = 0;
  if (num3 > NUMBER_LIMIT) num3 = 0;

  if (!operation2) return applyOperation(num1, num2, operation1);
  else {
    let total;
    if (precedence(operation1) > precedence(operation2)) {
      total = applyOperation(num1, num2, operation1);
      return applyOperation(total, num3, operation2);
    } else {
      total = applyOperation(num2, num3, operation2);
      return applyOperation(num1, total, operation1);
    }
  }
}

module.exports = calculator;
