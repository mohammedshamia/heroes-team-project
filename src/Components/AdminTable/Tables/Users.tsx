import { FC } from "react";
import { IUser } from "../../../Store/Types";
import Button from "../../Elements/Buttons";
import DeleteIcon from "../../Icons/DeleteIcon";
import EditIcon from "../../Icons/EditIcon";

interface IProps {
  data?: IUser[];
  handleDeleteRow: Function;
  handleEditRow: Function;
  create?: string;
}

const Users: FC<IProps> = ({ data, handleDeleteRow, handleEditRow }) => {
  return (
    <>
      {data?.map((row) => (
        <tbody key={row.firstName + row._id}>
          <tr>
            <th>{row._id}</th>
            <th>{row.firstName + " " + row.lastName}</th>
            <th>{row.isAdmin ? "admin" : "Customer"}</th>
            <th>{row.email}</th>
            <th>
              <Button
                padding="3px"
                bold
                height=""
                width=""
                backgroundColor="#FFFFFF"
                margin="0 10px 0 0"
                onClick={() => handleEditRow(row._id)}
              >
                <EditIcon />
              </Button>
              <Button
                padding="3px"
                bold
                height=""
                width=""
                backgroundColor="#FC4059"
                onClick={() =>
                  handleDeleteRow(row._id, row.firstName, row.lastName)
                }
              >
                <DeleteIcon />
              </Button>
            </th>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default Users;
