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

    return (
        <div>
            <BrowseContainer slides={slides} />
        </div>
    )
}

export default Browse
