import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
import { CardSlider } from "../../../Components/Slider/CardSlider";
import Typography from "../../../Components/Typography";
import { CardsSection, Featured } from "../product.style";

const CardSliders = () => {
  return (
    <CardsSection>
      <Container>
        <Featured>
          <Typography variant="h5" fontWeight={700}>
            Featured Products
          </Typography>
        </Featured>
        <DividerComponent />
        <CardSlider />
      </Container>
    </CardsSection>
  );
};

export default CardSliders;
