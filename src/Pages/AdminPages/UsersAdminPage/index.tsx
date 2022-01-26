import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import AdminTable from "../../../Components/AdminTable";
import Container from "../../../Components/Container";
import AlertMessage from "../../../Components/Elements/Alert";
import Button from "../../../Components/Elements/Buttons";
import { ModalProductName } from "../../../Components/Elements/Card/style";
import Modal from "../../../Components/Elements/Modal/Dialog/Modal";
import ModalAction from "../../../Components/Elements/Modal/Dialog/ModalAction/ModalAction";
import ModalTitle from "../../../Components/Elements/Modal/Dialog/ModalTitle/ModalTitle";
import Pagination from "../../../Components/Elements/Pagination";
import { RootState, useAppDispatch } from "../../../Store/configureStore";
import { deleteUser, getAllUsers } from "../../../Store/Slices/user";
import { FlexCenter } from "../../ProductsPage/style";

const UsersAdminPage = () => {
  const [first, setfirst] = useState(false);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("This User");
  const [userId, setUserId] = useState<string>("");
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { usersByPaginate, loading } = useSelector(
    (state: RootState) => state.entities.user
  );

  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [dispatch, page]);

  const handleEditProduct = (id: string) => {
    navigate(`/admin/user/edit/${id}`);
  };

  const openModalHandler = (
    id: string,
    firstName: string,
    lasttName: string
  ) => {
    setUserName(firstName + " " + lasttName);
    setUserId(id);
    setModalDisplay(true);
  };
  const closeClickHandler = () => {
    dispatch(deleteUser(userId));
    setModalDisplay(false);
  };

  return (
    <>
      <Container>
        <AdminTable
          data={usersByPaginate.users}
          headOne={"User ID"}
          headTwo={"User NAME"}
          headThree={"User Rule"}
          headFour={"Email"}
          headFive={"ACTION"}
          tableName={"Users"}
          handleDeleteRow={openModalHandler}
          handleEditRow={handleEditProduct}
          handleCreateRow={() => {}}
          loading={loading}
        />
      </Container>
      <AlertMessage
        open={first}
        setOpen={setfirst}
        position="snackBar"
        children={"message"}
        type="success"
      />
      <FlexCenter>
        <Pagination
          pages={usersByPaginate.pages}
          currentPage={usersByPaginate.page}
          setPage={setPage}
        />
      </FlexCenter>

      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>
            Remove <ModalProductName>{userName}</ModalProductName> from Users?
          </ModalTitle>
          <ModalAction>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => closeClickHandler()}
              backgroundColor={theme.colors.error}
            >
              Remove
            </Button>
            <Button
              style={{ fontWeight: "bold" }}
              backgroundColor={theme.colors.primary}
              onClick={() => {
                setModalDisplay(false);
              }}
            >
              Cancel
            </Button>
          </ModalAction>
        </Modal>
      )}
    </>
  );
};

export default UsersAdminPage;
