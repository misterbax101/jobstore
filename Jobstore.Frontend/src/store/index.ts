import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import authReducer from './auth/reducer';
import vacanciesReducer from './vacancies/reducers';
import createPagination from './pagination/createPagination';
import usersReducer from './users/reducer';
import dataReducer from './data/reducers';

import {
    GET_VACANCIES_REQUEST,
    GET_VACANCIES_SUCCESS
} from './vacancies/types';
import { VacancyModel } from '../types';

const vacancies = createPagination<VacancyModel, number, typeof GET_VACANCIES_REQUEST, typeof GET_VACANCIES_SUCCESS>(GET_VACANCIES_REQUEST, GET_VACANCIES_SUCCESS, 'id');

const pagination = combineReducers({
    vacancies
});

const rootReducer = combineReducers({
    auth: authReducer,
    vacancies: vacanciesReducer,
    pagination: pagination,
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