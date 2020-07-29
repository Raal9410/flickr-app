import React, {useContext, useEffect} from 'react'
import {Context} from '../../context/context'

import ImageCard from '../Image/Image'

const TagFeed = (props) => {
    const tag = props.match.params.tag
    const {images, fetchTagFeed} = useContext(Context)
    useEffect(() => {
        fetchTagFeed(tag)
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

    console.log(images)
    return (
        <div>
            {render()}
        </div>
    )
}

export default TagFeed