import { FC } from "react";
import Button from "../Elements/Buttons";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import Typography from "../Typography";
import { StyledTable, UpperArea } from "./style";

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
}) => {
  return (
    <StyledTable>
      <UpperArea>
        <Typography variant="h2">{tableName}</Typography>
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
      </UpperArea>
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
        {data.map((row) => (
          <tbody key={row.id}>
            <tr>
              <th>{row.id}</th>
              <th>{row.name}</th>
              <th>{row.price}</th>
              <th>{row.category}</th>
              <th>
                <Button
                  padding="3px"
                  bold
                  height=""
                  width=""
                  backgroundColor="#FFFFFF"
                  margin="0 10px 0 0"
                  onClick={handleEditRow(row.id)}
                >
                  <EditIcon />
                </Button>
                <Button
                  padding="3px"
                  bold
                  height=""
                  width=""
                  backgroundColor="#FC4059"
                  onClick={handleDeleteRow(row.id)}
                >
                  <DeleteIcon />
                </Button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </StyledTable>
  );
};

export default AdminTable;
