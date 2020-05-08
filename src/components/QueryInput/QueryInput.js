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

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
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
