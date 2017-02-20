import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link ,hashHistory} from 'react-router'
import Home from './home/home.jsx'
import Live from './live/live.jsx'

ReactDom.render(
    (<Router history={hashHistory}>
        <Route path='home' component={Home}/>
            <Route path='live' component={Live}/>
            </Router>)
    ,document.querySelector('#app'));