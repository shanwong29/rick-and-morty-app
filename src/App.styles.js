import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.primary.lighten3};
  min-height: 100vh;
`;
