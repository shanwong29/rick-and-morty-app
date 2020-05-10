import React, { useContext } from "react";
import Context from "../../store/context";

const QueryInput = () => {
  const { state, dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpeciesQuery = e.target.species.value.trim();
    const newStatusQuery = e.target.status.value.trim();
    if (
      newSpeciesQuery === state.speciesQuery &&
      newStatusQuery === state.statusQuery
    ) {
      return;
    }
    dispatch({
      type: `UPDATE_QUERY`,
      payload: {
        species: newSpeciesQuery,
        status: newStatusQuery,
      },
    });
  };

  const handleChange = (e, type) => {
    e.preventDefault();
    if (!e.target.value) {
      return;
    }

    switch (type) {
      case "startDate":
        dispatch({
          type: `UPDATE_START_DATE_QUERY`,
          payload: e.target.value,
        });
        break;
      case "endDate":
        dispatch({
          type: `UPDATE_END_DATE_QUERY`,
          payload: e.target.value,
        });
        break;
      default:
        return;
    }

    const date = e.target.value;
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label htmlFor="date">Filter characters by created date: </label>
      from{" "}
      <input
        type="date"
        name="startDate"
        id="startDate"
        onChange={(e) => {
          handleChange(e, "startDate");
        }}
      />{" "}
      to
      <input
        type="date"
        name="endDate"
        id="endDate"
        onChange={(e) => {
          handleChange(e, "endDate");
        }}
      />
      <label for="species">Species: </label>
      <input type="text" id="species" name="species" />
      <label for="Status">Status: </label>
      <select id="status">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button type="submit">Search Characters</button>
    </form>
  );
};

export default QueryInput;
