import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 10px;
    flex-wrap: wrap;

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`

export const Text = styled.div`
    margin-top: 20px;
    font-size: 19.2px;
    color: white;
    text-align: center;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 22px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 50px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    &:hover{
        background: #f40612;
    }

    @media (max-width: 1000px){
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }

    img{
        margin-left: 10px;
        width: 24px;

        @media (max-width: 1000px){
            width: 16px;
        }
    }
`

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px;
    height: 50px;
    box-sizing: border-box;

    @media (max-width: 600px){
        height: 40px;
    }
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;