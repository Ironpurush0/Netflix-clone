import React, {useContext, useState, createContext} from 'react'
import {Container, Item, Image, Entities, Feature, FeatureText, FeatureTitle, FeatureClose, Group, Maturity, Content, Meta, Title, SubTitle, Text} from '../styles/CardStyles'


export const FeatureContext = createContext()

const Card = ({children, ...restProps}) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
    )
}

Card.Content = function CardContent({children, ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

Card.Meta = function CardMeta({children, ...restProps}){
    return <Meta {...restProps}>{children}</Meta>
}

Card.Feature = function CardFeatuer({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Card.FeatureText = function CardFeatuerText({children, ...restProps}){
    return <FeatuerText {...restProps}>{children}</FeatuerText>
}

Card.FeatureClose = function CardFeatureClose({children, ...restProps}){
return <FeatuerClose {...restProps}>{children}</FeatuerClose>
}

Card.Group = function CardGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubtitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Card.Entities = function CardEntities({children, ...restProps}){
    return <Entities {...restProps}>{children}</Entities>
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

Card.Feature = function CardFeature({children, category, ...restProps}){
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext)
    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

            <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity + "+"}
                </Maturity>
                <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Group>
            {children}
            </Content>
        </Feature>
    ) : null
}

Card.Maturity = function CardMaturity({children, ...restProps}){
return <Maturity {...restProps}>{children}</Maturity>
}

Card.FeatuerTitle = function CardFeatuerTitle({children, ...restProps}){
return <FeatuerTitle {...restProps}>{children}</FeatuerTitle>
}

Card.FeatureText = function CardFeatureText({children, ...restProps}){
return <FeatuerText {...restProps}>{chlidren}</FeatuerText>
}
export default Card
