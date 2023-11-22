import { useCallback } from "react";
import { IPostsPaginationProps } from "../interfaces/pagination.interfaces";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PostsPagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }: IPostsPaginationProps) => {
  const pageNumbers: number = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = useCallback((page: number) => {
    if (page < 1 || page > pageNumbers) return;
    setCurrentPage(page);
  }, [pageNumbers, setCurrentPage]);

  return (
    <div className="flex items-center gap-4 self-end">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowBackIcon />
      </button>
      <span className="text-gray-700 font-semibold">
        Page {currentPage} of {pageNumbers}
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageNumbers}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default PostsPagination;
