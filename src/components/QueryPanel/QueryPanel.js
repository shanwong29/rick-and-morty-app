import React, { useContext, useState } from "react";
import Context from "../../store/context";
import * as Styled from "./QueryPanel.styles";

const QueryPanel = () => {
  const { state, dispatch } = useContext(Context);
  const [speciesInput, setSpeciesInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpeciesQuery = e.target.speciesInput.value.trim();
    const newNameQuery = e.target.nameInput.value.trim();

    if (
      newSpeciesQuery === state.speciesQuery &&
      newNameQuery === state.nameQuery
    ) {
      return;
    }

    dispatch({
      type: `SET_NAME_AND_SPECIES_QUERY`,
      payload: { newSpeciesQuery, newNameQuery },
    });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "nameInput":
        setNameInput(e.target.value);
        break;

      case "speciesInput":
        setSpeciesInput(e.target.value);
        break;

      case "statusInput":
        dispatch({
          type: `SET_STATUS_QUERY`,
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
    setNameInput("");
  };

  return (
    <Styled.QueryForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="nameInput"
          placeholder="Press enter to submit"
          value={nameInput}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="speciesInput">Species: </label>
        <input
          type="text"
          id="speciesInput"
          name="speciesInput"
          placeholder="Press enter to submit"
          value={speciesInput}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="statusInput">Status: </label>
        <select
          id="statusInput"
          name="statusInput"
          onChange={(e) => handleChange(e)}
          value={state.statusQuery}
        >
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <Styled.SubmitBtn type="submit"></Styled.SubmitBtn>

      <Styled.ClearQueryBtn onClick={clearAllQuery}>CLEAR</Styled.ClearQueryBtn>
    </Styled.QueryForm>
  );
};

export default QueryPanel;
