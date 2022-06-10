import React from "react";
import ReactPaginate from "react-paginate";

export const ThePaginations = ({ getCurrentPage, pageCount }) => {
  const handlePageClick = (data) => {
    getCurrentPage(data.selected + 1);
    console.log(data.selected + 1);
  };

  //   const pageCount = 500;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={"7"}
      pageRangeDisplayed={7}
      pageCount={pageCount}
      previousLabel="Previous"
      containerClassName={"pagination justify-content-center p-4  "}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};
