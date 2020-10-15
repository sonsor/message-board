import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Main} from "../layout/main";

const Posts = lazy(() => import('../pages/posts'))

const AppRoute = () => {

    return (
        <Switch>
            <Main>
                <Route path="/" exact component={Posts} />
            </Main>
        </Switch>
    );
};

export default AppRoute;
