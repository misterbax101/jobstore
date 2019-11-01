import { authService } from '../../services';
import { history } from '../../untils/history';
import LoginModel from './../../models/LoginModel';
import { errorAlert, clearAlert } from '../alert/actions';
import {
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';

export const login = (data: LoginModel) => async (dispatch: any) => {
    try {
        const userId = await authService.login(data);
        dispatch(success(userId));
        dispatch(clearAlert());
        history.push('/');
    }
    catch (error) {
        dispatch(errorAlert(error));
    }
}

export const logout = (): AuthActionTypes => {
    authService.logout();
    return { type: LOGOUT }
};

export const authCheckState = () => (dispach: any) => {
    const userId = authService.getUserIdFromStore();
    if (userId) {
        dispach(success(userId));
    } else {
        dispach(logout());
    }
}

const success = (userId: string): AuthActionTypes => ({ type: LOGIN_SUCCESS, payload: userId });


