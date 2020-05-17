import React, { Fragment, useContext } from "react";
import { timeStampFormatter } from "../../service/timeStampFormatter";
import Context from "../../store/context";
import * as Styled from "./DetailCard.styles";

const DetailCard = () => {
  const { state, dispatch } = useContext(Context);

  const isPopUpOn = state.activeCharPosition || state.activeCharPosition === 0;

  if (!isPopUpOn) {
    return <></>;
  }

  const activeCharInfo = state.characterData[state.activeCharPosition];

  const episodeInfo = state.episodeData.map((el, i) => {
    return (
      <Fragment key={i}>
        <tr>
          <Styled.TH>
            <Styled.EpNum>{el.episode}</Styled.EpNum>
          </Styled.TH>
          <td>{el.name}</td>
        </tr>
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
    location,
  } = activeCharInfo;

  return (
    <>
      <Styled.DetailCard>
        <Styled.ImgWrapper>
          <img src={image} alt={name} />
        </Styled.ImgWrapper>

        <Styled.TextInfoWrapper>
          <h1>{name}</h1>
          <Styled.SubTitle>
            Id: {id} &#8226; created on {timeStampFormatter(created)}
          </Styled.SubTitle>

          <Styled.Table>
            <tbody>
              <tr>
                <Styled.TH>Species</Styled.TH>
                <td>{species}</td>
              </tr>
              <tr>
                <Styled.TH>Status</Styled.TH>
                <td>{status}</td>
              </tr>
              <tr>
                <Styled.TH>Gender</Styled.TH>
                <td>{gender}</td>
              </tr>
              <tr>
                <Styled.TH>Origin</Styled.TH>
                <td>{origin.name}</td>
              </tr>
              <tr>
                <Styled.TH>Location</Styled.TH>
                <td>{location.name}</td>
              </tr>
            </tbody>
          </Styled.Table>
          <Styled.Table>
            <thead>
              <tr>
                <th style={{ color: "grey" }} colSpan="3">
                  Appeared Episode
                </th>
              </tr>
            </thead>
            <tbody>{episodeInfo}</tbody>
          </Styled.Table>
        </Styled.TextInfoWrapper>
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
