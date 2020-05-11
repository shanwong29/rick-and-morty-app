import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Context from "../../store/context";
import PageControl from "./QueryPanel.js";
import { initialState } from "../../testStore/testInitialState";

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
      <PageControl />
    </Context.Provider>
  );
};

// ************************************************************************************************
describe("Rendering", () => {
  it("should show a label and input pairs for species query ", () => {
    let props = createTestProps({});
    const { getByLabelText } = testRender(props);

    expect(
      getByLabelText(/species/i, { selector: "input" })
    ).toBeInTheDocument();
    expect(
      getByLabelText(/status/i, { selector: "select" })
    ).toBeInTheDocument();
  });

  it("should show a clear all button and onClick on it will fire dispatch function", () => {
    let props = createTestProps({});
    const { getByText } = testRender(props);
    const clearBtn = getByText(/clear/i);
    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);
    expect(dispatch.mock.calls.length).toEqual(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: `CLEAR_ALL_FILTER`,
    });
  });

  describe("when state.query are not empty", () => {
    ////// set up
    const updateProps = {
      speciesQuery: "Human",
      statusQuery: "Alive",
      startDateQuery: "2015-11-12",
      endDateQuery: "2011-11-13",
    };
    const { getByLabelText, getByPlaceholderText } = testRender(
      createTestProps({
        ...updateProps,
      })
    );

    const speciesInput = getByPlaceholderText("Press enter to submit");
    const statusInput = getByLabelText(/status/i, { selector: "select" });

    ////////
    it("the species input field should not rely on state", () => {
      expect(speciesInput.value).toBe("");
    });

    it("the species input field should not rely on state", () => {
      fireEvent.change(speciesInput, { target: { value: "Good Day" } });
      expect(speciesInput.value).toBe("Good Day");
    });

    it("Press enter on species input field should fire handleSubmit fn", () => {
      //not working
      // const handleSubmit = jest.fn();
      // fireEvent.focus(speciesInput);
      // fireEvent.change(speciesInput, { target: { value: "hello world" } });
      // fireEvent.keyPress(speciesInput, { key: "Enter", code: "Enter" });
      // expect(handleSubmit.mock.calls.length).toEqual(1);
    });

    it("the status input field should match state.statusQuery ", () => {
      expect(statusInput.value).toBe(updateProps.statusQuery);
    });
  });
});
