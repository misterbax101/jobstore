import { PayloadAction } from './../types'

export const createErrorReducer = <Types extends string>(request: Types, success: Types, failed: Types) =>
    (state: string | null = null, action: PayloadAction<Types,string>): string | null => {
        switch (action.type) {
            case request:
            case success:
                    return null;
            case failed:
                return action.payload;
            default:
                return state;
        }
    }
