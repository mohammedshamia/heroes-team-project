import React, { Component, ReactNode } from "react";
import { StyledErrorBoundary } from "./style";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <StyledErrorBoundary>
          <h1>Ooops!.. Something went wrong 😮</h1>
        </StyledErrorBoundary>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
