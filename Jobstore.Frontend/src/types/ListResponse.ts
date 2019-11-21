export  interface PaginatioData<T> {
    data: Array<T>,
    totalCount: number,
    page: number
}
