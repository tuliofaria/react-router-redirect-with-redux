import React, { Component } from 'react'

import {
  Route,
  Link,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import store from './store'

import axios from './axios'

const Page1 = () => (<h1>Page 1</h1>)
const Page2 = () => (<h1>Page 2</h1>)

const Login = () => (<h1>Login</h1>)


const Restricted = (props) => (
  <div>
    {props.login.forceLogin && <Redirect to='/login' />}
    <Route path="/restricted/page1" component={Page1} />
    <Route path="/restricted/page2" component={Page2} />
  </div>
)
const mapStateToProps = state => {
  console.log(mapStateToProps)
  return {
    login: state.login
  }
}
const RestrictedConnected = connect(mapStateToProps, null)(Restricted)

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/restricted/page1">Page 1</Link></li>
          <li><Link to="/restricted/page2">Page 2</Link></li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/restricted/:page" component={RestrictedConnected}/>
      </div>
    </Provider>
  </Router>
)

export default App;
