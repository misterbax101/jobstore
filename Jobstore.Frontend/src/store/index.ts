import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer } from './auth/reducer';
import { alertReducer } from './alert/reducer';
import { usersReducer } from './users/reducer';
import { dataReducer } from './data/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    users: usersReducer,
    data: dataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}