import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 100px;
  margin-bottom: 15px;
  box-shadow: 5px 5px 28px 0px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 5px 5px 28px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 5px 5px 28px 0px rgba(0, 0, 0, 0.6);
  border-radius: 22px;
  justify-content: space-around;
  background: white;

  img {
    width: 80px;
    height: 80px;
    margin-right: 5px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H66Name = styled.h6`
    font-weight: normal;
    font-size: 14px;
    width: 150px;
    color: black;
`;

export const H66Cat = styled.h6`
  font-weight: normal;
  font-size: 12px;
  color: grey;
`;

export const H66Price = styled.h6`
  font-weight: bold;
  font-size: 15px;
  color: var(--hover-color-50);
`;

export const QTDContainer = styled.div`
  display: flex;
  margin-right: 5px;
  h2 {
    margin: 0 15px;
  }
`;
