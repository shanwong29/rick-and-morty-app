import styled from "styled-components";

export const InfoCardsWrapper = styled.div`
  width: 80vw;
  min-height: 40vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 1%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BasicInfoCard = styled.button`
  color: ${({ theme }) => theme.deepGreen};
  background: ${({ theme }) => theme.lightGreen};
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    background: ${({ theme }) => theme.deepGreen};
    color: ${({ theme }) => theme.lightGreen};
  }
`;

export const CharImg = styled.img`
  width: 100%;
`;
