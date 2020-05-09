import React, { Fragment, useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";
import styled from "styled-components";

const BUTTON = styled.button`
  background-color: rgb(192, 207, 195);
  color: rgb(75, 85, 79);
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 90%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

const DIV = styled.div`
  position: absolute;
  background: white;
  padding: 0;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  overflow: auto;
`;

const IMG = styled.img`
  width: 30vw;
`;

const DetailCard = ({ modifiedData }) => {
  console.log("detail card");
  const { state, dispatch } = useContext(Context);

  const activeCharInfo = modifiedData[state.activeCharPosition];

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
      <DIV>
        <div>
          <IMG src={image} alt={name} />

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
      </DIV>
      <BUTTON
        onClick={() => {
          dispatch({
            type: `UPDATE_ACTIVE_CHAR_POSITION`,
            payload: null,
          });
        }}
      >
        &#10005;
      </BUTTON>
    </>
  );
};

export default DetailCard;
