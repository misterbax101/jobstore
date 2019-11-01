export default interface Alert{
    type: AlertTypes,
    message: string
}

export enum AlertTypes {
    Success,
    Error,
    Info
}