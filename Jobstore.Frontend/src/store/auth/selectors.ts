import { AppState } from './../';

export const selectCurrentUser = ({ auth, users }: AppState) => {
    if (auth.isAuthenticated && auth.userId) {
        return users[auth.userId];
    }
    return null;
}