import styled from "styled-components";

export const InfoCardsWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const BasicInfoCard = styled.button`
  color: ${(props) => props.theme.deepGreen};
  background: ${(props) => props.theme.lightGreen};
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    background: ${(props) => props.theme.deepGreen};
    color: ${(props) => props.theme.lightGreen};
  }
`;

export const CharImg = styled.img`
  width: 100%;
`;
