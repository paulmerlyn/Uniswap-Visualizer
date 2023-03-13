import React, { Component } from "react"
import PropTypes from "prop-types"
import ErrorView from "../views/Error"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI rather than happy case children
    return { error: error }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorView />
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
}

export default ErrorBoundary
