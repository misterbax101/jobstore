import Alert from '../../models/Alert';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CLEAR = 'CLEAR';

interface SuccessAlertAction {
    type: typeof SUCCESS
    payload: string
}

interface ErrorAlertAction {
    type: typeof ERROR
    payload: string
}

interface ClearAlertAction {
    type: typeof CLEAR;
}

export type AlerActionTypes = SuccessAlertAction | ErrorAlertAction | ClearAlertAction;

export interface AlertState  {
    alert: Alert | null
}