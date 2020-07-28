import React from 'react';
import { useFlickrApi, Context} from '../context/context'

const AppRouter = () => {
    const data = useFlickrApi()
    return (
        <Context.Provider>
            Flickr App 
        </Context.Provider>
    )
}

export default AppRouter