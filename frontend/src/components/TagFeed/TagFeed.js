import React from 'react'

const TagFeed = (props) => {
    const tag = props.match.params.tag
    console.log(tag)
    return (
        <div>
            This is the tagged feed
        </div>
    )
}

export default TagFeed