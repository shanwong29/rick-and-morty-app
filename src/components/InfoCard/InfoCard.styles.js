import styled from "styled-components";

export const Button = styled.button`
  color: rgb(75, 85, 79);
  background: rgb(192, 207, 195);
  padding: 0;
  grid-column: span 1;
  &:hover {
    background: rgb(75, 85, 79);
    color: rgb(192, 207, 195);
  }
`;

export const Div = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative; /*for .mosaic__btn-wrapper*/
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
