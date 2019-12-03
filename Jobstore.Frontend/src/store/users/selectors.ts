import { AppState } from '../'

export const selectUserById = (state: AppState, id: string) => state.users.users[id];

export const selectCurrentUser = (state: AppState) => state.auth.userId ? selectUserById(state, state.auth.userId) : null;

export const isSignLoading = (state: AppState) => state.users.signUp.loading;

export const getSignUpErrorMessage = (state: AppState) => state.users.signUp.error;

export const getSignUpSuccessMessage = (state: AppState) => state.users.signUp.success;