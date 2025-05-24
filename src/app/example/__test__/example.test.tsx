import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Page from "@/app/example/page";

describe("Page Component", () => {
  it("renders Example and APIComponent", () => {
    // Render with Provider
    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    // Assert elements exist
    expect(screen.getByText("Normal example:")).toBeInTheDocument();
    expect(screen.getByText("API example:")).toBeInTheDocument();
  });
});
