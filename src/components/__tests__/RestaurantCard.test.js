import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for using toBeInTheDocument in JS DOM
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks.json";

it("Should render RestaurantCard with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");
  // Assertions
  expect(name).toBeInTheDocument();
});
