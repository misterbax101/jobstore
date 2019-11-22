import React, { useState } from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface PaginatorProps {
    currentPage?: number,
    pagesCount: number,
    firstPage?: number,
    onPageChange: (newPage: number) => void;
    className?: string
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage = 1, pagesCount, onPageChange, className }) => {

    const [selectedPage, setSelectedPage] = useState(currentPage);

    const goToPage = (page: number) => {
        setSelectedPage(page);
        onPageChange(page);
    }

    const goToPreviousPage = () => {
        if (selectedPage !== 1) {
            goToPage(selectedPage - 1);
        }
    }

    const goToNextPage = () => {
        if (selectedPage !== pagesCount) {
            goToPage(selectedPage + 1);
        }
    }

    const isPageSelected = (page: number) => page === selectedPage;

    const renderPageItem = () => {
        const resut = [];
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
            {renderPageItem()}
            <PaginationItem
                onClick={goToNextPage}
                disabled={isPageSelected(pagesCount)}>
                <PaginationLink next />
            </PaginationItem>
        </Pagination>));
}

export default Paginator;
