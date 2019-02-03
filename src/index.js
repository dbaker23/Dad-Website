import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './styles/frameStyles.scss';
import reducers from './reducers';
import Frame from './components/frame/frame';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
/* <Route path='/posts/new' component={} />
<Route path='/posts/:id' component={} /> */
ReactDOM.render(
    <Provider store={createStoreWithMiddleware( reducers )}>
        <BrowserRouter>        
            <div>
                <Switch>
                    <Route path='/' component={Frame} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
