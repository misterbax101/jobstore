import { combineReducers } from 'redux';
import { pages, currentPage, recordsCount } from './reducers';

export default function createPagination<ResultT, KeyT, fetchingActionT, successActionT>
    (fetchingAction: fetchingActionT, successAction: successActionT, idPropery: keyof ResultT) {

    const currentPageReducer = currentPage<fetchingActionT, number>(fetchingAction);
    const recordsCountReducer = recordsCount<successActionT, ResultT>(successAction);
    const pagesReducer = pages<ResultT, KeyT, fetchingActionT, successActionT>(fetchingAction, successAction, idPropery);

    return combineReducers({
        pages: pagesReducer,
        currentPage: currentPageReducer,
        recordsCount: recordsCountReducer
    })
};