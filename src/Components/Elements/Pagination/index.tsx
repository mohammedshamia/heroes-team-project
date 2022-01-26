import Button from "../Buttons";
import { Wrapper } from "./style";
import { useTheme } from "styled-components";
import { useEffect } from "react";

interface IProps {
  pages: number;
  currentPage: number;
  setPage: Function;
}

const Pagination = ({ pages, currentPage = 1, setPage }: IProps) => {
  const handleClick = (page: number) => {
    setPage(page);
  };
  const theme = useTheme();

  const handlePrevPage = () => {
    setPage((prevState: number) => prevState - 1);
  };

  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
  };

  let Pages = new Array(pages);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  for (let i = 0; i < Pages.length; i++) {
    Pages[i] = (
      <Button
        onClick={() => handleClick(i + 1)}
        padding={"4px 7px"}
        backgroundColor={currentPage === i + 1 ? "#FCDD06" : "transparent"}
        borderRaduies={"3px"}
        margin={"3px"}
        color={currentPage === i + 1 ? "#000" : theme.textColors.primary}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <Wrapper>
      <Button
        padding={"4px 7px"}
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        borderRaduies={"3px"}
        margin={"3px"}
        color={theme.textColors.primary}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
      >
        {"<"}
      </Button>
      {Pages}
      <Button
        padding={"4px 7px"}
        disabled={currentPage === pages}
        onClick={handleNextPage}
        borderRaduies={"3px"}
        margin={"3px"}
        color={theme.textColors.primary}
        borderHover={`1px solid ${theme.colors.primary}`}
        border={`1px solid  ${theme.colors.primary}`}
      >
        {">"}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
