// calculator.test.js
const calc = require("./calculator");

describe("Calculator", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc({ num1: 2, operation1: "+", num2: 3 })).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc({ num1: 5, operation1: "-", num2: 2 })).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc({ num1: 4, operation1: "*", num2: 6 })).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc({ num1: 10, operation1: "/", num2: 2 })).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc({ num1: 6, operation1: "/", num2: 0 })).toThrow(
      "Division by zero"
    );
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc({ num1: -8, operation1: "+", num2: 5 })).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc({ num1: 3.5, operation1: "*", num2: 2 })).toBe(7);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(
      calc({ num1: 2, operation1: "+", num2: 3, operation2: "*", num3: 4 })
    ).toBe(14);
  });

  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc({ num1: 5, operation1: "$", num2: 3 })).toThrow(
      "Invalid operator"
    );
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc({ num1: "2", operation1: "+", num2: 3 })).toThrow(
      "Invalid input type"
    );
  });

  // Test case: Numbers bigger than 1000
  it("should ignore numbers bigger than 1000", () => {
    expect(calc({ num1: 2, operation1: "+", num2: 1001 })).toBe(2);
  });

  // Test case: Numbers bigger than 1000
  it("should ignore numbers bigger than 1000", () => {
    expect(
      calc({ num1: 2, operation1: "+", num2: 5, operation2: "*", num3: 2500 })
    ).toBe(2);
  });
});
