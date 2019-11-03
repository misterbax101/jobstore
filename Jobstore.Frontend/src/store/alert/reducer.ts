import {
    AlertState,
    AlerActionTypes,
    SUCCESS,
    ERROR,
    CLEAR
} from './types'
import AlertTypes  from '../../models/AlertTypes';

const initialSate: AlertState = {
    alert: null
};

export function alertReducer(
    state = initialSate,
    action: AlerActionTypes
): AlertState {
    switch (action.type) {
        case SUCCESS:
            return {
                alert: {
                    message: action.payload,
                    type: AlertTypes.Success
                }
            }
        case ERROR:
            return {
                alert: {
                    message: action.payload,
                    type: AlertTypes.Error
                }
            }
        case CLEAR:
            return initialSate;
        default:
            return state

    }
}