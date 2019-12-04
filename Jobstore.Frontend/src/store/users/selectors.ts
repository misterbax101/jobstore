import { AppState } from '../'

export const selectUserById = (state: AppState, id: string) => state.users.users[id];

export const selectCurrentUser = (state: AppState) => state.auth.userId ? selectUserById(state, state.auth.userId) : null;

export const getSignUpStatus = (state: AppState) => state.users.signUp;

export const getUpdateProfileStatus = (state: AppState) => state.users.updateProfile;