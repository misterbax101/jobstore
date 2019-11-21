

export const truncateWithEllipses = (text: string, max: number = 100) => {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
}


export const calculateSkip = (page: number, pageSize: number) => {
    return page == 0 ? 0 : (page - 1) * pageSize;
}


export const  getPagesCount =(totalCount: number, pageSize: number) =>  Math.ceil(totalCount / pageSize);