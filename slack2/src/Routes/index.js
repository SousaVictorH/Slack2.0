import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from '../components/layouts/Header';
import AppBody from '../components/layouts/AppBody';

function Router() {
    return(
        <BrowserRouter>
            <Header />
            <AppBody />
            <Switch>
                <Route path="/" exact>
                    
                </Route>
            </Switch>

        </BrowserRouter>
    );
};

export default Router;
