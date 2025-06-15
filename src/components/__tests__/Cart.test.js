import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter, MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </MemoryRouter>
    )
  );

  const accordionHeader = screen.getByText("Mango Specials (7)");
  //   expect(accordionHeader).toBeInTheDocument();
  fireEvent.click(accordionHeader);
  const foodItems = screen.findAllByTestId("foodItems");

  expect(foodItems.length).toBe(7);
});
