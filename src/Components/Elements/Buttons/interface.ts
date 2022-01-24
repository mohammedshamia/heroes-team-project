export interface ButtonProp {
  border?: string;
  color?: string;
  children?: string | React.ReactNode;
  height?: string;
  width?: string;
  onClick?: any;
  bold?: boolean;
  backgroundColor?: string;
  fontSize?: string;
  hover?: boolean;
  colorHover?: string;
  backgroundColorHover?: string;
  padding?: string;
  margin?: string;
  className?: string;
  borderRaduies?: string;
  borderHover?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  form?: string;
  position?: string;
  top?: number;
  bottom?: string;
  right?: string;
}
