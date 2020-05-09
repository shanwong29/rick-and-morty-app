import styled from "styled-components";

export const PageBtn = styled.button`
  color: ${({ isActive, theme }) => (isActive ? "red" : theme.milkTea)};
  font-size: 1rem;
  padding: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
