import React, {useState, useContext, useEffect} from 'react'
import SelectProfileContainer from './ProfileContainer'
import FooterContainer from '../containers/FooterContainer'
import {FirebaseContext} from '../context/FirebaseContext'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Card from '../components/Card'
import Player from '../components/Player'
import {useHistory} from 'react-router-dom'
import Fuse from 'fuse.js'

import {Data} from '../utills/header.content'

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


    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']})
        const result = fuse.search(searchTerm).map(({item}) => item);

        if(slideRows.length > 0 && searchTerm.length > 3 && result.length > 0){
            setSlideRows(result)
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])


    return profile.displayName ? (
    <>
        {
            loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)
        }
        <Header src={category === 'series' ? "witcher1" : "extraction" } dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                <Header.Logo to="/home" src={logo} alt="Netflix" />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
    <Header.FeatureCallOut>{category === 'series' ? Data.series.title : Data.film.title}</Header.FeatureCallOut>
    <Header.Text>{category === 'series' ? Data.series.desc : Data.film.desc}</Header.Text>
                <Header.Button>Play</Header.Button>
            </Header.Feature>
        </Header>

        <Card.Group>
            {slideRows.map(slideItem => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map(item => (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src="/videos/bunny.mp4" />
                        </Player>
                    </Card.Feature>
                </Card>
            ))}
        </Card.Group>
        <FooterContainer />
    </> ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
