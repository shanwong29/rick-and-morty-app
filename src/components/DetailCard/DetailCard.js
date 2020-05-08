import React, { Fragment, useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";

const DetailCard = ({ modifiedData }) => {
  console.log("detail card");
  const { state } = useContext(Context);

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
    <div>
      <img src={image} alt={name} />
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
      <p>Appeared Episode:</p>
      {episodeInfo}
    </div>
  );
};

export default DetailCard;
