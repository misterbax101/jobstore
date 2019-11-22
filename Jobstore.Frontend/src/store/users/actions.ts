import {
    GET_USER,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
} from './types';
import { ActionCreator } from './../types';
import { SignUpModel, UserModel } from '../../types';
import usersService from '../../services/users';
import { async } from 'q';

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

export const getUserById = (userId: string) => (dispatch: any): void => {
    usersService.getUserById(userId)
        .then(user => {
            dispatch(ActionCreator<typeof GET_USER, UserModel>(GET_USER, user));
        })
}


export const updateUserProfile = (userId: string) => async (dispatch: any): Promise<void> => {
    
}