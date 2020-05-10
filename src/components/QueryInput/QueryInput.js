import React, { useContext, useState } from "react";
import Context from "../../store/context";

const QueryInput = () => {
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
      type: `CANCEL_ALL_FILTER`,
    });
    setSpeciesInput("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="speciesInput">Species: </label>
        <input
          type="text"
          id="speciesInput"
          name="speciesInput"
          placeholder="Press enter to submit"
          value={speciesInput}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <label htmlFor="statusInput">Status: </label>
      <select
        id="statusInput"
        name="statusInput"
        onChange={(e) => handleChange(e)}
      >
        <option selected={state.statusQuery}>
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
      <button onClick={clearAllQuery}>CLEAR ALL FILTER</button>
    </>
  );
};

export default QueryInput;
