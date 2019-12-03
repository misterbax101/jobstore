import { PayloadAction } from './../types';
import { UserModel } from '../../types';

export const GET_USER = 'GET_USER';

export const SIGN_UP_RESET = 'SIGN_UP_RESET';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export interface UsersState {
    [key: string]: UserModel
}

export type UsersActions =
    PayloadAction<typeof GET_USER, UserModel> |

    PayloadAction<typeof SIGN_UP_REQUEST, null> |
    PayloadAction<typeof SIGN_UP_SUCCESS, string> |
    PayloadAction<typeof SIGN_UP_FAILED, string> |

    PayloadAction<typeof UPDATE_USER_REQUEST, null> |
    PayloadAction<typeof UPDATE_USER_SUCCESS, UserModel> |
    PayloadAction<typeof UPDATE_USER_FAILED, string>

