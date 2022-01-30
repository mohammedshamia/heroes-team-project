import { CardSlider } from "../../../Components/CardSlider";
import Container from "../../../Components/Container";
import { DividerComponent } from "../../../Components/Elements/Devider/styles.styled";
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
        <DividerComponent center />
        <CardSlider />
      </Container>
    </CardsSection>
  );
};

export default CardSliders;
