import React, { useContext, useEffect } from 'react'
import {Context} from '../../context/context'

import Image from './styles'

const Dashboard = () => {
    const { images, fetchPublicFeed} = useContext(Context)

    useEffect(() => {
        fetchPublicFeed()
    }, [])

    const render = () => {
        if(images.length !== 0){
            return images.map((image, i) => (
                <Image key={i} src={image}/>
            ))
        } else {
            return '...Loading'
        }
    }

    console.log( images)
    return (
        <div>
        {render()}
        </div>
    )
}

export default Dashboard