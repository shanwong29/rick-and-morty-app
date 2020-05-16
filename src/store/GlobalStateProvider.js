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

      switch (collection) {
        case "character":
          dispatch({
            type: `RECIEVE_CHAR_DATA`,
            payload: { results: response.results, info: response.info },
          });
          break;
        case "episode":
          let dataInArr = response;
          if (!response.length) {
            dataInArr = [{ ...response }];
          }
          dispatch({
            type: `RECIEVE_EPISODE_DATA`,
            payload: dataInArr,
          });
          break;
        default:
          return;
      }
    } catch (err) {
      if (err.response.status === 404) {
        return dispatch({ type: `SET_DATA_NOT_FOUND`, payload: err });
      }
      console.log("error from fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(
      `?page=${state.currentApiPage}&name=${state.nameQuery}&species=${state.speciesQuery}&status=${state.statusQuery}`
    );
  }, [
    state.currentApiPage,
    state.nameQuery,
    state.speciesQuery,
    state.statusQuery,
  ]);

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
