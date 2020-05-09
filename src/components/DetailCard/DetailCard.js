import React, { Fragment, useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";
import * as Styled from "./DetailCard.styles";

const DetailCard = () => {
  console.log("detail card");
  const { state, dispatch } = useContext(Context);

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
      <Styled.Div>
        <div>
          <Styled.Img src={image} alt={name} />

          <p>Appeared Episode:</p>
          {episodeInfo}
        </div>
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
      </Styled.Div>

      <Styled.Button
        onClick={() => {
          dispatch({
            type: `UPDATE_ACTIVE_CHAR_POSITION`,
            payload: null,
          });
        }}
      >
        &#10005;
      </Styled.Button>
    </>
  );
};

export default DetailCard;
