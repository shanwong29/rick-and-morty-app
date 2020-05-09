import React, { useEffect } from "react";
import Context from "./context";
import useGlobalState from "./useGlobalState";
import getData from "../service/getData";
import { getEpiNumReqStr } from "../service/getEpiNumReqStr";
import { ThemeProvider } from "styled-components";
import { theme } from "../styleStore/theme";
import GlobalStyles from "../styleStore/globalStyles";

const GlobalStateProvider = ({ children }) => {
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
      `?page=${state.currentApiPage}&species=${state.speciesQuery}&status=${state.statusQuery}`
    );
    fetchData(
      `?page=${state.currentApiPage}&species=${state.speciesQuery}&status=${state.statusQuery}`
    );
  }, [state.currentApiPage, state.speciesQuery, state.statusQuery]);

  useEffect(() => {
    let charPosition = state.activeCharPosition;

    if (!charPosition && charPosition !== 0) {
      return;
    }
    const activeCharEpiInfo = state.characterData[charPosition].episode;
    const episodeReq = getEpiNumReqStr(activeCharEpiInfo);

    fetchData(`${episodeReq}`, `episode`);
  }, [state.activeCharPosition]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export default GlobalStateProvider;
