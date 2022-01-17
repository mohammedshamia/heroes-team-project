import { Logo, Main, Sup } from "./styles";

interface IProps {
  main: string;
  sub: string;
}
// Logo takes two props title and
const Index = ({ main, sub }: IProps) => {
  return (
    <Logo>
      <Main>{main}</Main>
      <Sup>{sub}</Sup>
    </Logo>
  );
};

export default Index;
