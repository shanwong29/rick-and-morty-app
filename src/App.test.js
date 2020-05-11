import React from "react";
import { render } from "@testing-library/react";

import App from "./App";
import GlobalStateProvider from "./store/GlobalStateProvider";
import { initialState } from "./testStore/testInitialState";

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
  it("should fetch `mockCharData` and show the first 10 data", (done) => {
    const renderOutput = testRender();
    setTimeout(() => {
      const firstDisplayCharName = initialState.characterData[0].name;
      const lastDisplayCharName = initialState.characterData[9].name;

      expect(
        renderOutput.getByAltText(`${firstDisplayCharName}`)
      ).toBeInTheDocument();
      expect(
        renderOutput.getByAltText(`${lastDisplayCharName}`)
      ).toBeInTheDocument();

      done();
    });
  });
});
