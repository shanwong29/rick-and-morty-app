import styled from "styled-components";

export const PageBtn = styled.button`
  color: ${({ isActive, theme }) => (isActive ? "red" : theme.milkTea)};
  font-size: 1rem;
  padding: 8px;
  visibility: ${({ disabled }) => disabled && "hidden"};
  &:hover {
    text-decoration: underline;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 10px;
  }
`;
