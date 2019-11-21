

export interface PaginationState<KeyT> {
    [key: number]: {
        ids: Array<KeyT>,
        loading: boolean
    }
}

/*
export interface PaginationState<KeyT> {
   // pages: {
        [key: number]: {
            ids: Array<KeyT>,
            loading: boolean
        }
    //},
    // currentPage: number,
    // totalCount: number
}*/