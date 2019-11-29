import {
    GET_USER,
    UsersActions,
    UsersState
} from './types';

const initialState: UsersState = {};

export default function usersReducer(
    state = initialState,
    action: UsersActions
): UsersState {
    switch (action.type) {
        case GET_USER:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}