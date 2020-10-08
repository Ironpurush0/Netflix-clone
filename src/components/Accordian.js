import React, {useState, useContext, createContext} from 'react'
import {Body, Container, Header, Inner, Title, Frame, Item} from '../styles/AccordianStyles'

const toggleContext = createContext()

const Accordian = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Title = function AccordianTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
}


Accordian.Frame = function AccordianFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}


Accordian.Item = function AccordianItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <toggleContext.Provider value={{toggleShow, setToggleShow}}>
        <Item {...restProps}>{children}</Item>
    </toggleContext.Provider>
    ) 
}

Accordian.Header = function AccordianHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(toggleContext)
    return <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
        {children}
        {toggleShow ? <img src="/images/icons/close-slim.png" alt="close" /> : <img src="/images/icons/add.png" alt="add" />}
        </Header>
}
    
Accordian.Body = function AccordianBody({children, ...restProps}){
    const {toggleShow} = useContext(toggleContext)
    return toggleShow && <Body {...restProps}>{children}</Body>
}
    
export default Accordian
