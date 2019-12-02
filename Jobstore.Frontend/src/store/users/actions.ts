import axios from 'axios';

import {
    GET_USER,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from './types';
import { apis } from './../../constants';
import resources from './../../translations';
import { ActionCreator } from './../types';
import { SignUpModel, UserModel } from '../../types';

const { accountsEndpoint } = apis;
const { resposeMessages } = resources.signUp;

export const signUp = (data: SignUpModel) => async (dispatch: any): Promise<void> => {
    try {
        dispatch(ActionCreator<typeof SIGN_UP_REQUEST, null>(SIGN_UP_REQUEST, null));
        await axios.post<UserModel>(accountsEndpoint, data);
        dispatch(ActionCreator<typeof SIGN_UP_SUCCESS, string>(SIGN_UP_SUCCESS, resposeMessages.SignedUpSuccessfully));
    }
    catch (err) {
        const serverError = (err.response.data instanceof String) ? err.response.data : resposeMessages.InternalServerError;
        dispatch(ActionCreator<typeof SIGN_UP_FAILED, string>(SIGN_UP_FAILED, `${resposeMessages.SignUpFailed} ${serverError}`));
    }
}

export const getUserById = (userId: string) => async (dispatch: any): Promise<void> => {
    const response = await axios.get<UserModel>(`${accountsEndpoint}/${userId}`);
    dispatch(ActionCreator<typeof GET_USER, UserModel>(GET_USER, response.data));
}

export const updateUserProfile = ({ id, firstName, lastName }: UserModel) => async (dispatch: any): Promise<void> => {
    try {
        dispatch(ActionCreator<typeof UPDATE_USER_REQUEST, null>(UPDATE_USER_REQUEST, null));
        await axios.put(`${accountsEndpoint}/${id}`, {
            firstName,
            lastName
        });
        dispatch(ActionCreator<typeof UPDATE_USER_SUCCESS, string>(UPDATE_USER_SUCCESS, resposeMessages.ProfileUpdatedSuccessfully));
    }
    catch (err) {
        const serverError = (err.response.data instanceof String) ? err.response.data : resposeMessages.InternalServerError;
        dispatch(ActionCreator<typeof UPDATE_USER_FAILED, string>(UPDATE_USER_FAILED, `${resposeMessages.UpdatingFailed} ${serverError}`));
    }
}
