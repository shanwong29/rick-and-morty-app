import styled from "styled-components";

export const ClosePopUpBtn = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.pastelOrange};
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.darkOrange};
  }
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 80%;
  top: 15%;
  transform: translate(-50%, -50%);
`;

export const DetailCard = styled.div`
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
export const CharImg = styled.img`
  width: 50%;
`;
