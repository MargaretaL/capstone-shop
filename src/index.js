import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import middleware from './redux/middleware';
import {createStore} from 'redux';
import {categoryReducer} from './redux/reducers/categories';

export const store = createStore(categoryReducer, middleware);


ReactDOM.render(
    <Provider store={store}><App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
