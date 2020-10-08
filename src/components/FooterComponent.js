import React from 'react'
import {Container, Row, Column, Title, Link, Text, Break} from '../styles/FooterStyles'

const FooterComponent = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container> 
}

FooterComponent.Row = function FooterRow({children, ...restProps}){
return <Row {...restProps}>{children}</Row>
}

FooterComponent.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
}

FooterComponent.Link = function FooterLink({children, ...restProps}){
return <Link {...restProps}>{children}</Link>
}

FooterComponent.Title = function FooterTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
}

FooterComponent.Text = function FooterText({children, ...restProps}){
return <Text {...restProps}>{children}</Text>
}

FooterComponent.Break = function FooterBreak({children, ...restProps}){
return <Break {...restProps}>{children}</Break>
}

export default FooterComponent
