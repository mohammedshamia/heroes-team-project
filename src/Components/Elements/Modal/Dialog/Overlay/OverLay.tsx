import { Overlay } from "./styles";

interface Props {
  onClose: () => void;
}

const Index = ({ onClose }: Props) => {
  return <Overlay onClick={onClose} />;
};

export default Index;