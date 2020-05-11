import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Context from "../../store/context";
import PageControl from "./PageControl.js";
import { mockCharData } from "../../mockData/mockCharData";

// *****************************    Below: set up for each test    **********************************

const mockResults = mockCharData.results;
const mockDataInfo = mockCharData.info;

// const [state] = useGlobalState();
const initialState = {
  // initial State
  characterData: mockResults,
  dataInfo: mockDataInfo,
  episodeData: [],
  isDataNotFound: false,
  currentApiPage: 1,
  showSecondPart: false,
  activeCharPosition: null,
  speciesQuery: "",
  statusQuery: "",
  startDateQuery: "",
  endDateQuery: "",
};

const createTestProps = (props) => {
  console.log({
    // initial State
    ...initialState,
    ...props,
    characterData: 0,
  });
  return {
    // initial State
    ...initialState,
    ...props,
  };
};

const dispatch = jest.fn();

const testRender = (state) => {
  return render(
    <Context.Provider value={{ state, dispatch }}>
      <PageControl />
    </Context.Provider>
  );
};

const getRandomNum = (range) => {
  return Math.floor(Math.random() * range);
};

// afterEach(() => {
//   cleanup();
// });

// ************************************************************************************************
describe("Rendering", () => {
  it("should show right amounts of button", () => {
    let totalCharNum = { dataInfo: { count: 389 } };
    let props = createTestProps({ ...totalCharNum });
    const { getAllByRole } = testRender(props);
    let pagebtns = getAllByRole("button");
    expect(pagebtns).toHaveLength(39);
  });

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

    const randomBtnNum = getRandomNum(pagebtns.length) + 1;
    console.log(randomBtnNum);

    fireEvent.click(pagebtns[randomBtnNum - 1]);
    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: `HANDLE_CHANGE_SITE_PAGE_NUM`,
      payload: randomBtnNum,
    });
  });
});
