import {
    AlerActionTypes,
    SUCCESS,
    ERROR,
    CLEAR
} from './types'

export const successAlert = (message: string): AlerActionTypes => ({
    type: SUCCESS,
    payload: message
});

export const errorAlert = (message: string): AlerActionTypes => ({
    type: ERROR,
    payload: message
});

export const clearAlert = (): AlerActionTypes => ({
    type: CLEAR,
});
