import { AppState } from './../';

export const selectCurrentUser = ({ auth, users }: AppState) => {
    if (auth.isAuthenticated && auth.userId) {
        return users[auth.userId];
    }
    return null;
}

export const selectUserName = (state: AppState) => {
    const user = selectCurrentUser(state);
    return user ? user.firstName : null;
}

export const isAuthenticated = ({ auth }: AppState) => {
    return auth.isAuthenticated;
}