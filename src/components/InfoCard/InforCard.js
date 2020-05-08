import React, { useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import DetailCard from "../DetailCard/DetailCard";
import Context from "../../store/context";

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
      <button
        onClick={() => {
          dispatch({
            type: `UPDATE_ACTIVE_CHAR_POSITION`,
            payload: i,
          });
        }}
        key={i}
      >
        <img src={image} alt={name} />
        <p>
          {name} id: {id}
        </p>
        <p>
          created on <DateFormat timeStamp={created} />
        </p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </button>
    );
  });

  return (
    <div>
      {cardDisplay}{" "}
      {state.activeCharPosition && <DetailCard modifiedData={modifiedData} />}
    </div>
  );
};

export default React.memo(InfoCard);
