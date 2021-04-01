import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./BasicInfoCards.styles";
import "./transition.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const BasicInfoCards = () => {
  const { state, dispatch } = useContext(Context);

  //handle Not-found
  if (state.isDataNotFound) {
    return (
      <Styled.ErrMsgWrapper>
        <h1>No characters fits this filter request. :(</h1>
      </Styled.ErrMsgWrapper>
    );
  }

  const numOfCardOnEachPage = 10;

  let modifiedData;
  if (state.showSecondPart) {
    modifiedData = state.characterData.slice(numOfCardOnEachPage);
  } else {
    modifiedData = state.characterData.slice(0, numOfCardOnEachPage);
  }

  const cardDisplay = modifiedData.map((el, i) => {
    const { name, status, species, image, id } = el;
    //for SET_ACTIVE_CHAR_POSITION use
    let charPosition = i;
    if (state.showSecondPart) {
      charPosition = i + numOfCardOnEachPage;
    }

    return (
      <Styled.BasicInfoCard
        onClick={() => {
          state.activeCharPosition !== charPosition &&
            dispatch({
              type: `SET_ACTIVE_CHAR_POSITION`,
              payload: charPosition,
            });
        }}
        key={id}
        isActive={
          i ===
          (typeof state.activeCharPosition === "number" &&
            state.activeCharPosition % 10)
        }
      >
        <img src={image} alt={name} />
        <Styled.TextWrapper>
          <h2>{name}</h2>
          <p>
            No: {id} | {species} | {status}
          </p>
        </Styled.TextWrapper>
      </Styled.BasicInfoCard>
    );
  });

  return (
    <div
      style={{
        minHeight: "38vw",
      }}
    >
      <SwitchTransition>
        <CSSTransition
          key={`${state.currentApiPage}${state.showSecondPart}${state.nameQuery}${state.speciesQuery}${state.statusQuery}`}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <Styled.InfoCardsWrapper>{cardDisplay}</Styled.InfoCardsWrapper>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default React.memo(BasicInfoCards);
