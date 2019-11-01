import {
    GET_USER,
    UsersActions
} from './types';
import { successAlert, errorAlert } from '../alert/actions';
import UserModel from '../../models/UserModel';
import SignUpModel from '../../models/SignUpModel';
import usersService from '../../services/users';

export const signUp = (data: SignUpModel) => async (dispatch: any): Promise<void> => {
    try {
        const userId = await usersService.signUp(data)
        dispatch(successAlert('You have signed up successfully'));
    }
    catch (error) {
        const serverError = (error.response.data instanceof String) ? error.response.data : 'Internal Server Error';
        dispatch(errorAlert(`Sign up failed. ${serverError}`));
    }

}

export const getUserById = (userId: string) => (dispatch: any): void => {
    usersService.getUserById(userId)
        .then(user => {
            dispatch(getUser(user))
        })
}

function getUser(user: UserModel): UsersActions {
    return {
        type: GET_USER,
        payload: user
    };
}