import React from "react";
import AdminTable from "../../../Components/AdminTable";
import Container from "../../../Components/Container";

const OrdersAdminPage = () => {
  return (
    <Container>
      <AdminTable
        data={[]}
        headOne={"Order ID"}
        headTwo={"Order NAME"}
        headThree={"Order Date"}
        headFour={"Order Type"}
        headFive={"ACTION"}
        tableName={"Orders"}
        handleDeleteRow={() => {}}
        handleEditRow={() => {}}
        handleCreateRow={() => {}}
        loading={false}
      />
    </Container>
  );
};

export default OrdersAdminPage;
