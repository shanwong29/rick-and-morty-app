import styled from "styled-components";

export const QueryPanel = styled.div`
  margin: 1% auto;
  & > label {
    margin-left: 7px;
  }
`;

export const SpeciesQueryForm = styled.form`
  display: inline;
`;

export const SpeciesQueryInput = styled.input`
  font-size: 14px;
  padding: 2px;
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
  padding: 5px 10px;
  margin-left: 7px;
`;
