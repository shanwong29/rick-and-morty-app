import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";
import GlobalStateProvider from "./store/GlobalStateProvider";
import { allCharData } from "./__mocks__/data/allCharData";

// *****************************    Below: set up for each test    **********************************

const testRender = () => {
  return render(
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
};

// ************************************************************************************************
describe("Rendering", () => {
  it("should fetch `mockCharData` and show the first 10 data", async () => {
    testRender();

    const firstDisplayCharName = allCharData[0].name;
    const lastDisplayCharName = allCharData[9].name;

    await waitFor(() =>
      expect(screen.getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument()
    );

    screen.debug();

    expect(screen.getByAltText(`${lastDisplayCharName}`)).toBeInTheDocument();
  });
});
