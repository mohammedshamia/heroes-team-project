import { IpropsAvater } from "./interface";
import { ProfileUserImage } from "./profile.style";

const Avater = (props: IpropsAvater) => {
  return <ProfileUserImage {...props} />;
};

export default Avater;
