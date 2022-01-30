import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainCard from "../../../Components/Elements/Card/MainCard";
import Pagination from "../../../Components/Elements/Pagination";
import SppinerLoading from "../../../Components/Elements/SppinerLoading";
import { useAppDispatch, RootState } from "../../../Store/configureStore";
import { getAllProductsByPaginate } from "../../../Store/Slices/products";
import { CardOneProduct, FlexCenter, FlexProduct } from "../style";

const CardProduct = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  let { loading, productsByPaginate } = useSelector(
    (state: RootState) => state.entities.products
  );
  useEffect(() => {
    const data = {
      pageNumber: page,
    };
    dispatch(getAllProductsByPaginate(data));
    setPage(page);
  }, [dispatch, page]);

  return (
    <>
      {loading ? (
        <SppinerLoading />
      ) : (
        <>
          <FlexProduct>
            {productsByPaginate.products.map((elemnt, index) => (
              <CardOneProduct key={elemnt._id}>
                <MainCard data={elemnt} key={index} />
              </CardOneProduct>
            ))}
          </FlexProduct>
          <FlexCenter>
            <Pagination
              pages={productsByPaginate.pages}
              currentPage={productsByPaginate.page}
              setPage={setPage}
            />
          </FlexCenter>
        </>
      )}
    </>
  );
};

export default CardProduct;
