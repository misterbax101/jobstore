import { authService } from '../../services';
import { LoginModel } from '../../types';
import { ActionCreator } from '../types';
import { getUserById } from './../users/actions';
import {
    LOGOUT,
    LOGIN_RESET,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    AuthActionTypes
} from './types';

export const login = (data: LoginModel) => async (dispatch: any): Promise<boolean> => {
    try {
        dispatch(ActionCreator<typeof LOGIN_REQUEST, null>(LOGIN_REQUEST, null));
        const { id, expires_in } = await authService.login(data);
        dispatch(ActionCreator<typeof LOGIN_SUCCESS, string>(LOGIN_SUCCESS, id));
        dispatch(checkAuthTimeout(expires_in));
        dispatch(getUserById(id));
        return true;
    }
    catch (err) {
        dispatch(ActionCreator<typeof LOGIN_ERROR, string>(LOGIN_ERROR, err));
        return false;
    }
}

export const logout = (): AuthActionTypes => {
    authService.logout();
    return ActionCreator<typeof LOGOUT, null>(LOGOUT, null);
};

export const checkAuthTimeout = (expirationTime: number) => (dispatch: any) => {
    setTimeout(() => {
        dispatch(logout());
    }, expirationTime * 1000);
};

export const authCheckState = () => async (dispatch: any) => {
    const userId = authService.getUserId();
    if (userId) {
        const expirationDate = authService.getExpirationDate();
        if (expirationDate == null || expirationDate <= new Date()) {
            dispatch(logout());
        } else {
            dispatch(ActionCreator<typeof LOGIN_SUCCESS, string>(LOGIN_SUCCESS, userId));
            dispatch(getUserById(userId));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    } else {
        dispatch(logout());
    }
}


export const reset = () =>  ActionCreator<typeof LOGIN_RESET, null>(LOGIN_RESET,null);
