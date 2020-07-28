import React, { useContext, useEffect } from 'react'
import {Context} from '../../context/context'

const Dashboard = () => {
    const { images, fetchPublicFeed} = useContext(Context)

    useEffect(() => {
        fetchPublicFeed()
    }, [])

    console.log(images)

    return (
        <div>
        This is the Dashboard view
        </div>
    )
}

export default Dashboard