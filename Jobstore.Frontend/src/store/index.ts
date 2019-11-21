import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import  authReducer from './auth/reducer';
import  vacanciesReducer  from './vacancies/reducers';
import  paginationReducer  from './pagination/reducers';
import  usersReducer  from './users/reducer';
import  dataReducer from './data/reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    vacancies: vacanciesReducer,
    pagination: paginationReducer,
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