import { PayloadAction } from './../types'

export const createSuccessReducer = <Types extends string>(request: Types, success: Types, failed: Types, reset?: Types) =>
    (state: string | null = null, action: PayloadAction<Types, string>): string | null => {
        switch (action.type) {
            case success:
                return action.payload;
            case reset:
            case failed:
            case request:
                return null;
            default:
                return state;
        }
    }
