import { GET_ERRORS, ErrorState, ErrorAction } from './types';

const initialState: ErrorState = {
    message: null
}

export function errorsReducer(
    state = initialState,
    action: ErrorAction
): ErrorState {
    switch (action.type) {
        case GET_ERRORS:
            return { message: action.payload };
        default:
            return state;
    }
}