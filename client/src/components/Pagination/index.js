import React from 'react'
import "./style.css";

const Pagination = ({ coastersPerPage, totalCoasters, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCoasters / coastersPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    
    <div className="d-flex justify-content-center"><nav  >
     <br></br> <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

      </ul>
    </nav></div>
  )   
}

export default Pagination
