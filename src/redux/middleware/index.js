/**
 * Created by lilit on 2018-10-03.
 */

import thunk from 'redux-thunk';
import logger from './logger';

import {applyMiddleware} from 'redux';

export default applyMiddleware(
    thunk,
    logger
)

