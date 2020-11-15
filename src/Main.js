import React from 'react'
import Messages from './Messages'
import Sidebar from './Sidebar'
import './Main.css';
import Channel from './Channel';
import { Route, Switch } from 'react-router-dom';
function Main() {
    return (
        <div className = "main">
            <Sidebar/>
            <Switch>
                <Route path = "/channels/:channelId">
                    <Channel/>
                </Route>
                
            </Switch>
            
        </div>
    )
}

export default Main
