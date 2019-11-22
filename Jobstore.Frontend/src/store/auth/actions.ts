import { authService } from '../../services';
import { history } from '../../untils/history';
import { LoginModel } from '../../types';
import { getUserById } from './../users/actions';
import {
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_ERROR,
    LOGIN_START
} from './types';

export const login = (data: LoginModel) => async (dispatch: any) => {
    try {
        dispatch(start());
        const authData = await authService.login(data);
        dispatch(success(authData.id));
        dispatch(checkAuthTimeout(authData.expires_in));
        dispatch(getUserById(authData.id));
        history.push('/');
    }
    catch (err) {
        dispatch(error(err));
    }
}


export const logout = (): AuthActionTypes => {
    authService.logout();
    history.push('/');
    return { type: LOGOUT }
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
        dispatch(success(userId));
        dispatch(getUserById(userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }
    } else {
        dispatch(logout());
    }
}

const start = (): AuthActionTypes => ({ type: LOGIN_START });
const success = (userId: string): AuthActionTypes => ({ type: LOGIN_SUCCESS, payload: userId });
const error = (error: string): AuthActionTypes => ({ type: LOGIN_ERROR, payload: error });
