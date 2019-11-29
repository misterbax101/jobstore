

export interface Action<ActionType, PayloadType> {
    type: ActionType,
    payload: PayloadType
}

export function ActionCreator<ActionType, PayloadType>(type: ActionType, payload: PayloadType)
    : Action<ActionType, PayloadType> {
    return {
        type: type,
        payload: payload
    }
}

export interface RequestState {
    error: string | null,
    loading: boolean
}
