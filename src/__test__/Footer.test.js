import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should Footer Component is loaded", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  //Querying
  const aboutLink = screen.getByText("About Foody Moody");

  //Assertion
  expect(aboutLink).toBeInTheDocument();

  // Assert that the copyright text is present
  const copyrightText = screen.getByText(/© 2023/i);
  expect(copyrightText).toBeInTheDocument();

  // Assert that the location text is present
  const locationText = screen.getByText("India");
  expect(locationText).toBeInTheDocument();
});
