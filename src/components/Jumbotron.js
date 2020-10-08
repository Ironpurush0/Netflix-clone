import React from 'react'
import {Container, Inner, Item, Image, Pane, SubTitle, Title} from '../styles/JumbotronStyles'

function JumboTron({children, direction="row", ...restProps}) {
    return (
        <Item direction={direction}>
            <Inner>
                {children}
            </Inner>
        </Item>
    )
}

JumboTron.Container = function JumbotronContainer({children, ...restProps}){
return <Container>{children}</Container>
}

JumboTron.Pane = function JumbotronPane({children, ...restProps}){
return <Pane {...restProps}>{children}</Pane>
}

JumboTron.Title = function JumbotronTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
}

JumboTron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
return <SubTitle {...restProps}>{children}</SubTitle>
}

JumboTron.Image = function JumbotronImage({children, ...restProps}){
return <Image {...restProps}>{children}</Image>
}

export default JumboTron
