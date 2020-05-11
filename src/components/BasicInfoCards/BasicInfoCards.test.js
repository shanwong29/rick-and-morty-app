import React from "react";
import { render } from "@testing-library/react";
import Context from "../../store/context";
import BasicInfoCards from "./BasicInfoCards.js";
import { initialState } from "../../testStore/testInitialState";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styleStore/theme";

// *****************************    Below: set up for each test    **********************************

const createTestProps = (props) => {
  return {
    ...initialState,
    ...props,
  };
};

const dispatch = jest.fn();

const testRender = (state) => {
  return render(
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <BasicInfoCards />
      </ThemeProvider>
    </Context.Provider>
  );
};

// ************************************************************************************************
describe("Rendering when there is data", () => {
  it("should show 10 character images", () => {
    const { queryAllByRole } = testRender(createTestProps({}));
    const charImgs = queryAllByRole("img");
    expect(charImgs).toHaveLength(10);
  });

  describe("when state.showSecondPart is false", () => {
    const firstDisplayCharName = initialState.characterData[0].name;
    const lastDisplayCharName = initialState.characterData[9].name;
    it("should show the 1st to 10th data", () => {
      const { getByAltText } = testRender(
        createTestProps({ showSecondPart: false })
      );

      expect(getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument();
      expect(getByAltText(`${lastDisplayCharName}`)).toBeInTheDocument();
    });
  });

  describe("when state.showSecondPart is true", () => {
    const firstDisplayCharName = initialState.characterData[10].name;
    const lastDisplayCharName = initialState.characterData[19].name;
    it("should show the 11st to 20th data", () => {
      const { getByAltText } = testRender(
        createTestProps({ showSecondPart: true })
      );
      expect(getByAltText(`${firstDisplayCharName}`)).toBeInTheDocument();
      expect(getByAltText(`${lastDisplayCharName}`)).toBeInTheDocument();
    });
  });

  describe("when there is no character data", () => {
    let renderOutput;
    beforeEach(() => {
      renderOutput = testRender(
        createTestProps({ characterData: [], dataInfo: {} })
      );
    });
    it("should show no images", () => {
      const charImgs = renderOutput.queryAllByRole("img");
      expect(charImgs).toHaveLength(0);
    });

    it("should show no text", () => {
      expect(renderOutput.queryAllByText(/[0-9A-Z]+/i)).toHaveLength(0);
    });
  });
});
