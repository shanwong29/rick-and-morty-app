import React, { useEffect } from "react";
import Context from "./context";
import useGlobalState from "./useGlobalState";
import { getEpiNumReqStr } from "../service/getEpiNumReqStr";
import { ThemeProvider } from "styled-components";
import { theme } from "../styleStore/theme";
import GlobalStyles from "../styleStore/globalStyles";
import axios from "axios";

const GlobalStateProvider = ({ children }) => {
  console.log("app");
  const [state, dispatch] = useGlobalState();
  const fetchData = async (collection = "character") => {
    let response;
    try {
      if (collection === "episode") {
        const charPosition = state.activeCharPosition;
        if (!charPosition && charPosition !== 0) {
          return;
        }
        const activeCharEpiInfo = state.characterData[charPosition].episode;
        const episodeReq = getEpiNumReqStr(activeCharEpiInfo);
        response = await axios.get(
          `https://rickandmortyapi.com/api/${collection}/${episodeReq}`
        );
      } else {
        // querying character
        const query = {
          page: state.currentApiPage,
          name: state.nameQuery,
          species: state.speciesQuery,
          status: state.statusQuery,
        };
        response = await axios.get(
          `https://rickandmortyapi.com/api/${collection}/`,
          {
            params: query,
          }
        );
      }

      const { data } = response;

      switch (collection) {
        case "character":
          dispatch({
            type: `RECIEVE_CHAR_DATA`,
            payload: { results: data.results, info: data.info },
          });
          break;
        case "episode":
          let dataInArr = data;
          if (!data.length) {
            dataInArr = [{ ...data }];
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
      if (err.response && err.response.status === 404) {
        return dispatch({ type: `SET_DATA_NOT_FOUND`, payload: err });
      } else {
        console.log("error from fetching data: ", err);
      }
    }
  };

  useEffect(
    () => {
      fetchData();
    },
    /* eslint-disable-line react-hooks/exhaustive-deps*/ [
      state.currentApiPage,
      state.nameQuery,
      state.speciesQuery,
      state.statusQuery,
    ]
  );

  useEffect(() => {
    fetchData("episode");
  }, [state.activeCharPosition]); // eslint-disable-line react-hooks/exhaustive-deps

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
