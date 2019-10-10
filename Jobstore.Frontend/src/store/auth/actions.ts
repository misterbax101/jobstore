import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import jwt from 'jsonwebtoken';

import auth from './../../apis/auth';
import { GET_ERRORS } from '../errors/types';
import LoginModel from './../../models/LoginModel';
import setAuthToken from './../../untils/setAuthToken';


export const login = (data: LoginModel) => async (dispatch: any) => {
    try {
        const response = await auth.post('login', data);
        const token = response.data.auth_token;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        console.log(jwt.decode(token));
    }
    catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

