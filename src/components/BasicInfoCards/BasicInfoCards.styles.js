import styled from "styled-components";

export const ErrMsgWrapper = styled.div`
  width: 70vw;
  min-height: 40vw;
`;

export const InfoCardsWrapper = styled.div`
  width: 70vw;
  min-height: 35vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);

  margin-bottom: 10px;
  grid-gap: 10px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BasicInfoCard = styled.button`
  color: ${({ theme, isActive }) =>
    isActive ? theme.background : theme.success.main};
  background: ${({ theme, isActive }) =>
    isActive ? theme.primary.main : theme.secondary.main};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.background};
  }
  grid-row: span 1;

  & > img {
    border-radius: 5px 5px 0px 0px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100%;
  & > h2 {
    font-size: 18px;
    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 1rem;
    }
  }
  & > p {
    font-size: 14px;
    @media ${({ theme }) => theme.breakpoints.sm} {
      font-size: 14px;
    }
  }
`;
