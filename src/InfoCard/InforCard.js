import React, { Fragment } from "react";
import DateFormat from "../DateFormat/DateFormat";

const InforCard = ({ characterData }) => {
  const cardDisplay = [...characterData].map((el, i) => {
    const { name, status, species, image, created } = el;

    return (
      <Fragment key={i}>
        <img src={image} alt={name} />
        <p>{name}</p>
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

export default InforCard;
