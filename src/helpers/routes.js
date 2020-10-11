import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const IsRedirectUser = ({loggedInPath, children, user, ...rest}) => {
    return <Route
    {...rest}
    render={() => {
        if(!user){
            return children
        }

        if(user){
            return (
                <Redirect to={{pathname: loggedInPath}} />
            )
        }
        return null
    }
}
     />
}

export const ProtectedRoute = ({children, user, ...rest}) => {
    return <Route {...rest} render={({location}) => {
        if(user){
            return children
        }

        if(!user){
            return <Redirect to={{pathname: '/signin', state: {from: location}}} />
        }

        return null
    }} />
}