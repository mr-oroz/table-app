import React from 'react';

const PaginationTable = ({tablePage, totalPage, paginate}) => {
    const pageNumbers = [];
    // пагинация с помощю цикл
    for(let i = 1; i <= Math.ceil(totalPage / tablePage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)}
                           href="!#"
                           className='page-link'>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationTable;