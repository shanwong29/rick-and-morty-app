import React, { Fragment } from "react";
import DateFormat from "../DateFormat/DateFormat";

const InforCard = ({ characterData, showSecondPart, page }) => {
  const numOfCardOnEachPage = 10;

  let modifiedData;
  if (showSecondPart) {
    modifiedData = characterData.slice(numOfCardOnEachPage);
  } else {
    modifiedData = characterData.slice(0, numOfCardOnEachPage);
  }

  console.log("info card");

  const cardDisplay = modifiedData.map((el, i) => {
    const { name, status, species, image, created, id } = el;

    return (
      <Fragment key={i}>
        <img src={image} alt={name} />
        <p>
          {name} id: {id}
        </p>
        <p>
          created on <DateFormat timeStamp={created} />
        </p>
        <p>
          <span>species</span>
          <span>{species}</span>
        </p>
        <p>
          <span>status</span>
          <span>{status}</span>
        </p>
      </Fragment>
    );
  });

  return <div>{cardDisplay}</div>;
};

export default React.memo(InforCard);
