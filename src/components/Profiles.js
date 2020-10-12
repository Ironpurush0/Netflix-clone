import React from 'react'
import {Container, Title, Name, List, Item, Picture} from '../styles/ProfileStyles'

const Profiles = ({children, ...restProps}) => {
return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfileTitle({children, ...restProps}){
return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfileList({children, ...restProps}){
return <List {...restProps}>{children}</List>
}

Profiles.Picture = function ProfilePicture({src, ...restProps}){
return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />
}

Profiles.User = function ProfileUser({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Profiles.Name = function ProfileName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}



export default Profiles
