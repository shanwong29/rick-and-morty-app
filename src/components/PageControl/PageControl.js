import React, { useContext } from "react";
import Context from "../../store/context";

const PageControl = () => {
  console.log("page control");
  const { state, dispatch } = useContext(Context);

  const numberOfBtns = Math.ceil(state.dataInfo.count / 10);

  let btnDisplay = [];

  for (let i = 1; i <= numberOfBtns; i++) {
    btnDisplay.push(
      <button
        key={i}
        onClick={() => {
          dispatch({ type: `CHANGE_PAGE_NUM`, btnNum: i });
        }}
      >
        {i}
      </button>
    );
  }

  return <div>{btnDisplay}</div>;
};

export default React.memo(PageControl);
