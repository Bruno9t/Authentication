import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'


//rota privada

export default function Routes() {
  return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Login}/>
            <Route  path="/signup" component={Register}/>
            <Route  path='/app' component={()=><h1>App</h1>}/>
            </Switch>
        </BrowserRouter>
  )
}
