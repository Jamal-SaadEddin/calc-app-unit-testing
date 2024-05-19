function validateType(array, type) {
  for (let i = 0; i < array.length; i++)
    if (typeof array[i] !== type) throw new Error("Invalid input type");
  return;
}

function validateOperators(array) {
  for (let i = 0; i < array.length; i++)
    if (
      array[i] !== "+" &&
      array[i] !== "-" &&
      array[i] !== "*" &&
      array[i] !== "/" &&
      array[i] !== undefined
    )
      throw new Error("Invalid operator");
  return;
}

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

  if (num1 > 1000) num1 = 0;
  if (num2 > 1000) num2 = 0;
  if (num3 > 1000) num3 = 0;

  if (!operation2) {
    if (operation1 === "+") return num1 + num2;
    else if (operation1 === "-") return num1 - num2;
    else if (operation1 === "*") return num1 * num2;
    else if (operation1 === "/" && num2 === 0)
      throw new Error("Division by zero");
    else if (operation1 === "/") return num1 / num2;
  } else {
    let total = 0;

    if (operation1 === "*" || operation1 === "/") {
      if (operation1 === "*") total = num1 * num2;
      else if (operation1 === "/" && num2 === 0)
        throw new Error("Division by zero");
      else if (operation2 === "/") total = num1 / num2;

      if (operation2 === "+") total += num3;
      else if (operation2 === "-") total -= num3;
      else if (operation2 === "*") total *= num3;
      else if (operation2 === "/" && num3 === 0)
        throw new Error("Division by zero");
      else if (operation2 === "/") total /= num3;
    } else if (operation2 === "*" || operation2 === "/") {
      if (operation2 === "*") total = num2 * num3;
      else if (operation2 === "/" && num3 === 0)
        throw new Error("Division by zero");
      else if (operation2 === "/") total = num2 / num3;

      if (operation1 === "+") total = num1 + total;
      else if (operation1 === "-") total = num1 - total;
    } else {
      if (operation1 === "+" && operation2 === "+") total = num1 + num2 + num3;
      else if (operation1 === "+" && operation2 === "-")
        total = num1 + num2 - num3;
      else if (operation1 === "-" && operation2 === "+")
        total = num1 - num2 + num3;
      else if (operation1 === "-" && operation2 === "-")
        total = num1 - num2 - num3;
    }

    return total;
  }
}

module.exports = calculator;
