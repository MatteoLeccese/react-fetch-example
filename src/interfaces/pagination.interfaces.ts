export interface IPostsPaginationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
