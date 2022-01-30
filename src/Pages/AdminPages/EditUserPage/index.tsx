import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../../Components/Container";
import FormikEditUser from "../../../Components/Forms/EditUserForm/formikEditUser";
import Typography from "../../../Components/Typography";
import { useAppDispatch, RootState } from "../../../Store/configureStore";
import { getUserDetail } from "../../../Store/Slices/user";

const EditeUserPage = () => {
  const dispatch = useAppDispatch();
  let { userDetails, error } = useSelector(
    (state: RootState) => state.entities.user
  );
  const { id: userId } = useParams();

  useEffect(() => {
    if (userId) dispatch(getUserDetail(userId));
  }, [dispatch, userId]);
  return (
    <Container>
      {userDetails ? (
        <FormikEditUser data={userDetails} userId={userId} />
      ) : (
        <Typography variant="h1">{error && "Not Found User"}</Typography>
      )}
    </Container>
  );
};

export default EditeUserPage;
