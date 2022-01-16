import React from "react";
import AdminTable from "../../../Components/AdminTable";
import Container from "../../../Components/Container";

const ProductsAdminPage = () => {
  return (
    <div>
      <Container>
        <AdminTable
          data={[
            { id: "1", name: "new", price: "$100", category: "new" },
            { id: "2", name: "new", price: "$100", category: "new" },
            { id: "3", name: "new", price: "$100", category: "new" },
            { id: "4", name: "new", price: "$100", category: "new" },
          ]}
          headOne={"PRODUCT ID"}
          headTwo={"PRODUCT NAME"}
          headThree={"PRODUCT PRICE"}
          headFour={"CATEGORY"}
          headFive={"ACTION"}
          tableName={"Products"}
          handleDeleteRow={() => {}}
          handleEditRow={() => {}}
          handleCreateRow={() => {}}
        />
      </Container>
    </div>
  );
};

export default ProductsAdminPage;
