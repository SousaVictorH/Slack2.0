import React, { useEffect } from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from '../components/layouts/Header';
import AppBody from '../components/layouts/AppBody';

import AppLoading from '../components/layouts/AppLoading';

import Login from '../components/layouts/Login';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Router() {
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const renderApp = () => {
        return(
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <AppBody />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }

    if (loading) {
        return(
            <AppLoading />
        );
    }

    return(
        user ? renderApp() : <Login />
    );
};

export default Router;
