import React, { useContext, useEffect } from 'react'
import {Context} from '../../context/context'

import ImageCard from '../Image/Image'

import Container from './styles'

const Dashboard = () => {
    const { images, fetchPublicFeed} = useContext(Context)

    useEffect(() => {
        fetchPublicFeed()
    }, [])

    const render = () => {
        if(images.length){
            return images.map((image, i) => (
                <ImageCard key={i} content={image}/>
            ))
        } else {
            return '...Loading'
        }
    }

    console.log( images)
    return (
        <Container>
        {render()}
        </Container>
    )
}

export default Dashboard