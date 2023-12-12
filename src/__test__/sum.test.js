import { sum } from "../components/AboutUs/Sum";

test("sum function should calculate the sum of two number", () => {
  // Querying
  const result = sum(2, 3);

  // Assertion
  expect(result).toBe(5);
});
