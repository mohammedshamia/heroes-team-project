import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import { CardSlider } from "../../../Components/CardSlider";
import Typography from "../../../Components/Typography";
import { CardsSection, Featured } from "../style";

const CardSliders = () => {
  return (
    <CardsSection>
      <Container>
        <Featured>
          <Typography
            variant="h5"
            fontWeight={700}
            style={{ textTransform: "uppercase" }}
          >
            Featured Products
          </Typography>
        </Featured>
        <DividerComponent center />
        <CardSlider />
      </Container>
    </CardsSection>
  );
};

export default CardSliders;
