import React from "react";
import Typography from "../../../Components/Typography";
import { IProductData } from "../interface";
import {
  ProductDetail,
  StyledTable,
  Tbody,
  Technical,
  TechnicalDetails,
  Thead,
  Title,
} from "../product.style";
interface IProps {
  ProductData: IProductData[];
}
const Specification = ({ ProductData }: IProps) => {
  return (
    <>
      <Title>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Specification
        </Typography>
      </Title>
      <Technical>
        <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
          Technical Details
        </Typography>
        <TechnicalDetails>
          <StyledTable>
            <table>
              <>
                <th>
                  <tr></tr>
                </th>
                {ProductData[0].body.map((row: any, index: number) => (
                  <tbody key={index}>
                    <tr>
                      <th>{row.title}</th>
                      <th>{row.name}</th>
                    </tr>
                  </tbody>
                ))}
              </>
            </table>
          </StyledTable>
          <StyledTable>
            <table>
              <>
                <th>
                  <tr></tr>
                </th>
                {ProductData[0].body.map((row: any, index: number) => (
                  <tbody key={index}>
                    <tr>
                      <th>{row.title}</th>
                      <th>{row.name}</th>
                    </tr>
                  </tbody>
                ))}
              </>
            </table>
          </StyledTable>
        </TechnicalDetails>
      </Technical>
    </>
  );
};

export default Specification;
