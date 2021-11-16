import styled from "styled-components";

export const Container = styled.div`
    height: 6vh;
    width: 85vw;
    display:flex;
    border-radius: 22px;
    border: 1px solid #0000000f;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
`;

export const Menu1 = styled.img`
  width: 20px;
`;

export const ButtonMenu = styled.button`
    display:flex;
    text-align: center;
    justify-content: center;
    align-items: center;  
    border: none;
    border: none;
    font-size: 0px;
    background-color: white;  
    transition: 0.3s ease;
    &:focus {
        transition: 0.3s ease;
        font-size: 10px;
        background-color: #53e88b38;
        width: 80px;
        height: 40px;
        border-radius: 22px;
  }
`;