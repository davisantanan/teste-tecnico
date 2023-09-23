import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const MainContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageTitle = styled.h1 `
    font-size: 40px;
    margin-bottom: 20px;
`;

export const Table = styled.table `
    border: 1px solid black;
    border-collapse: collapse;
    margin: 25px 0; 
    font-size: 18px;
    width: 500px;

    @media(max-width: 768px){
        width: 70%;
    }
`;

export const Tr = styled.tr `
    border-Bottom: 1px solid gray;
    
    :first-child{
        background-color: gray;
        border-bottom: 1px solid black;
    }
    :last-of-type {
        border-bottom: 1px solid black;
    }
    
`;  
export const Td = styled.td `
    padding: 10px 12px;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media(max-width: 768px){
        max-width: 200px;
    }

    @media(max-width: 360px) {
        max-width: 150px;
    }
`;