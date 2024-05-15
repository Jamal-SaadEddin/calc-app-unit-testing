function calculator(
  num1,
  operation1,
  num2,
  operation2 = undefined,
  num3 = undefined
) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num3 !== "undefined"
  )
    throw new Error("Invalid input type");
  else if (
    (operation1 !== "+" &&
      operation1 !== "-" &&
      operation1 !== "*" &&
      operation1 !== "/") ||
    (operation2 !== "+" &&
      operation2 !== "-" &&
      operation2 !== "*" &&
      operation2 !== "/" &&
      operation2 !== undefined)
  )
    throw new Error("Invalid operator");
  else if (operation2 && num3) {
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
  } else {
    if (operation1 === "+") return num1 + num2;
    else if (operation1 === "-") return num1 - num2;
    else if (operation1 === "*") return num1 * num2;
    else if (operation1 === "/" && num2 === 0)
      throw new Error("Division by zero");
    else if (operation1 === "/") return num1 / num2;
  }
}
