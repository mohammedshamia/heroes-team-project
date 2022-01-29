import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { deliverOrder, getOrders } from "../../../Store/Slices/orders";
import { getAllProductsByPaginate } from "../../../Store/Slices/products";
import { FlexCenter } from "../../ProductsPage/style";

const OrdersAdminPage = () => {
  const [first, setfirst] = useState(false);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>("");
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { loading, OrdersByPaginate } = useSelector(
    (state: RootState) => state.entities.order
  );

  useEffect(() => {
    dispatch(getOrders(page));
    setPage(page);
  }, [dispatch, page]);

  const handleEditProduct = (id: string) => {
    setModalDisplay(true);
    setOrderId(id);
  };

  const closeClickHandler = () => {
    dispatch(deliverOrder(orderId));

    setModalDisplay(false);
  };

  return (
    <div>
      <Container>
        <AdminTable
          data={OrdersByPaginate.orders}
          headOne={"Order ID"}
          headTwo={"Order Auther"}
          headThree={"Order Date"}
          headFour={"Order Adress"}
          headFive={"Is Delivered"}
          tableName={"Orders"}
          handleDeleteRow={() => {}}
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
          pages={OrdersByPaginate.pages}
          currentPage={OrdersByPaginate.page}
          setPage={setPage}
        />
      </FlexCenter>

      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>
            Make <ModalProductName>{orderId}</ModalProductName> Delivered?
          </ModalTitle>
          <ModalAction>
            <Button
              style={{ fontWeight: "bold" }}
              onClick={() => closeClickHandler()}
              backgroundColor={theme.colors.error}
            >
              Ok!
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
    </div>
  );
};

export default OrdersAdminPage;
