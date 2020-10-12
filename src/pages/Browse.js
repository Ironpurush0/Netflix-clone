import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../context/FirebaseContext'
import {useHistory} from 'react-router-dom'
import {useContent} from '../hooks/use-content'
import {selectionFilter} from '../utills/file-selection'

import BrowseContainer from '../containers/BrowseContainer'

const Browse = () => {
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = selectionFilter({series, films})
    console.log(slides)
    console.log(films)
    console.log(series)
    const logout = async () => {
        await firebase.auth().signOut();
        history.goBack()
    }

    return (
        <div>
            <BrowseContainer slides={slides} />
            I am browse page
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Browse
