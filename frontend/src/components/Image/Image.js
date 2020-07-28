import React from 'react'

import Card from './styles'

const ImageCard = ({content}) => {
    return (
        <Card src={content} alt={content}/>
    )
}

export default ImageCard