import {
    GET_USER,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    UsersActions
} from './types';
import { SignUpModel, UserModel } from '../../models';
import usersService from '../../services/users';

export const signUp = (data: SignUpModel) => async (dispatch: any): Promise<void> => {
    try {
        dispatch(signUpStart());
        await usersService.signUp(data)
        dispatch(signUpSuccess('You have signed up successfully'));
    }
    catch (err) {
        const serverError = (err.response.data instanceof String) ? err.response.data : 'Internal Server Error';
        dispatch(signUpError(`Sign up failed. ${serverError}`));
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

const signUpStart = (): UsersActions => ({ type: SIGN_UP_START });
const signUpSuccess = (successMsg: string): UsersActions => ({ type: SIGN_UP_SUCCESS, payload: successMsg });
const signUpError = (errorMsg: string): UsersActions => ({ type: SIGN_UP_FAILED, payload: errorMsg });