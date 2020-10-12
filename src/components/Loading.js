import React from 'react'
import {LockBody, Spinner, Picture, ReleaseBody} from '../styles/LoadinStyles'

const Loading = ({src, ...restProps}) => {
    return (
    <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody />
}

export default Loading
