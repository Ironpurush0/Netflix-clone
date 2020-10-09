import React from 'react'
import OptForm from '../components/Opt-form'

function OptFormContainer() {
    return (
        <OptForm>
            <OptForm.Input placeholder="Enter email" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>Enter your email and start your memberhship</OptForm.Text> 
        </OptForm>
    )
}

export default OptFormContainer
