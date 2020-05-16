import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Context from "../../store/context";
import PageControl from "./PageControl.js";
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
        <PageControl />
      </ThemeProvider>
    </Context.Provider>
  );
};

const getRandomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// ************************************************************************************************
describe("Rendering", () => {
  // it("should show right amounts of button", () => {
  //   let totalCharNum = { dataInfo: { count: 389 } };
  //   let props = createTestProps({ ...totalCharNum });
  //   const { getAllByRole } = testRender(props);
  //   let pagebtns = getAllByRole("button");
  //   expect(pagebtns).toHaveLength(39);
  // });

  it("should show no button when there is no character data", () => {
    let props = createTestProps({ characterData: [], dataInfo: {} });
    const { queryByRole } = testRender(props);
    const pagebtns = queryByRole("button");
    expect(pagebtns).toBeNull();
  });

  it("onclick on `previous-img-button` should trigger `handlePhotoChange` fn", () => {
    let props = createTestProps({});
    const { queryAllByRole } = testRender(props);
    const pagebtns = queryAllByRole("button");

    const randomBtnNum = getRandomNum(pagebtns.length);
    console.log(randomBtnNum);

    fireEvent.click(pagebtns[randomBtnNum - 1]);
    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: `HANDLE_CHANGE_SITE_PAGE_NUM`,
      payload: randomBtnNum,
    });
  });
});
