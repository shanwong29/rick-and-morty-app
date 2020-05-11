import React, { useContext, useState } from "react";
import Context from "../../store/context";
import * as Styled from "./QueryPanel.styles";

const QueryPanel = () => {
  console.log("Query Input");
  const { state, dispatch } = useContext(Context);
  const [speciesInput, setSpeciesInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpeciesQuery = e.target.speciesInput.value.trim();

    if (newSpeciesQuery === state.speciesQuery) {
      return;
    }

    dispatch({
      type: `SET_SPECIES_QUERY`,
      payload: newSpeciesQuery,
    });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "speciesInput":
        setSpeciesInput(e.target.value);
        break;

      case "statusInput":
        dispatch({
          type: `SET_STATUS_QUERY`,
          payload: e.target.value,
        });
        break;

      case "startDateInput":
        dispatch({
          type: `SET_START_DATE_QUERY`,
          payload: e.target.value,
        });
        break;

      case "endDateInput":
        dispatch({
          type: `SET_END_DATE_QUERY`,
          payload: e.target.value,
        });
        break;

      default:
        return;
    }
  };

  const clearAllQuery = () => {
    dispatch({
      type: `CLEAR_ALL_FILTER`,
    });
    setSpeciesInput("");
  };

  return (
    <Styled.QueryPanel>
      <Styled.SpeciesQueryForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="speciesInput">Species: </label>
        <Styled.SpeciesQueryInput
          type="text"
          id="speciesInput"
          name="speciesInput"
          placeholder="Press enter to submit"
          value={speciesInput}
          onChange={(e) => handleChange(e)}
        />
      </Styled.SpeciesQueryForm>
      <label htmlFor="statusInput">Status: </label>
      <select
        id="statusInput"
        name="statusInput"
        onChange={(e) => handleChange(e)}
      >
        <option defaultValue={state.statusQuery}>
          {state.statusQuery && `${state.statusQuery}`}
        </option>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <label htmlFor="startDateInput">
        Filter characters by created date:{" "}
      </label>
      from{" "}
      <input
        type="date"
        name="startDateInput"
        id="startDateInput"
        value={state.startDateQuery}
        onChange={(e) => handleChange(e)}
      />{" "}
      to
      <input
        type="date"
        name="endDateInput"
        id="endDateInput"
        value={state.endDateQuery}
        onChange={(e) => handleChange(e)}
      />
      <Styled.ClearQueryBtn onClick={clearAllQuery}>CLEAR</Styled.ClearQueryBtn>
    </Styled.QueryPanel>
  );
};

export default QueryPanel;
