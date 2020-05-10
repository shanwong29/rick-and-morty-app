import { useReducer } from "react";

const initialState = {
  characterData: [],
  dataInfo: {},
  episodeData: [],
  error: "",
  currentApiPage: 1,
  showSecondPart: false,
  activeCharPosition: null,
  speciesQuery: "",
  statusQuery: "",
  startDateQuery: "",
  endDateQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RECIEVE_CHAR_DATA":
      return {
        ...state,
        characterData: action.payload.results,
        dataInfo: action.payload.info,
        error: "",
      };

    case `HANDLE_ERROR`:
      return {
        ...state,
        error: action.payload,
        characterData: [],
        episodeData: [],
        dataInfo: {},
      };

    case `HANDLE_CHANGE_SITE_PAGE_NUM`:
      const targetSitePage = action.payload;
      const targetApiPage = Math.ceil(targetSitePage / 2);

      if (targetApiPage !== state.currentApiPage) {
        if (action.payload % 2 === 0) {
          return {
            ...state,
            currentApiPage: targetApiPage,
            showSecondPart: true,
            // episodeData: [],
            activeCharPosition: null,
          };
        } else {
          return {
            ...state,
            currentApiPage: targetApiPage,
            showSecondPart: false,
            // episodeData: [],
            activeCharPosition: null,
          };
        }
      }
      if (targetSitePage % 2 === 0) {
        return {
          ...state,
          showSecondPart: true,
          // episodeData: [],
          activeCharPosition: null,
        };
      } else {
        return { ...state, showSecondPart: false };
      }

    case `SET_ACTIVE_CHAR_POSITION`:
      return {
        ...state,
        activeCharPosition: action.payload,
      };

    case `RECIEVE_EPISODE_DATA`:
      return {
        ...state,
        episodeData: action.payload,
      };

    case `SET_SPECIES_QUERY`:
      console.log("SECIESQUERY", action.payload);
      return {
        ...state,
        speciesQuery: action.payload,
        currentApiPage: 1,
        showSecondPart: false,
        activeCharPosition: null,
      };

    case `SET_STATUS_QUERY`:
      console.log("status query", action.payload);
      return {
        ...state,
        statusQuery: action.payload,
        currentApiPage: 1,
        showSecondPart: false,
        activeCharPosition: null,
      };

    case `SET_START_DATE_QUERY`:
      return {
        ...state,
        startDateQuery: action.payload,
      };
    case `SET_END_DATE_QUERY`:
      return {
        ...state,
        endDateQuery: action.payload,
      };

    case `CLEAR_ALL_FILTER`:
      return {
        ...state,
        speciesQuery: "",
        statusQuery: "",
        startDateQuery: "",
        endDateQuery: "",
        activeCharPosition: null,
      };

    default:
      return state;
  }
};

const useGlobalState = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalState;
