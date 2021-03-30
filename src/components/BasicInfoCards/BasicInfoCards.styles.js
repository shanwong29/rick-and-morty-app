import styled from "styled-components";

export const InfoCardsWrapper = styled.div`
  width: 70vw;
  min-height: 35vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 10px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BasicInfoCard = styled.button`
  color: ${({ theme, isActive }) =>
    isActive ? theme.primary.lighten1 : theme.secondary.main};
  background: ${({ theme, isActive }) =>
    isActive ? theme.primary.main : theme.primary.lighten1};
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.lighten1};
  }
  grid-row: span 1;

  & > img {
    width: 100%;
  }

  &:not(:first-child):not(:nth-child(6)) > div {
    border-left: 1px solid ${({ theme }) => theme.secondary.main};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    &:not(:first-child):not(:nth-child(6)) > div {
      border-left: 1px solid transparent;
    }

    &:first-child > div,
    &:nth-child(3) > div,
    &:nth-child(5) > div,
    &:nth-child(7) > div,
    &:nth-child(9) > div {
      border-right: 1px solid ${({ theme }) => theme.secondary.main};
    }
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
