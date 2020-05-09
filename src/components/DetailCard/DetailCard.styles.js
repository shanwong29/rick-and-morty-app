import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.pastelOrange};
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.darkOrange};
  }
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 80%;
  top: 15%;
  transform: translate(-50%, -50%);
`;

export const Div = styled.div`
  width: 60%;
  height: 70%;
  background: white;
  text-align: left;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Img = styled.img`
  width: 50%;
`;
