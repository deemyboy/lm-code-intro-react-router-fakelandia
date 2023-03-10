import { Home } from "./home";
import App from "../../App";
import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

test("App test", () => {
    render(<App />);
    expect(screen.getByText("crimes")).toBeVisible();
});

// test("home test", () => {
//     render(<App />);
//     expect(screen.getByText("we are home!")).toBeVisible();
// });
