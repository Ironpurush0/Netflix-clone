import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* border-bottom: 8px solid #222222; */
    text-align: center;
    padding: 100px 45px;
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

export const Subtitle = styled.h2`
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
