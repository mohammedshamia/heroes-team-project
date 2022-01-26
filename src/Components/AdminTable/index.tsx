import { FC } from "react";
import Button from "../Elements/Buttons";
import Typography from "../Typography";
import { StyledTable, UpperArea } from "./style";
import Products from "./Tables/Products";
import Users from "./Tables/Users";

interface IProps {
  data: any[];
  headOne: string;
  headTwo: string;
  headThree: string;
  headFour: string;
  headFive: string;
  tableName: string;
  handleDeleteRow: Function;
  handleEditRow: Function;
  handleCreateRow: Function;
  create?: string;
  loading: boolean;
}

const AdminTable: FC<IProps> = ({
  data,
  headOne,
  headTwo,
  headThree,
  headFour,
  headFive,
  tableName,
  handleDeleteRow,
  handleEditRow,
  handleCreateRow,
  create,
  loading,
}) => {
  return (
    <>
      <UpperArea>
        <Typography variant="h2">{tableName}</Typography>
        {create ? (
          <Button
            margin="28px 0 0 0"
            padding="15px 30px"
            bold
            height=""
            width=""
            backgroundColor="#FCDD06"
            onClick={() => handleCreateRow()}
          >
            Create {tableName}
          </Button>
        ) : (
          ""
        )}
      </UpperArea>
      <StyledTable>
        <table>
          <thead>
            <tr>
              <th>{headOne}</th>
              <th>{headTwo}</th>
              <th>{headThree}</th>
              <th>{headFour}</th>
              <th>{headFive}</th>
            </tr>
          </thead>
          {loading ? (
            <></>
          ) : (
            <>
              <>
                {tableName === "Products" && (
                  <Products
                    data={data}
                    handleDeleteRow={handleDeleteRow}
                    handleEditRow={handleEditRow}
                  />
                )}
              </>
              <>
                {tableName === "Users" && (
                  <Users
                    data={data}
                    handleDeleteRow={handleDeleteRow}
                    handleEditRow={handleEditRow}
                  />
                )}
              </>
            </>
          )}
        </table>
      </StyledTable>
    </>
  );
};

export default AdminTable;
