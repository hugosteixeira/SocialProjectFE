import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/main'
import Project from './pages/Project'
import NewProject from './pages/newProject'

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/projects/newproject" component={NewProject}/>
            <Route exact path="/projects/editproject/:id" component={EditProject}/>
            <Route exact path="/projects/:id" component={Project}/>
        </Switch>
    </BrowserRouter>
)

export default routes;