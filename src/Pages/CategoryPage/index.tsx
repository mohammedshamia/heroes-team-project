import { useParams } from "react-router";
import Container from "../../Components/Container";
import Typography from "../../Components/Typography";

const CategoryPage = () => {
  const { name } = useParams();
  return (
    <div>
      <Container>
        <Typography variant="h2">{name}</Typography>
      </Container>
    </div>
  );
};

export default CategoryPage;
