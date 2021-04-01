import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { allCharData } from "./__mocks__/data/allCharData";

describe("Inital render when api response is successful", () => {
  const lastPage = Math.ceil(allCharData.length / 10);

  beforeEach(async () => {
    render(<App />);
    const firstDisplayCharName = allCharData[0].name;

    await waitFor(() =>
      expect(screen.getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument()
    );
  });

  it("should show the first 10 data", () => {
    const lastDisplayCharName = allCharData[9].name;

    expect(screen.getByAltText(`${lastDisplayCharName}`)).toBeInTheDocument();
  });

  it("should show a name input field, a species input field, a status select field and a clear button ", async () => {
    expect(
      screen.getByLabelText(/name/i, { selector: "input" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/species/i, { selector: "input" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/status/i, { selector: "select" })
    ).toBeInTheDocument();

    const clearBtn = screen.getByText("CLEAR", { selector: "button" });
    expect(clearBtn).toBeInTheDocument();
  });

  it("should show page control for the first 10 pages, and the last page", () => {
    for (let i = 1; i <= 10; i++) {
      const pageBtn = screen.getByText(i, { selector: "button" });
      expect(pageBtn).toBeInTheDocument();
    }

    const lastPageBtn = screen.getByText(lastPage, {
      selector: "button",
    });
    expect(lastPageBtn).toBeInTheDocument();
  });

  it("should not show page which are greater than 10 and not the last page", () => {
    for (let i = 10 + 1; i < lastPage; i++) {
      expect(
        screen.queryByText(i, { selector: "button" })
      ).not.toBeInTheDocument();
    }
  });
});
