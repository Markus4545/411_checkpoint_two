import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Login from './containers/Login'
import Business from './containers/Business';



const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn']
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth() === true 
        ? <Component {...props}/>
        : <Redirect to={{pathname: '/login', state:{from: props.location} }} />}
        />
        )
        }


const Router = () => {
    return (
        <Switch>
            <Route exact path="/"  />
            <Route path="/listing" component={Listing}/>
            <Route path='/login' component={Login} />
            <ProtectedRoute path= '/business/:id' component={Business}/>
        </Switch>
    );
};

export default Router;
