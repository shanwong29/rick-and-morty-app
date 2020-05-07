import { useReducer } from "react";

const initialState = {
  characterData: [],
  dataInfo: {},
  error: "",
  page: 1,
  showSecondPart: false,
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
        dataInfo: {},
      };

    case `CHANGE_PAGE_NUM`:
      let apiPage = Math.ceil(action.btnNum / 2);

      if (apiPage !== state.page) {
        if (action.btnNum % 2 === 0) {
          return { ...state, page: apiPage, showSecondPart: true };
        } else {
          return { ...state, page: apiPage, showSecondPart: false };
        }
      }
      if (action.btnNum % 2 === 0) {
        return { ...state, showSecondPart: true };
      } else {
        return { ...state, showSecondPart: false };
      }

    default:
      return state;
  }
};

const useGlobalState = () => {
  return useReducer(reducer, initialState);
};

export default useGlobalState;
