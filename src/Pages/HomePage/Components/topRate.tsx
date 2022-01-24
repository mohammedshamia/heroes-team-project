import CardLayout from "../../../Components/CardLayuout";
import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import Typography from "../../../Components/Typography";
import { Categ } from "../style";

const TopRate = () => {
  return (
    <Container>
      <Categ>
        <Typography variant="h5" fontWeight={700} style={{ marginTop: "50px" }}>
          TOP RATE PRODUCTS{" "}
        </Typography>
      </Categ>
      <DividerComponent />
      <CardLayout />
    </Container>
  );
};

export default TopRate;
