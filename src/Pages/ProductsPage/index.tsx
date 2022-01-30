import Container from "../../Components/Container";
import Divider from "../../Components/Elements/Devider";
import Typography from "../../Components/Typography";
import CardProduct from "./Components/cardProduct";

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <Typography gutterBottom variant="h2">
          All Products
        </Typography>
        <Divider />
        <CardProduct />
      </Container>
    </div>
  );
};

export default ProductsPage;
