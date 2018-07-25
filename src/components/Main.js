import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Products from '../containers/Products';
import Orders from '../containers/Orders';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/orders' component={Orders} />
        </Switch>
    </main>
)

export default Main;