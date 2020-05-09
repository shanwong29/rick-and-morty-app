import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(192, 207, 195);
  color: rgb(75, 85, 79);
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 90%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export const Div = styled.div`
  position: absolute;
  background: white;
  padding: 0;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  overflow: auto;
`;

export const Img = styled.img`
  width: 30vw;
`;
