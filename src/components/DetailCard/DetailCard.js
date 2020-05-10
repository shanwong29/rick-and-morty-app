import React, { Fragment, useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";
import * as Styled from "./DetailCard.styles";

const DetailCard = () => {
  console.log("detail card");
  const { state, dispatch } = useContext(Context);

  const isPopUpOn = state.activeCharPosition || state.activeCharPosition === 0;

  if (!isPopUpOn) {
    return <></>;
  }

  const activeCharInfo = state.characterData[state.activeCharPosition];

  const episodeInfo = state.episodeData.map((el, i) => {
    return (
      <Fragment key={i}>
        <p>
          {el.episode} {el.name}
        </p>
      </Fragment>
    );
  });

  const {
    name,
    status,
    species,
    image,
    created,
    id,
    gender,
    origin,
  } = activeCharInfo;

  return (
    <>
      <Styled.DetailCard>
        <Styled.BasicInfoWrapper>
          <Styled.CharImg src={image} alt={name} />
          <div>
            <p>
              {name} id: {id}
            </p>
            <p>
              created on <DateFormat timeStamp={created} />
            </p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
          </div>
        </Styled.BasicInfoWrapper>

        <p>Appeared Episode:</p>
        {episodeInfo}
      </Styled.DetailCard>
      <Styled.ClosePopUpBtn
        onClick={() => {
          dispatch({
            type: `SET_ACTIVE_CHAR_POSITION`,
            payload: null,
          });
        }}
      >
        &#10005;
      </Styled.ClosePopUpBtn>
    </>
  );
};

export default DetailCard;
