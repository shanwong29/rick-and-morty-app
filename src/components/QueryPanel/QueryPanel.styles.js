import styled from "styled-components";

export const QueryPanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  margin: 1% 0;
  justify-content: space-around;
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    justify-content: end;
  }
`;

export const QueryForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div > label {
    margin-left: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: space-between;
    & > div > label {
      display: inline-block;
      width: 60px;
      text-align: left;
      margin-left: 0px;
    }
  }
`;

export const SubmitBtn = styled.button`
  display: none;
`;

export const ClearQueryBtn = styled.button`
  background: white;
  color: ${({ theme }) => theme.secondary.main};
  border: ${({ theme }) => theme.secondary.main} 1px solid;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.secondary.main};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.beige};
  }
  padding: 5px 10px;
  margin: 3px;
`;
