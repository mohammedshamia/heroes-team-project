import { Button, Wrapper } from "./style";

interface IProps {
  pages: number;
  currentPage: number;
  setPage: Function;
}

const Pagination = ({ pages, currentPage = 1, setPage }: IProps) => {
  const handleClick = (page: number) => {
    setPage(page);
  };

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
  };

  let Pages = new Array(pages);
  for (let i = 0; i < Pages.length; i++) {
    Pages[i] = (
      <Button
        current={currentPage === i + 1}
        onClick={() => handleClick(i + 1)}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <Wrapper>
      <Button disabled={currentPage === 1} onClick={handlePrevPage}>
        {"<"}
      </Button>
      {Pages}
      <Button disabled={currentPage === pages} onClick={handleNextPage}>
        {">"}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
