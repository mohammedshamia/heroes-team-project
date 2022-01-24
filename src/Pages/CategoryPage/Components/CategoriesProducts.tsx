import { useEffect } from "react";
import { useSelector } from "react-redux";
import Alert from "../../../Components/Elements/Alert/index";
import MainCard from "../../../Components/Elements/Card/MainCard";
import SppinerLoading from "../../../Components/Elements/SppinerLoading";
import Typography from "../../../Components/Typography";
import { RootState } from "../../../Store/configureStore";

import { useAppDispatch } from "../../../Store/configureStore";
import { getProductsByCatergories } from "../../../Store/Slices/products";
import { CardLayout } from "../style";

const CategoriesProducts = ({ name }: { name: string }) => {
  const dispatch = useAppDispatch();

  let { products } = useSelector(
    (state: RootState) => state.entities.products.productsByPaginate
  );
  useEffect(() => {
    dispatch(getProductsByCatergories({ category: name }));
  }, [dispatch, name]);

  return (
    <>
      {products ? (
        products.length > 0 ? (
          <>
            <CardLayout>
              {products.map((item) => {
                console.log(item.name, "---");
                return <MainCard data={item} key={item._id} />;
              })}
            </CardLayout>
          </>
        ) : (
          <Alert
            type="error"
            style={{
              marginTop: "40px",
            }}
          >
            <Typography>No products yet!</Typography>
          </Alert>
        )
      ) : (
        <SppinerLoading />
      )}
    </>
  );

  // <ContainerLyout>
  //   {/* <MainCard key={}>

  //   </MainCard> */}
  // </ContainerLyout>;
};

export default CategoriesProducts;
