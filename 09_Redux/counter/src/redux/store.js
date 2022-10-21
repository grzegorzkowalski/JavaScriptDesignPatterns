import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;


