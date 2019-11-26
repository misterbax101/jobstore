import {
    GET_USER,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from './types';
import { ActionCreator } from './../types';
import { SignUpModel, UserModel } from '../../types';
import usersService from '../../services/users';

export const signUp = (data: SignUpModel) => async (dispatch: any): Promise<void> => {
    try {
        dispatch(ActionCreator<typeof SIGN_UP_REQUEST, null>(SIGN_UP_REQUEST, null));
        await usersService.signUp(data)
        dispatch(ActionCreator<typeof SIGN_UP_SUCCESS, string>(SIGN_UP_SUCCESS, 'You have signed up successfully'));
    }
    catch (err) {
        const serverError = (err.response.data instanceof String) ? err.response.data : 'Internal Server Error';
        dispatch(ActionCreator<typeof SIGN_UP_FAILED, string>(SIGN_UP_FAILED, `Sign up failed. ${serverError}`));
    }
}

export const getUserById = (userId: string) => async (dispatch: any): Promise<void> => {
    const user = await usersService.getUserById(userId)
    dispatch(ActionCreator<typeof GET_USER, UserModel>(GET_USER, user));
}

export const updateUserProfile = (user: UserModel) => async (dispatch: any): Promise<void> => {
    try {
        dispatch(ActionCreator<typeof UPDATE_USER_REQUEST, null>(UPDATE_USER_REQUEST, null));
        await usersService.updateUser(user.id, user.firstName, user.lastName)
        dispatch(ActionCreator<typeof UPDATE_USER_SUCCESS, string>(UPDATE_USER_SUCCESS, 'Your profile has been updated up successfully'));
    }
    catch (err) {
        const serverError = (err.response.data instanceof String) ? err.response.data : 'Internal Server Error';
        dispatch(ActionCreator<typeof UPDATE_USER_FAILED, string>(UPDATE_USER_FAILED, `Updating  failed. ${serverError}`));
    }
}