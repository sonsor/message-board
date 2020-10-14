import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

const Posts = lazy(() => import('../pages/posts'))

const AppRoute = () => {

    return (
        <Switch>
            <Layout>
                <Route path="/" exact component={Posts} />
            </Layout>
        </Switch>
    );
};

export default AppRoute;
