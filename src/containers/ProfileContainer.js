import React from 'react'
import Header from '../components/Header'
import logo from '../logo.svg'
import Profiles from '../components/Profiles'

import {useAuthListner} from '../hooks/user-auth-listner'

const SelectProfileContainer = ({user, setProfile}) => {
    return (
        <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to='/home' src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                    <Profiles.Picture src={user.photoURL} />
    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
        </>
    )
}

export default SelectProfileContainer
