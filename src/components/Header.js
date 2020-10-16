import React, {useState} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Background, Button, Container, Search, SearchIcon, SearchInput, Dropdown, ButtonLink, FeatureCallOut, Picture, Profile, Group, Text, Link, Feature, Logo} from '../styles/HeaderStyles'

const Header = ({bg=true, children, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({children, ...restProps}){
return <Feature {...restProps}>{children}</Feature>
}

Header.Search = function HeaderSearchTerm({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps} onClick={() => setSearchActive(searchActive => !searchActive)} >
            <SearchIcon>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput placeholder="Search" active={searchActive} value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        </Search>
    )
}




Header.Button = function HeaderButton({children, ...restProps}){
return <Button {...restProps}>{children}</Button>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = function HeaderProfile({children, ...restProps}){
return <Profile {...restProps}>{children}</Profile>
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Picture = function HeaderPicture({src, ...restProps}){
return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Group = function HeaderGroup({children, ...restProps}){
return <Group {...restProps}>{children}</Group>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
return <Link {...restProps}>{children}</Link>
}

Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.Text = function HeaderText({children, ...restProps}){
return <Text {...restProps}>{children}</Text>
}

export default Header
