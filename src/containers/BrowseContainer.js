import React, {useState, useContext, useEffect} from 'react'
import { useAuthListner } from '../hooks/user-auth-listner'
import SelectProfileContainer from './ProfileContainer'
import {FirebaseContext} from '../context/FirebaseContext'
import Loading from '../components/Loading'
import Header from '../components/Header'


import logo from '../logo.svg'

const BrowseContainer = ({slides}) => {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const {firebase} = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    console.log(profile)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[profile.displayName])

    return profile.displayName ? (
    <>
        {
            loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)
        }
        <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Logo to="/home" src={logo} alt="Netflix" />
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
            </Header.Frame>
            <Header.Feature>
                <Header.FeatureCallOut>Watch joker now.</Header.FeatureCallOut>
                <Header.Text>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</Header.Text>
            </Header.Feature>
        </Header>
    </> ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
