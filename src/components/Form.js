import React from 'react'
import {Container, Title, Base, SubTitle, Error, Text, Submit, Link, Input} from '../styles/FormStyles'

const Form = ({children, ...restProps}) => {
    return (
    <Container {...restProps}>{children}</Container>
    )
}

Form.Error = function FormError({children, ...restProps}){
return <Error {...restProps}>{children}</Error>
}

Form.Title = function FormTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
}

Form.SubTitle = function FormSubTitle({children, ...restProps}){
return <SubTitle {...restProps}>{children}</SubTitle>
}

Form.Text = function FormText({children, ...restProps}){
return <Text {...restProps}>{children}</Text>
}

Form.Base = function FormBase({children, ...restProps}){
return <Base {...restProps}>{children}</Base>
}

export default Form
