import styled from "styled-components";

export const QueryForm = styled.form`
  width: 70vw;
  margin: 1% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    justify-content: space-between;
    & > div > label {
      display: inline-block;
      width: 60px;
      text-align: left;
    }
  }
`;

export const SubmitBtn = styled.button`
  display: none;
`;

export const ClearQueryBtn = styled.button`
  background: white;
  color: ${({ theme }) => theme.pastelOrange};
  border: ${({ theme }) => theme.pastelOrange} 1px solid;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.pastelOrange};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.beige};
  }
  padding: 5px 10px;
  margin: 3px;
`;
