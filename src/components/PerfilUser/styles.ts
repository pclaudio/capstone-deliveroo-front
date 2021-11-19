import styled from "styled-components";

export const Imagem = styled.img`
    position:fixed;
    top: 0;
    z-index: -99;
    width:100%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background: white;
    border: 1px solid #0000001f;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    margin-top: 300px;
    padding-bottom: 34vh;
    .logout{
        position:fixed;
        top: 20px;
        right: 20px;
        width: 70px;
        height: 25px;
    }
    .fav{
        font-size:large;
    }
`;

export const Voucher = styled.div`
    display: flex;
    border: 1px solid #0000001f;
    height: 70px;
    width: 320px;
    border-radius: 22px;
    margin: 30px auto;
    background-color: white;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
`;

export const Favorito = styled.div`
    display: flex;
    border: 1px solid #0000001f;
    height: 90px;
    width: 300px;
    border-radius: 22px;
    margin: 15px auto;
    background-color: white;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
`;

export const ContainerMaster = styled.div`
    display: block;
    align-items: center;
`;

export const H1 = styled.h1`
    margin: 30px 10px 10px 10px;
`;

export const Edit = styled.img`
    width: 30px;
    margin-left: 90px;
`;