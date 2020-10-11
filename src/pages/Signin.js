import React, {useState, useContext} from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import Form from '../components/Form'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../context/FirebaseContext'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    const isInvalid = password === '' || email === '';

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(res)
            history.push({
                pathname: '/browse'
            })   
        } catch (error) {
            setError(error.message)
        }

        setEmail('')
        setPassword('')
    }

    return (
        <>
        <HeaderContainer>
        <Form>
        <Form.Title>Sign in</Form.Title>
        {error && <Form.Error>{error}</Form.Error> }

        <Form.Base onSubmit={handleLogin} >
            <Form.Input value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} />
            <Form.Input type="password" autoComplete="off" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
            <Form.Submit disabled={isInvalid}>Sign in</Form.Submit>
        </Form.Base>
    <Form.Text>New to netflix?<Form.Link to="/signup">Sign up now.</Form.Link></Form.Text>
        <Form.SubTitle>This page is protected by google reCAPTCHA so don't try to spam me. Learn more.</Form.SubTitle>
    </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

export default Signin
