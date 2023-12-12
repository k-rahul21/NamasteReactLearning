import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart/Cart";
import "@testing-library/jest-dom";

test("Should Empty cart page is loaded", () => {
  render(<Cart />);

  // Querying
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});
