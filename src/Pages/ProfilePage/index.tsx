import Container from "../../Components/Container";

import { Profile } from "./profile.style";
import LeftSection from "./leftSection";
import RightSetion from "./rightSetion";
import SppinerLoading from "../../Components/Elements/SppinerLoading";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";
const ProfilePage = () => {
  let user = useSelector((state: RootState) => state.entities.user);


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
