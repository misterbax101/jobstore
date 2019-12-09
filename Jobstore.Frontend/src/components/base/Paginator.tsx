import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { getPagesCount } from './../../untils/helper';


interface PaginatorProps {
    currentPage?: number,
    itemsCount: number,
    pageSize?: number,
    className?: string
    onPageChange: (newPage: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage = 1, pageSize = 5, itemsCount, onPageChange, className }) => {

    const [selectedPage, setSelectedPage] = useState<number>(currentPage);

    const pagesCount = getPagesCount(itemsCount, pageSize);

    const goToPage = (page: number): void => {
        setSelectedPage(page);
        onPageChange(page);
    }

    const goToPreviousPage = (): void => {
        if (selectedPage !== 1) {
            goToPage(selectedPage - 1);
        }
    }

    const goToNextPage = (): void => {
        if (selectedPage !== pagesCount) {
            goToPage(selectedPage + 1);
        }
    }

    const isPageSelected = (page: number): boolean => page === selectedPage;

    const renderPageItems = (): JSX.Element[] => {
        const resut: JSX.Element[] = [];
        for (let page = 1; page <= pagesCount; ++page) {
            resut.push(
                <PaginationItem
                    key={page}
                    active={isPageSelected(page)}
                    onClick={() => goToPage(page)}>
                    <PaginationLink>
                        {page}
                    </PaginationLink>
                </PaginationItem>);
        }
        return resut;
    }
    return ((pagesCount <= 1) ? null :
        (<Pagination listClassName={className}>
            <PaginationItem
                disabled={isPageSelected(1)}
                onClick={goToPreviousPage}>
                <PaginationLink previous />
            </PaginationItem>
            {renderPageItems()}
            <PaginationItem
                onClick={goToNextPage}
                disabled={isPageSelected(pagesCount)}>
                <PaginationLink next />
            </PaginationItem>
        </Pagination>));
}

export default Paginator;
