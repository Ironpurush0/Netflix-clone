import React, {useState} from 'react'
import Form from '../components/Form'


const FormContainer = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
    <Form>
        <Form.Title>Sign in</Form.Title>
    {error && <Form.Error>{error}</Form.Error> }

    <Form.Base onClick={handleSubmit} method="POST">
        <Form.Input placeholder="Email address" value={email} onChange={text => setEmail(text)} />
        <Form.Input placeholder="Password" type="password" autoComplete="off" value={password} onChange={text => setPassword(text)} />
        <Form.Submit disabled={isInvalid}>
            Sign in
        </Form.Submit>
    </Form.Base>
    </Form>
    )
}

export default FormContainer
