import React, { useContext, Fragment } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";
import * as Styled from "./BasicInfoCards.styles";
import { dateWithinRangeChecker } from "../../service/dateWithinRangeChecker";

const BasicInfoCards = () => {
  console.log("info card");
  const { state, dispatch } = useContext(Context);
  console.log("epiReq", state.episodeReq, "epiData", state.episodeData);

  //handle Not-found
  if (state.isDataNotFound) {
    return <h1>No characters fits this filter request. :(</h1>;
  }

  const numOfCardOnEachPage = 10;

  let modifiedData;
  if (state.showSecondPart) {
    modifiedData = state.characterData.slice(numOfCardOnEachPage);
  } else {
    modifiedData = state.characterData.slice(0, numOfCardOnEachPage);
  }

  let numOfFilteredOutChar = 0;

  const cardDisplay = modifiedData.map((el, i) => {
    const { name, status, species, image, created, id } = el;
    let charPosition = i;
    if (state.showSecondPart) {
      charPosition = i + numOfCardOnEachPage;
    }

    let isCreatedDateWithinQueryPeriod = dateWithinRangeChecker(
      created,
      state.startDateQuery,
      state.endDateQuery
    );

    if (!isCreatedDateWithinQueryPeriod) {
      numOfFilteredOutChar++;
      return <Fragment key={i}></Fragment>;
    }

    return (
      <Styled.BasicInfoCard
        onClick={() => {
          dispatch({
            type: `SET_ACTIVE_CHAR_POSITION`,
            payload: charPosition,
          });
        }}
        key={i}
      >
        <Styled.CharImg src={image} alt={name} />
        <p>
          {name} id: {id}
        </p>
        <p>
          created on <DateFormat timeStamp={created} />
        </p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </Styled.BasicInfoCard>
    );
  });

  if (numOfFilteredOutChar === modifiedData.length) {
    return <h1>No character on this page fit the "created date filter."</h1>;
  }
  return <Styled.InfoCardsWrapper>{cardDisplay}</Styled.InfoCardsWrapper>;
};

export default React.memo(BasicInfoCards);