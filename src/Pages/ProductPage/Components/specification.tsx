import React from "react";
import Typography from "../../../Components/Typography";
import { IProductData } from "../interface";
import {
  StyledTable,
  Technical,
  TechnicalDetails,
  Title,
} from "../product.style";

const productData: IProductData[] = [
  {
    body: [
      { title: "brand", name: "apple" },
      { title: "voluptate", name: "omet" },
      { title: "brand", name: "ut" },
      { title: "voluptate", name: "omet" },
      { title: "brand", name: "apple" },
      { title: "voluptate", name: "omet" },
      { title: "brand", name: "apple" },
      { title: "voluptate", name: "omet" },
      { title: "brand", name: "apple" },
      { title: "voluptate", name: "omet" },
    ],
  },
];
const Specification = () => {
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
              {productData[0].body.map((row: any, index: number) => (
                <tbody key={row.name + index}>
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.name}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </StyledTable>
          <StyledTable>
            <table>
              {productData[0].body.map((row: any, index: number) => (
                <tbody key={row.name + index}>
                  <tr>
                    <td>{row.title}</td>
                    <td>{row.name}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </StyledTable>
        </TechnicalDetails>
      </Technical>
    </>
  );
};

export default Specification;
