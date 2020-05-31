import styled from "styled-components";

export const InfoCardsWrapper = styled.div`
  width: 80vw;
  min-height: 40vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 5px;

  & > button > div {
    border-left: 1px solid ${({ theme }) => theme.deepGreen};
  }
  & > button:first-child > div,
  & > button:nth-child(6) > div {
    border-left: 0px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    grid-template-columns: repeat(2, 1fr);
    & > button:first-child > div,
    & > button:nth-child(3) > div,
    & > button:nth-child(5) > div,
    & > button:nth-child(7) > div,
    & > button:nth-child(9) > div {
      border-left: 0px;
    }

    & > button:nth-child(6) > div {
      border-left: 1px solid ${({ theme }) => theme.deepGreen};
    }
  }
`;

export const BasicInfoCard = styled.button`
  color: ${({ theme, isActive }) =>
    isActive ? theme.lightGreen : theme.deepGreen};
  background: ${({ theme, isActive }) =>
    isActive ? theme.deepGreen : theme.lightGreen};
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.deepGreen};
    color: ${({ theme }) => theme.lightGreen};
  }
  grid-row: span 1;

  & > img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100%;
  & > h2 {
    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 1rem;
    }
  }
  & > p {
    font-size: 1rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 14px;
    }
  }
`;
