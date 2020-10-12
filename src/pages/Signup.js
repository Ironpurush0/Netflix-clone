import React, {useState, useContext} from 'react'
import FooterContainer from '../containers/FooterContainer'
import Form from '../components/Form'
import HeaderContainer from '../containers/HeaderContainer'
import { FirebaseContext } from '../context/FirebaseContext'
import {useHistory} from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()

    const isInvalid = firstName === '' || email === '' || password === '';

    const handleSignup = async (event) => {
        event.preventDefault()

        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(res)
            res.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1
            })
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <HeaderContainer>
                <Form>
        <Form.Title>Sign up</Form.Title>
        {error && <Form.Error>{error}</Form.Error> }

        <Form.Base onSubmit={handleSignup} >
            <Form.Input value={firstName} placeholder="FirstName" onChange={event => setFirstName(event.target.value)} />
            <Form.Input value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} />
            <Form.Input type="password" autoComplete="off" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
            <Form.Submit disabled={isInvalid}>Sign up</Form.Submit>
        </Form.Base>
    <Form.Text>Already have an account?<Form.Link to="/signin">Sign in</Form.Link></Form.Text>
        <Form.SubTitle>This page is protected by google reCAPTCHA so don't try to spam me. Learn more.</Form.SubTitle>
    </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Signup
