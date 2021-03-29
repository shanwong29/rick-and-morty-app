import { useReducer } from "react";

export const initialState = {
  characterData: [],
  dataInfo: {},
  episodeData: [],
  isDataNotFound: false,
  currentApiPage: 1,
  showSecondPart: false,
  activeCharPosition: null,
  nameQuery: "",
  speciesQuery: "",
  statusQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RECIEVE_CHAR_DATA":
      return {
        ...state,
        characterData: action.payload.results,
        dataInfo: action.payload.info,
        episodeData: [],
        isDataNotFound: false,
      };

    case `SET_DATA_NOT_FOUND`:
      return {
        ...state,
        isDataNotFound: true,
        characterData: [],
        episodeData: [],
        dataInfo: {},
      };

    case `HANDLE_CHANGE_SITE_PAGE_NUM`:
      const targetSitePage = action.payload;
      const targetApiPage = Math.ceil(targetSitePage / 2);

      if (targetApiPage !== state.currentApiPage) {
        if (targetSitePage % 2 === 0) {
          return {
            ...state,
            currentApiPage: targetApiPage,
            showSecondPart: true,
            activeCharPosition: null,
          };
        } else {
          //when targetSitePage is odd number
          return {
            ...state,
            currentApiPage: targetApiPage,
            showSecondPart: false,
            activeCharPosition: null,
          };
        }
      }
      // when targetApiPage === state.currentApiPage
      if (targetSitePage % 2 === 0) {
        return {
          ...state,
          showSecondPart: true,
          activeCharPosition: null,
          episodeData: [],
        };
      } else {
        return {
          ...state,
          showSecondPart: false,
          activeCharPosition: null,
          episodeData: [],
        };
      }

    case `SET_ACTIVE_CHAR_POSITION`:
      return {
        ...state,
        activeCharPosition: action.payload,
        episodeData: [],
      };

    case `RECIEVE_EPISODE_DATA`:
      return {
        ...state,
        episodeData: action.payload,
      };

    case `SET_NAME_AND_SPECIES_QUERY`:
      return {
        ...state,
        nameQuery: action.payload.newNameQuery,
        speciesQuery: action.payload.newSpeciesQuery,
        currentApiPage: 1,
        showSecondPart: false,
        activeCharPosition: null,
      };

    case `SET_STATUS_QUERY`:
      return {
        ...state,
        statusQuery: action.payload,
        currentApiPage: 1,
        showSecondPart: false,
        activeCharPosition: null,
      };

    case `CLEAR_ALL_FILTER`:
      return {
        ...state,
        speciesQuery: "",
        statusQuery: "",
        startDateQuery: "",
        endDateQuery: "",
        activeCharPosition: null,
        currentApiPage: 1,
        showSecondPart: false,
        episodeData: [],
      };

    default:
      return state;
  }
};

const useGlobalState = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalState;
