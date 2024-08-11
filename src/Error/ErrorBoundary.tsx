import * as React from "react";
import ErrorUI from "./ErrorUI";
import { ErrorBoundarys } from "../All_Interface/Error";

class ErrorBoundary extends React.PureComponent<ErrorBoundarys> {
  state = {
    hasError: false,
  };
  constructor(props: ErrorBoundarys) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: string) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error);
    console.log(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorUI />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
