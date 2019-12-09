export interface PaginationState<KeyT> {
    [key: number]: {
        ids: Array<KeyT>,
        loading: boolean
    }
}