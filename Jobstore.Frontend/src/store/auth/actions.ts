import { authService, usersService } from '../../services';
import { history } from '../../untils/history';
import LoginModel from './../../models/LoginModel';
import UserModel from './../../models/UserModel';
import { errorAlert, clearAlert } from '../alert/actions';
import {
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';
import { async } from 'q';

export const login = (data: LoginModel) => async (dispatch: any) => {
    try {
        const userId = await authService.login(data);
        const curentUser = await usersService.getUserById(userId);
        dispatch(success(curentUser));
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

export const authCheckState = () => async (dispach: any) => {
    const userId = authService.getUserIdFromStore();
    if (userId) {
        const curentUser = await usersService.getUserById(userId);
        dispach(success(curentUser));
    } else {
        dispach(logout());
    }
}

const success = (userId: UserModel): AuthActionTypes => ({ type: LOGIN_SUCCESS, payload: userId });


