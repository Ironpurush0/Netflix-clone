import React from 'react'
import {Container, Text, Button, Input, Break} from '../styles/OptFormStyles'

function OptForm({children, ...restProps}) {
return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak(){
    return <Break />
}



export default OptForm