import React from 'react'
import JumboTronContainer from '../containers/JumboTronContainer'
import FooterContainer from '../containers/FooterContainer'
import FaqsContainer from '../containers/FaqsContainer'
import HeaderContainer from '../containers/HeaderContainer'

import Feature from '../components/Feature'
import OptForm from '../components/Opt-form'


const Home = () => {
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel anytime</Feature.Subtitle>

                    <OptForm>
                            <OptForm.Input placeholder="Email" />
                            <OptForm.Button>Get started</OptForm.Button>
                            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumboTronContainer />
                    <FaqsContainer />        
                    <FooterContainer />
        </>
    )
}

export default Home
