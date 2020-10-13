import React, {useState, useContext, useEffect} from 'react'
import { useAuthListner } from '../hooks/user-auth-listner'
import SelectProfileContainer from './ProfileContainer'
import {FirebaseContext} from '../context/FirebaseContext'
import Loading from '../components/Loading'
import Header from '../components/Header'
import {useHistory} from 'react-router-dom'

import logo from '../logo.svg'

const BrowseContainer = ({slides}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {}
    const history = useHistory()

    const logout = async () => {
        await firebase.auth().signOut();
        history.goBack()
    }

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
                <Header.Group>
                <Header.Logo to="/home" src={logo} alt="Netflix" />
                <Header.TextLink>Series</Header.TextLink>
                <Header.TextLink>Films</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={logout}>Sign out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Frame>
            <Header.Feature>
                <Header.FeatureCallOut>Watch joker now.</Header.FeatureCallOut>
                <Header.Text>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</Header.Text>
                <Header.Button>Play</Header.Button>
            </Header.Feature>
        </Header>
    </> ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
