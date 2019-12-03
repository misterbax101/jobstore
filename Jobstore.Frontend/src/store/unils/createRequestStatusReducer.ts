import { combineReducers } from 'redux'

import { createErrorReducer } from './createErrorReducer'
import { createLoadingReducer } from './createLoadingReducer'
import { createSuccessReducer } from './createSuccessReducer'

export const createRequestStatusReducer = <Types extends string>(request: Types, success: Types, failed: Types) =>
    combineReducers({
        loading: createLoadingReducer<Types>(request, success, failed),
        error: createErrorReducer<Types>(request, success, failed),
        success: createSuccessReducer<Types>(request, success, failed)
    });
