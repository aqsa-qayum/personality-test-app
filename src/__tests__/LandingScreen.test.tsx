import { render, screen, fireEvent } from "@testing-library/react";
import LandingScreen from "../app/components/landing/index";
import { MemoryRouter } from "react-router-dom";

describe("LandingScreen", () => {
  test("renders the heading", () => {
    render(
      <MemoryRouter>
        <LandingScreen />
      </MemoryRouter>
    );
    const heading = screen.getByText(/Enter Name To Start Test/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders the input field", () => {
    render(
      <MemoryRouter>
        <LandingScreen />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/Enter your name/i);
    expect(input).toBeInTheDocument();
  });

  test("renders the start button", () => {
    render(
      <MemoryRouter>
        <LandingScreen />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /Start/i });
    expect(button).toBeInTheDocument();
  });

  test("shows alert when start button is clicked without entering a name", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(
      <MemoryRouter>
        <LandingScreen />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /Start/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Please enter your name.");
  });
});

export {};
