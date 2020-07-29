import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { useFlickrApi, Context} from '../context/context'
import Dashboard from '../components/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'
import TagFeed from '../components/TagFeed/TagFeed'

const AppRouter = () => {
    const data = useFlickrApi()
    return (
        <Context.Provider value={data}>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/filtered/:tag" component={TagFeed} exact={true}/>
                </Switch>
            </BrowserRouter>
        </Context.Provider>
    )
}

export default AppRouter