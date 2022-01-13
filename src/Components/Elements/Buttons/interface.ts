export interface ButtonProp {
  border?: string;
  color?: string;
  children?: string | React.ReactNode;
  height: string;
  width: string;
  onClick?: () => void;
  bold: boolean;
  backgroundColor?: string;
  fontSize?: string;
  hover?: boolean;
  padding?: string;
  margin?: string;
  className?: string;
  type?:"button" | "submit" | "reset" | undefined;
  onMouseEnter?: () => void
  onMouseLeave?: () => void;
}