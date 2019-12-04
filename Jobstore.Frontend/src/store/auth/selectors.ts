import { createSelector } from 'reselect';

import { AppState } from './../';

const users = (state: AppState) => state.users.users;


export const getUserId = (state: AppState) => state.auth.userId;

export const getCurrentUser = createSelector(
    [users, getUserId],
    (users, userId) => {
        if (userId) {
            return users[userId]
        }
        return undefined;
    }
)

export const isAuthenticated = (state: AppState) => state.auth.isAuthenticated;

export const getCurrentUserName = (state: AppState) => {
    const user = getCurrentUser(state);
    return user ? user.firstName : null;
}

export const selectCurrentId = ({ auth }: AppState) => {
    return auth.userId;
}