import Alert from "../../../Components/Elements/Alert/index";
import MainCard from "../../../Components/Elements/Card/MainCard";
import SppinerLoading from "../../../Components/Elements/SppinerLoading";
import Typography from "../../../Components/Typography";
import { IProduct } from "../../../Store/Types";

import { CardLayout } from "../style";

const CategoriesProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      {products ? (
        products.length > 0 ? (
          <>
            <CardLayout>
              {products.map((item) => {
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
