import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import Login from './containers/Login'
import Business from './containers/Business';
<<<<<<< HEAD
import AddBusiness from './containers/AddBusiness'
=======
import AddBusiness from './components/AddBusiness'
>>>>>>> d6a9c9b3c96ccbbc3b2cbbdd716216d1a902bfce



const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn'] ? true : false
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
            <ProtectedRoute path= '/add' component={AddBusiness} />
            <ProtectedRoute path= '/business/:id' component={Business}/>
            <ProtectedRoute path= '/AddBusiness' component={AddBusiness}/>
        </Switch>
    );
};

export default Router;
