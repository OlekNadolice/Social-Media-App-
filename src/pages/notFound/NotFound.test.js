import NotFound from "./NotFound";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import magazyn from "store/store";
import { BrowserRouter } from "react-router-dom";

test("It should render a component", () => {
  render(
    <Provider store={magazyn}>
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    </Provider>
  );

  const element = screen.findByText("404");
  expect(element.toBeInTheDocument);
});
