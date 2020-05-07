import React, { useEffect } from "react";
import "./App.css";
import getData from "./service/getData";
import InfoCard from "./components/InfoCard/InforCard";
import PageControl from "./components/PageControl/PageControl";

import useGlobalState from "./store/useGlobalState";
import Context from "./store/context";

function App() {
  console.log("APP");
  const [state, dispatch] = useGlobalState();

  const fetchCharacterData = async (query = "") => {
    try {
      const response = await getData(
        `https://rickandmortyapi.com/api/character/${query}`
      );

      if (response.error) {
        console.log("Err returned from API:", response.error);
        return dispatch({ type: `HANDLE_ERROR`, payload: response.error });
      }

      dispatch({
        type: `RECIEVED_DATA`,
        payload: { results: response.results, info: response.info },
      });
    } catch (err) {
      console.log("Err from fetching", err);
      // return setError(err);
    }
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  useEffect(() => {
    // console.log("PAGE USEEFFECT");
    fetchCharacterData(`?page=${state.page}`);
  }, [state.page]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <InfoCard />
        <PageControl />
      </div>
    </Context.Provider>
  );
}

export default App;
