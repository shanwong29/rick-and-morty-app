import styled from "styled-components";

export const PageBtn = styled.button`
  color: ${({ isActive, theme }) =>
    isActive ? theme.primary.main : theme.grey.main};
  font-size: 1rem;
  padding: 8px;
  visibility: ${({ disabled }) => disabled && "hidden"};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 10px;
  }
`;
