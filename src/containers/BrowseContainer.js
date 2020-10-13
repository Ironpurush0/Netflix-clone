import React, {useState, useContext, useEffect} from 'react'
import { useAuthListner } from '../hooks/user-auth-listner'
import SelectProfileContainer from './ProfileContainer'
import {FirebaseContext} from '../context/FirebaseContext'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Card from '../components/Card'
import {useHistory} from 'react-router-dom'

import logo from '../logo.svg'

const BrowseContainer = ({slides}) => {
    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([])

    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {}

    const logout = async () => {
        await firebase.auth().signOut();
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    return profile.displayName ? (
    <>
        {
            loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)
        }
        <Header src="witcher1" dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                <Header.Logo to="/home" src={logo} alt="Netflix" />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink>
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
                <Header.FeatureCallOut>Watch Witcher now.</Header.FeatureCallOut>
                <Header.Text>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.</Header.Text>
                <Header.Button>Play</Header.Button>
            </Header.Feature>
        </Header>

        <Card.Group>
            {slideRows.map(slideItem => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.SubTitle>{item.description}</Card.SubTitle>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                </Card>
            ))}
        </Card.Group>
    </> ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
