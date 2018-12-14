import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Project from './pages/Project'

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/projects/:id" component={Project}/>
        </Switch>
    </BrowserRouter>
)

export default routes;