import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestrauntCard/RestrauntCard";
import RestaurantCardMock from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard {...RestaurantCardMock} />);

  const name = screen.getByText("Subway");

  expect(name).toBeInTheDocument();
});
