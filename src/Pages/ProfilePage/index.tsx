import Container from "../../Components/Container";

import { Profile } from "./profile.style";
import LeftSection from "./leftSection";
import RightSetion from "./rightSetion";
import { IUserSliceState } from "../../Store/Types";
import SppinerLoading from "../../Components/Elements/SppinerLoading";
interface IProps {
  user: IUserSliceState;
}
const ProfilePage = ({ user }: IProps) => {
  console.log(user);
  return (
    <Container>
      {user.loading ? (
        <SppinerLoading />
      ) : (
        <>
          {user.data && (
            <Profile>
              <LeftSection UserProileData={user.data} />
              <RightSetion UserProileData={user.data} />
            </Profile>
          )}
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
