import React, { useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import DetailCard from "../DetailCard/DetailCard";
import Context from "../../store/context";
import styled from "styled-components";

const BUTTON = styled.button`
  color: rgb(75, 85, 79);
  background: rgb(192, 207, 195);
  padding: 0;
  grid-column: span 1;
  &:hover {
    background: rgb(75, 85, 79);
    color: rgb(192, 207, 195);
  }
`;

const DIV = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative; /*for .mosaic__btn-wrapper*/
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoCard = () => {
  console.log("info card");
  const { state, dispatch } = useContext(Context);
  console.log("epiReq", state.episodeReq, "epiData", state.episodeData);

  const numOfCardOnEachPage = 10;

  let modifiedData;
  if (state.showSecondPart) {
    modifiedData = state.characterData.slice(numOfCardOnEachPage);
  } else {
    modifiedData = state.characterData.slice(0, numOfCardOnEachPage);
  }

  const cardDisplay = modifiedData.map((el, i) => {
    const { name, status, species, image, created, id } = el;

    return (
      <BUTTON
        onClick={() => {
          dispatch({
            type: `UPDATE_ACTIVE_CHAR_POSITION`,
            payload: i,
          });
        }}
        key={i}
      >
        <IMG src={image} alt={name} />
        <p>
          {name} id: {id}
        </p>
        <p>
          created on <DateFormat timeStamp={created} />
        </p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </BUTTON>
    );
  });

  return (
    <DIV>
      {cardDisplay}{" "}
      {state.activeCharPosition && <DetailCard modifiedData={modifiedData} />}
    </DIV>
  );
};

export default React.memo(InfoCard);
