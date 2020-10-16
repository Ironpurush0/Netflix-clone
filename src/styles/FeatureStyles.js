import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 100px 45px;

    @media (max-width: 600px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    max-width: 640px;
    font-size: 20px;
    font-weight: normal;
    margin: 16px auto;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;
