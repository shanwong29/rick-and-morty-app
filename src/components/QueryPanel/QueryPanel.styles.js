import styled from "styled-components";

export const QueryPanel = styled.div`
  margin: 1% 0;
  width: 100%;
  & > form {
    display: inline;
  }

  & > form > input {
    margin-right: 2%;
  }
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
  margin-left: 2%;
`;
