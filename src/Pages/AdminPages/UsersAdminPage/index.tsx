import AdminTable from "../../../Components/AdminTable";
import Container from "../../../Components/Container";

const UsersAdminPage = () => {
  return (
    <Container>
      <AdminTable
        data={[
          { id: "1", name: "new", rule: "customer", type: "new" },
          { id: "2", name: "new", rule: "customer", type: "new" },
          { id: "3", name: "new", rule: "admin", type: "new" },
          { id: "4", name: "new", rule: "buyer", type: "new" },
        ]}
        headOne={"User ID"}
        headTwo={"User NAME"}
        headThree={"User rule"}
        headFour={"User Type"}
        headFive={"ACTION"}
        tableName={"Users"}
        handleDeleteRow={() => {}}
        handleEditRow={() => {}}
        handleCreateRow={() => {}}
      />
    </Container>
  );
};

export default UsersAdminPage;
