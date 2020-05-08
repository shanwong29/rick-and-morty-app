import { useReducer } from "react";

const initialState = {
  characterData: [],
  dataInfo: {},
  error: "",
  page: 1,
  showSecondPart: false,
  episodeReq: "",
  episodeData: [],
};

const reducer = (state, action) => {
  console.log("ppp", state.showSecondPart);
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
      let apiPage = Math.ceil(action.btnNum / 2);

      if (apiPage !== state.page) {
        if (action.btnNum % 2 === 0) {
          return {
            ...state,
            page: apiPage,
            showSecondPart: true,
            episodeData: [],
            episodeReq: "",
          };
        } else {
          return {
            ...state,
            page: apiPage,
            showSecondPart: false,
            episodeData: [],
            episodeReq: "",
          };
        }
      }
      if (action.btnNum % 2 === 0) {
        return {
          ...state,
          showSecondPart: true,
          episodeReq: "",
          episodeData: [],
        };
      } else {
        return { ...state, showSecondPart: false };
      }

    case `UPDATE_ACTIVE_CHAR_EP_REQ`:
      return {
        ...state,
        episodeReq: action.payload,
      };

    case `RECIEVED_EPISODE_DATA`:
      return {
        ...state,
        episodeData: action.payload,
      };

    default:
      return state;
  }
};

const useGlobalState = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalState;
