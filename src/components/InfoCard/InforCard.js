import React, { Fragment, useContext } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";

const InforCard = () => {
  console.log("info card");
  const { state } = useContext(Context);

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
