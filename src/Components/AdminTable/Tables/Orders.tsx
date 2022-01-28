import { FC } from "react";
import Button from "../../Elements/Buttons";
import EditIcon from "../../Icons/EditIcon";
import Typography from "../../Typography";

interface IOrder {
  shippingAddress?: {
    address?: string;
    city?: string;
    postalCode?: number;
    country?: string;
  };
  taxPrice?: number;
  shippingPrice?: number;
  totalPrice?: number;
  isPaid?: boolean;
  isDelivered?: boolean;
  _id?: string;
  user?: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  orderItems?: [
    {
      _id?: string;
      product?: string;
      qty?: number;
      itemTotalPrice?: number;
    }
  ];
  paymentMethod?: string;
  createdAt?: string;
  updatedAt?: string;
  clientSecret?: string;
}

interface IProps {
  data: IOrder[];
  handleEditRow: Function;
}

const Orders: FC<IProps> = ({ data, handleEditRow }) => {
  return (
    <>
      {data.map((row) => (
        <tbody key={row._id}>
          <tr>
            <th>{row._id}</th>
            <th>{`${row.user?.firstName} ${row.user?.lastName}`}</th>
            <th>{row.createdAt?.slice(0, 10)}</th>
            <th>
              {row?.shippingAddress?.address} | {row?.shippingAddress?.city} |{" "}
              {row?.shippingAddress?.country} |{" "}
              {row?.shippingAddress?.postalCode}
            </th>
            <th>
              {row.isDelivered ? (
                <Typography variant="h3" color="#008000!important">
                  ✔
                </Typography>
              ) : (
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
              )}
            </th>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default Orders;
