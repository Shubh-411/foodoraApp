import Body from "../Body";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
// Mock data for the fetch call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
// - global.fetch() for mock data for the fetch call and asynchronous operations
// - Whenever we use fetch or do any state updates wrap the render method inside `act()`

it("Should Search Restaurant list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const rescards = screen.getAllByTestId("resCard");

  expect(rescards.length).toBe(20);

  const searchBtn = await screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");
  // Assertion
  // expect(searchBtn).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: "Pizza" } }); // here target is the input field and value is the text we want to enter in the input field
  fireEvent.click(searchBtn);

  // Assertion to check if the search input value is updated
  // Screen should load 4 card
  const cards = screen.getAllByTestId("resCard");

  // Assertion
  expect(cards.length).toBe(4);
  console.log(cards.length);
});

it("Should filter Top rated restaurant ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  console.log(cardsAfterFilter.length);

  expect(cardsAfterFilter.length).toBe(7);
  // expect(topRatedBtn).toBeInTheDocument();
});
