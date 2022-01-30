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
import {
  deleteProdcut,
  getAllProductsByPaginate,
} from "../../../Store/Slices/products";
import { FlexCenter } from "../../ProductsPage/style";

const ProductsAdminPage = () => {
  const [first, setfirst] = useState(false);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);
  const [proName, setProName] = useState<string>("this product");
  const [proId, setProId] = useState<string>("");
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, productsByPaginate } = useSelector(
    (state: RootState) => state.entities.products
  );

  useEffect(() => {
    const data = {
      pageNumber: page,
    };
    dispatch(getAllProductsByPaginate(data));
    setPage(page);
  }, [dispatch, page]);

  const handleEditProduct = (id: string) => {
    navigate(`/admin/product/edit/${id}`);
  };
  const handleCreateRow = () => {
    navigate(`/admin/product/create`);
  };

  const openModalHandler = (id: string, productName: string) => {
    setProName(productName);
    setProId(id);
    setModalDisplay(true);
  };
  const closeClickHandler = () => {
    dispatch(deleteProdcut(proId));
    setModalDisplay(false);
    setfirst(true);
  };

  return (
    <div>
      <Container>
        <AdminTable
          data={productsByPaginate.products}
          headOne={"PRODUCT ID"}
          headTwo={"PRODUCT NAME"}
          headThree={"PRODUCT PRICE"}
          headFour={"CATEGORY"}
          headFive={"ACTION"}
          tableName={"Products"}
          create={"Product"}
          handleDeleteRow={openModalHandler}
          handleEditRow={handleEditProduct}
          handleCreateRow={handleCreateRow}
          loading={loading}
        />
      </Container>
      <AlertMessage
        open={first}
        setOpen={setfirst}
        position="snackBar"
        children={`You have deleted ${proName} Succesfully`}
        type="error"
      />
      <FlexCenter>
        <Pagination
          pages={productsByPaginate.pages}
          currentPage={productsByPaginate.page}
          setPage={setPage}
        />
      </FlexCenter>

      {modalDisplay && (
        <Modal isOpen={modalDisplay} onClose={() => setModalDisplay(false)}>
          <ModalTitle>
            Remove <ModalProductName>{proName}</ModalProductName> from Products?
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
    </div>
  );
};

export default ProductsAdminPage;
