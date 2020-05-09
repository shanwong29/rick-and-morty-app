import styled from "styled-components";

export const Div = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Button = styled.button`
  color: rgb(75, 85, 79);
  background: rgb(192, 207, 195);
  padding: 0;
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    background: rgb(75, 85, 79);
    color: rgb(192, 207, 195);
  }
`;

export const Img = styled.img`
  width: 100%;
`;
