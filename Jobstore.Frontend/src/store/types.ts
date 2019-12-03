import { Action } from 'redux';

export interface PayloadAction<ActionType, PayloadType> extends Action<ActionType>{
    payload: PayloadType,
}

export function ActionCreator<ActionType, PayloadType>(type: ActionType, payload: PayloadType)
    : PayloadAction<ActionType, PayloadType> {
    return {
        type: type,
        payload: payload
    }
}
