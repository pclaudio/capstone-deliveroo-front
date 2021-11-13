import styled from "styled-components";

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #box {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
`;

export const Icon = styled.img`
  width: 32px;
  margin-right: 10px;
`;

export const H66 = styled.h6`
  font-weight: normal;
  margin: 0 auto 30px;
  color: var(--primary-color);
`;

export const H6 = styled.h6`
  font-weight: 900;
  margin: 0 auto 15px;
`;

export const Logo = styled.img`
  display: block;
  width: 30vh;
  margin: 0 auto;
`;

export const BgImg = styled.img`
  display: block;
  position: absolute;
  color: var(--primary-color);
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const LoginContainer = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 300px;

  .faceGoogle {
    background: var(--white);
    border: 1px solid #80808036;
    color: black;
    font-size: 15px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  #loginContent {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;

    .loginFaceGoogle {
      display: flex;
    }

    .inputsContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .inputContainer {
      height: 60px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      .errorLabel {
        color: var(--secondary-color);
      }
    }

    #cadastroContainer {
      display: flex;
      justify-content: space-between;

      a {
        color: var(--grey-300);
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;
