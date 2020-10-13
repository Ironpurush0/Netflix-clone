import React, {createContext, useState, useEffect, useContext} from 'react'
import {Container, Group, Text, Title, SubTitle, Entities, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Item, Image} from '../styles/CardStyles'

export const FeatureContext = createContext()

const Card = ({children, ...restProps}) => {
    const[showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({children, ...restProps}){
return <Group {...restProps}>{children}</Group>
}

Card.Meta = function CardMeta({children, ...restProps}){
return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({item, children, ...restProps}){
    const {setShowFeature, setItemFeature} = useContext(FeatureContext)
    return <Item onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
    }} {...restProps}>{children}</Item>
}

Card.Image = function CardImage({...restProps}){
return <Image {...restProps} />
}

Card.Entities = function CardEntities({children, ...restProps}){
return <Entities {...restProps}>{children}</Entities>
}

Card.Title = function CardTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.Text = function CardText({children, ...restProps}){
return <Text {...restProps}>{children}</Text>
}

Card.SubTitle = function CardSubTitle({children, ...restProps}){
return <SubTitle {...restProps}>{children}</SubTitle>
}

export default Card
