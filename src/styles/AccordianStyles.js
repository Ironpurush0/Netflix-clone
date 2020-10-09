import styled from 'styled-components/macro'

export const Body = styled.div`
 max-height: 1200px;
 transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
 font-size: 26px;
 font-weight: normal;
 line-height: normal;
 padding: 0.8em 2.2em 0.8em 1.2em;
 white-space: pre-wrap;
 user-select: none;
 
 @media (max-width: 600px){
     font-size: 16px;
     line-height: 22px;
 }
`

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222
`

export const Frame = styled.div``

export const Header = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 26px;
    padding: 0.8em, 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    @media (max-width: 600px){
        margin-bottom: 10px;
        font-size: 16px;
    }

    img{
        width: 24px;

        @media (max-width: 600px){
            width: 16px;
        }
    }
`

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const Title = styled.h1`
    color: white;
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 8px;
    text-align: center;

    @media (max-width: 600px){
        font-size: 35px;
    }
`

export const Item = styled.div`
    background-color: #888888;
    margin-bottom: 10px;
    padding: 5px;
    max-width: 700px;
    width: 100%;
    margin: auto;

    &:first-of-type{
        margin-top: 3em;
    }
`