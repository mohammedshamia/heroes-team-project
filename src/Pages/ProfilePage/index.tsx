import Container from "../../Components/Container";

import { Profile } from "./profile.style";
import { UserData } from "./interface";
import LeftSection from "./leftSection";
import RightSetion from "./rightSetion";
const ProfilePage = () => {
  const UserProileData: UserData[] = [
    {
      image: "Assets/img3.PNG",
      firstName: "Amy",
      lastName: "Mayer",
      email: "amymay@gmail.com",
      brithday: "12/04/1991",
    },
  ];
  return (
    <Container>
      <Profile>
        <LeftSection UserProileData={UserProileData} />
        <RightSetion UserProileData={UserProileData} />
      </Profile>
    </Container>
  );
};

export default ProfilePage;
