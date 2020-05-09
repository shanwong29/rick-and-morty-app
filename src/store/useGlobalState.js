import { useReducer } from "react";

const initialState = {
  characterData: [],
  dataInfo: {},
  error: "",
  currentApiPage: 1,
  showSecondPart: false,
  activeCharPosition: null,
  episodeData: [],
  speciesQuery: "",
  statusQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RECIEVED_DATA":
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

    case `CHANGE_PAGE_NUM`:
      let targetApiPage = Math.ceil(action.btnNum / 2);

      if (targetApiPage !== state.currentApiPage) {
        if (action.btnNum % 2 === 0) {
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
      if (action.btnNum % 2 === 0) {
        return {
          ...state,
          showSecondPart: true,
          // episodeData: [],
          activeCharPosition: null,
        };
      } else {
        return { ...state, showSecondPart: false };
      }

    case `UPDATE_ACTIVE_CHAR_POSITION`:
      return {
        ...state,
        activeCharPosition: action.payload,
      };

    case `RECIEVED_EPISODE_DATA`:
      return {
        ...state,
        episodeData: action.payload,
      };

    case `UPDATE_QUERY`:
      console.log(action.payload.species, action.payload.status);
      return {
        ...state,
        speciesQuery: action.payload.species,
        statusQuery: action.payload.status,
        currentApiPage: 1,
        showSecondPart: false,
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
