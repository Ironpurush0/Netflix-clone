import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'


export const Container = styled.div``;

export const Title = styled.h1`
    color: white
`;

export const Error = styled.h1``;

export const Base = styled.form``;

export const Text = styled.p``;

export const SubTitle = styled.h2``;

export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

export const Input = styled.input``;

export const Submit = styled.button``;