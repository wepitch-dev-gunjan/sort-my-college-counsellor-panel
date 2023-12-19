import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = ({
  totalRecords,
  pageLimit,
  pageNeighbours,
  onPageChanged
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChanged({
      currentPage,
      totalPages: totalPages(),
      pageLimit,
      totalRecords
    });
  }, [currentPage, totalRecords, pageLimit, onPageChanged]);

  const totalPages = () => Math.ceil(totalRecords / pageLimit);

  const fetchPageNumbers = () => {
    const totalPagesCount = totalPages();
    const currentPageNeighbours = Math.min(pageNeighbours, 2);

    const totalNumbers = currentPageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPagesCount > totalBlocks) {
      const startPage = Math.max(2, currentPage - currentPageNeighbours);
      const endPage = Math.min(totalPagesCount - 1, currentPage + currentPageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPagesCount - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPagesCount];
    }

    return range(1, totalPagesCount);
  };

  const handleClick = (page) => (e) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const handleMoveLeft = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + pageNeighbours * 2 + 1);
  };

  const renderPagination = () => {
    const pages = fetchPageNumbers();

    return (
      <ul className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE) {
            return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}>
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            );
          }

          if (page === RIGHT_PAGE) {
            return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={handleMoveRight}>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            );
          }

          return (
            <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
              <a className="page-link" href="#" onClick={handleClick(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav aria-label="Pagination">
      {totalRecords > 0 && renderPagination()}
    </nav>
  );
};

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  pageNeighbours: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};

export default Pagination;
