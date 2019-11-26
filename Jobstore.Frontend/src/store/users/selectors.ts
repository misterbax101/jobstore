import { AppState } from '../'

export const selectUserById = (state: AppState, id:string) => state.users[id];