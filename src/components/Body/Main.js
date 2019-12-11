import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
import Settings from './Settings';

const Main = () => (
    <main> 
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/settings' component={Settings} />
        </Switch>
    </main>
)

export default Main
