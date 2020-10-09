import React from 'react'
import Header from '../components/Header'


const HeaderContainer = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" alt="Netflix" src="/images/logo.svg" />
                <Header.ButtonLink to="/signin">Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
