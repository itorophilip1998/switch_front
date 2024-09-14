import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxPages = 7;

        if (totalPages <= maxPages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 4) pages.push('...');

            const start = Math.max(2, currentPage - 2);
            const end = Math.min(totalPages - 1, currentPage + 4);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 3) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="pagination col-md-10 ">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn"
            >
                <FaAngleLeft />

            </button>
            {generatePageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        disabled={page === currentPage}
                        className="btn"

                    >
                        {page}
                    </button>
                ) : (
                    <span key={index}>......</span>
                )
            )}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn" 
            >
                <FaAngleRight />

            </button>
        </div>
    );
};

export default Pagination;
