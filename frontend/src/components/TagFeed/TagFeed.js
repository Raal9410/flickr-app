import React, {useContext, useEffect} from 'react'
import {Context} from '../../context/context'

const TagFeed = (props) => {
    const tag = props.match.params.tag
    const {images, fetchTagFeed} = useContext(Context)
    useEffect(() => {
        fetchTagFeed(tag)
    }, [])

    console.log(images)
    return (
        <div>
            This is the tagged feed
        </div>
    )
}

export default TagFeed