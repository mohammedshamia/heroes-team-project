import styled from "styled-components";



const getAlertBg = (type?: string, theme?: any) => {
  switch (type) {
    case "default":
      return "rgba(162, 162, 162, 0.38)";
    case "card":
      return "rgba(235, 235, 235, 0.583)";
    case "success":
      return "rgba(94, 255, 94, 0.678)";
    case "warning":
      return " rgb(247,178,23, 0.8)";
    case "error":
      return theme.colors.error;
    default:
      return "rgba(162, 162, 162, 0.38)";
  }
};

interface IProps {
  type?: string;
  position?: string;
  open?: boolean;
}
export const Alert = styled("div")<IProps>`
  display: ${(props) =>
    props.position === "snackBar" ? (props.open ? "block" : "none") : "block"};
  position: ${({ position }) => position === "snackBar" && "fixed"};
  right: ${({ position }) => position === "snackBar" && "20px"};
  bottom: ${({ position }) => position === "snackBar" && "20px"};
  background-color: ${({ type, theme }) => getAlertBg(type, theme)};
  color: #000;
  padding: 10px;
  border-radius: 5px;
  transition: all 2s;

  max-width: ${({ position }) => position === "snackBar" && "40%"};
  text-align: ${({ position }) => position === "snackBar" && "center"}; ;
`;
