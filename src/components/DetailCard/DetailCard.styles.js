import styled from "styled-components";

export const ClosePopUpBtn = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.secondary.main};
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.secondary.dark};
  }
  &:focus {
    background-color: ${({ theme }) => theme.secondary.dark};
  }
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 80vw;
  top: 15%;
  transform: translate(-50%, -50%);
  @media ${({ theme }) => theme.breakpoints.sm} {
    left: 90vw;
    top: 10vh;
    position: fixed;
  }
`;

export const DetailCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  height: 70%;
  background: white;
  text-align: left;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  overflow: auto;
  box-shadow: 20px 20px 30px ${({ theme }) => theme.shadowColor},
    -10px -10px 20px ${({ theme }) => theme.shadowColor};
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80vw;
    height: 80vh;
    position: fixed;
  }
`;

export const ImgWrapper = styled.div`
  width: 40%;
  & > img {
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TextInfoWrapper = styled.div`
  margin: 10px 20px;

  & > h1 {
    color: ${({ theme }) => theme.secondary.main};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 5px;
  }
`;

export const Table = styled.table`
  margin: 15px auto;
  width: 100%;
`;

export const TH = styled.th`
  vertical-align: text-top;
  color: grey;
  width: 90px;
`;

export const SubTitle = styled.p`
  color: grey;
  font-weight: 700;
`;

export const EpNum = styled.span`
  display: inline-block;
  width: 70px;
  background: ${({ theme }) => theme.primary.main};
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 2px;
  padding: 2px 4px;
  text-align: center;
`;
