import { AppState } from '../'

export const selectUserById = (state: AppState, id: string) => state.users[id];

export const selectCurrentUser = (state: AppState) => state.auth.userId ? selectUserById(state, state.auth.userId) : null;