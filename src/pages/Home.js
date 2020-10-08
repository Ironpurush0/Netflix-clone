import React from 'react'
import JumboTronContainer from '../containers/JumboTronContainer'
import FooterContainer from '../containers/FooterContainer'
import FaqsContainer from '../containers/FaqsContainer'

function Home() {
    return(
        <>
            <JumboTronContainer />
            <FaqsContainer />        
            <FooterContainer />
        </>
    )
}

export default Home
