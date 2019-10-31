import {
    AlertState,
    AlertType,
    AlerActionTypes,
    SUCCESS,
    ERROR,
    CLEAR
} from './types'

const initialSate: AlertState = {
    message: null,
    type: null
};

export function alertReducer(
    state = initialSate,
    action: AlerActionTypes
): AlertState {
    switch (action.type) {
        case SUCCESS:
            return {
                message: action.payload,
                type: AlertType.Success
            }
        case ERROR:
            return {
                message: action.payload,
                type: AlertType.Error
            }
        case CLEAR:
            return initialSate;
        default:
            return state

    }
}