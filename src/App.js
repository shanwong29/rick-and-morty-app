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

  const fetchData = async (query = "", collection = "character") => {
    try {
      const response = await getData(
        `https://rickandmortyapi.com/api/${collection}/${query}`
      );

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
        console.log(dataInArr);
        dispatch({
          type: `RECIEVED_EPISODE_DATA`,
          payload: dataInArr,
        });
      }
    } catch (err) {
      console.log("Err from fetching", err);
      // return setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log("PAGE USEEFFECT");
    fetchData(`?page=${state.page}`);
  }, [state.page]);

  useEffect(() => {
    console.log("episodeREQ", state.episodeReq);
    if (!state.episodeReq) {
      return;
    }
    fetchData(`${state.episodeReq}`, `episode`);
  }, [state.episodeReq]);

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
