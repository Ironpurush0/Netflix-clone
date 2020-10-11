import React, {useContext} from 'react'
import {FirebaseContext} from '../context/FirebaseContext'
import {useHistory} from 'react-router-dom'

const Browse = () => {
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    const logout = async () => {
        await firebase.auth().signOut();
        history.goBack()
    }

    const user = firebase.auth().currentUser;
    console.log(user)

    return (
        <div>
            I am browse page
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Browse
