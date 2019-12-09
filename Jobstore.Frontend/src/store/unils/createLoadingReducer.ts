import { Action } from 'redux'

export const createLoadingReducer = <Types extends string>(request: Types, success: Types, failed: Types) =>
    (state: boolean = false, action: Action<Types>): boolean => {
        switch (action.type) {
            case request:
                return true;
            case success:
            case failed:
                return false;
            default:
                return state;
        }
    }
