import React, { useEffect } from "react";
import "./App.css";
import getData from "./service/getData";
import { getEpiNumReqStr } from "./service/getEpiNumReqStr";
import InfoCard from "./components/InfoCard/InforCard";
import PageControl from "./components/PageControl/PageControl";
import QueryInput from "./components/QueryInput/QueryInput";
import useGlobalState from "./store/useGlobalState";
import Context from "./store/context";

function App() {
  console.log("APP");
  const [state, dispatch] = useGlobalState();

  const fetchData = async (query = "", collection = "character") => {
    try {
      const response = await getData(
        `https://rickandmortyapi.com/api/${collection}/${query}`
      );

      console.log(response);

      if (response.error) {
        console.log("Err returned from API:", response.error);
        return dispatch({ type: `HANDLE_ERROR`, payload: response.error });
      }

      if (collection === "character") {
        dispatch({
          type: `RECIEVED_DATA`,
          payload: { results: response.results, info: response.info },
        });
      } else {
        let dataInArr = response;
        if (!response.length) {
          dataInArr = [{ ...response }];
        }
        dispatch({
          type: `RECIEVED_EPISODE_DATA`,
          payload: dataInArr,
        });
      }
    } catch (err) {
      console.log("Err from fetching", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(
      `?page=${state.page}&species=${state.speciesQuery}&status=${state.statusQuery}`
    );
    fetchData(
      `?page=${state.page}&species=${state.speciesQuery}&status=${state.statusQuery}`
    );
  }, [state.page, state.speciesQuery, state.statusQuery]);

  useEffect(() => {
    const numOfCardOnEachPage = 10;

    let charPosition = state.activeCharPosition;

    if (!charPosition && charPosition !== 0) {
      return;
    }

    if (state.page % 2 === 0) {
      charPosition = Number(state.activeCharPosition) + numOfCardOnEachPage;
    }

    const activeCharEpiInfo = state.characterData[charPosition].episode;
    const episodeReq = getEpiNumReqStr(activeCharEpiInfo);

    fetchData(`${episodeReq}`, `episode`);
  }, [state.activeCharPosition]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <QueryInput />
        <InfoCard />
        <PageControl />
      </div>
    </Context.Provider>
  );
}

export default App;
