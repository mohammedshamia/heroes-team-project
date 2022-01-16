import React from "react";
import AdminTable from "../../../Components/AdminTable";
import Container from "../../../Components/Container";

const OrdersAdminPage = () => {
  return (
    <Container>
      <AdminTable
        data={[
          { id: "1", name: "new", date: "10-10-2021", type: "new" },
          { id: "2", name: "new", date: "15-11-2021", type: "new" },
          { id: "3", name: "new", date: "12-1-2022", type: "new" },
          { id: "4", name: "new", date: "25-1-2022", type: "new" },
        ]}
        headOne={"Order ID"}
        headTwo={"Order NAME"}
        headThree={"Order Date"}
        headFour={"Order Type"}
        headFive={"ACTION"}
        tableName={"Orders"}
        handleDeleteRow={() => {}}
        handleEditRow={() => {}}
        handleCreateRow={() => {}}
      />
    </Container>
  );
};

export default OrdersAdminPage;
