import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true
      })
    }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 className="error-boundary" >Oops something went wrong:(</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary