import React, { Fragment, useContext, useState } from "react";
import DateFormat from "../DateFormat/DateFormat";
import Context from "../../store/context";

const InfoCard = () => {
  console.log("info card");
  const { state, dispatch } = useContext(Context);
  const [isActiveChar, setActiveChar] = useState(null);

  console.log("epiReq", state.episodeReq, "epiData", state.episodeData);

  const getCharDetail = (episodeUrlArr, charIndex) => {
    const episodeNumArr = episodeUrlArr.map((url, i) => {
      let episodeNum = 1;
      for (let i = url.length - 1; i >= 0; i--) {
        if (url[i] === "/") {
          episodeNum = url.slice(i + 1);
          break;
        }
      }
      return episodeNum;
    });

    const episodeReq = episodeNumArr.join();
    setActiveChar(charIndex);
    dispatch({
      type: `UPDATE_ACTIVE_CHAR_EP_REQ`,
      payload: episodeReq,
    });
  };

  const numOfCardOnEachPage = 10;

  let modifiedData;
  if (state.showSecondPart) {
    modifiedData = state.characterData.slice(numOfCardOnEachPage);
  } else {
    modifiedData = state.characterData.slice(0, numOfCardOnEachPage);
  }

  const episodeInfo = state.episodeData.map((el, i) => {
    return (
      <Fragment key={i}>
        <p>
          <span>
            {el.episode} {el.name}
          </span>
        </p>
      </Fragment>
    );
  });

  const cardDisplay = modifiedData.map((el, i) => {
    const {
      name,
      status,
      species,
      image,
      created,
      id,
      gender,
      origin,
      episode,
    } = el;

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
        <button
          onClick={() => {
            getCharDetail(episode, i);
          }}
        >
          See more ...
        </button>
        {isActiveChar === i && (
          <>
            <p>
              <span>gender</span>
              <span>{gender}</span>
            </p>
            <p>
              <span>origin</span>
              <span>{origin.name}</span>
            </p>

            <p>Appeared Episode</p>
            {episodeInfo}
          </>
        )}
      </Fragment>
    );
  });

  return <div>{cardDisplay}</div>;
};

export default React.memo(InfoCard);
