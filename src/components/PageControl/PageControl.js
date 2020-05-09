import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./PageControl.styles";

const PageControl = () => {
  console.log("page control");
  const { state, dispatch } = useContext(Context);

  const numberOfBtns = Math.ceil(state.dataInfo.count / 10);

  let activeSitePage = state.page * 2;

  if (!state.showSecondPart) {
    activeSitePage = state.page * 2 - 1;
  }

  let btnDisplay = [];

  for (let i = 1; i <= numberOfBtns; i++) {
    let isActive = false;
    if (activeSitePage === i) {
      isActive = true;
    }
    btnDisplay.push(
      <Styled.PageBtn
        isActive={isActive}
        key={i}
        onClick={() => {
          dispatch({ type: `CHANGE_PAGE_NUM`, btnNum: i });
        }}
      >
        {i}
      </Styled.PageBtn>
    );
  }

  return <div>{btnDisplay}</div>;
};

export default React.memo(PageControl);
