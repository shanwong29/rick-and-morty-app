import styled from "styled-components";

export const PageBtn = styled.button`
  color: ${({ isActive, theme }) =>
    isActive ? theme.accent.main : theme.success.lighten4};
  font-size: 1rem;
  padding: 8px;
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
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
