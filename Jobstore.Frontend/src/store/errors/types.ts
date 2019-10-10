export const GET_ERRORS = 'GET_ERRORS'


export interface ErrorState {
    message: string | null;
}

export interface ErrorAction {
    type: typeof GET_ERRORS,
    payload: string
}

