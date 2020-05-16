import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./PageControl.styles";

const PageControl = () => {
  const { state, dispatch } = useContext(Context);

  if (!state.characterData.length) {
    return <></>;
  }

  const totalNumOfSitePages = Math.ceil(state.dataInfo.count / 10);

  let activeSitePage = state.currentApiPage * 2;

  if (!state.showSecondPart) {
    activeSitePage = state.currentApiPage * 2 - 1;
  }

  let numOfDynamicBtns = 9;
  const isMobile = window.innerWidth < 540;
  if (isMobile) {
    numOfDynamicBtns = 3;
  }

  const dynamicBtnsMidPt = Math.ceil(numOfDynamicBtns / 2); // 5
  const extendedPagesFromMidPt = Math.floor(numOfDynamicBtns / 2); // 4

  let showFirstEllipsis = false;
  let showSecondEllipsis = false;
  let firstDynamicBtn;
  let lastDynamicBtn;

  if (totalNumOfSitePages <= numOfDynamicBtns + 2) {
    // numOfDynamicBtns + 2  ==> as we need to add first & last page btn
    firstDynamicBtn = 2;
    lastDynamicBtn = totalNumOfSitePages - 1;
  } else if (activeSitePage <= 1 + dynamicBtnsMidPt) {
    firstDynamicBtn = 2;
    lastDynamicBtn = 1 + numOfDynamicBtns;
    showSecondEllipsis = true;
  } else if (activeSitePage >= totalNumOfSitePages - dynamicBtnsMidPt) {
    firstDynamicBtn = totalNumOfSitePages - numOfDynamicBtns;
    lastDynamicBtn = totalNumOfSitePages - 1;
    showFirstEllipsis = true;
  } else {
    firstDynamicBtn = activeSitePage - extendedPagesFromMidPt;
    lastDynamicBtn = activeSitePage + extendedPagesFromMidPt;
    showFirstEllipsis = true;
    showSecondEllipsis = true;
  }

  let dynamicBtns = [];
  for (let i = firstDynamicBtn; i <= lastDynamicBtn; i++) {
    let isActive = false;
    if (activeSitePage === i) {
      isActive = true;
    }
    dynamicBtns.push(
      <Styled.PageBtn
        isActive={isActive}
        key={i}
        onClick={() => {
          dispatch({ type: `HANDLE_CHANGE_SITE_PAGE_NUM`, payload: i });
        }}
      >
        {i}
      </Styled.PageBtn>
    );
  }

  const firstPageBtn = (
    <Styled.PageBtn
      isActive={activeSitePage === 1}
      onClick={() => {
        dispatch({ type: `HANDLE_CHANGE_SITE_PAGE_NUM`, payload: 1 });
      }}
    >
      1
    </Styled.PageBtn>
  );

  const lastPageBtn = (
    <Styled.PageBtn
      isActive={activeSitePage === totalNumOfSitePages}
      onClick={() => {
        dispatch({
          type: `HANDLE_CHANGE_SITE_PAGE_NUM`,
          payload: totalNumOfSitePages,
        });
      }}
    >
      {totalNumOfSitePages}
    </Styled.PageBtn>
  );

  const previousBtn = (
    <Styled.PageBtn
      disabled={activeSitePage === 1}
      onClick={() => {
        dispatch({
          type: `HANDLE_CHANGE_SITE_PAGE_NUM`,
          payload: activeSitePage - 1,
        });
      }}
    >
      &#11207;
    </Styled.PageBtn>
  );

  const nextBtn = (
    <Styled.PageBtn
      disabled={activeSitePage === totalNumOfSitePages}
      onClick={() => {
        dispatch({
          type: `HANDLE_CHANGE_SITE_PAGE_NUM`,
          payload: activeSitePage + 1,
        });
      }}
    >
      &#11208;
    </Styled.PageBtn>
  );

  return (
    <div>
      {previousBtn}
      {firstPageBtn}
      {showFirstEllipsis && ` ... `}
      {dynamicBtns}
      {showSecondEllipsis && ` ... `}
      {totalNumOfSitePages !== 1 && lastPageBtn}
      {nextBtn}
    </div>
  );
};

export default PageControl;
