

export const truncateWithEllipses = (text: string, max: number = 100) => {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
}