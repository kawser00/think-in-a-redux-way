import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { myLogger } from './middlewares/myLogger';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
