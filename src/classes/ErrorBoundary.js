import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h2>Something went wrong</h2>
        </>
      )
    }
    return this.props.children
  }
}

export class Counter extends Component {
  state = {
    count: 0
  }

  setCount() {
    this.setState((state) => ({count: state.count++}));

  }

  render() {
    if (this.state.count >= 5) {
      throw new Error('I crushed');
    }
    return (
      <button type="button" onClick={() => this.setCount()}>{this.state.count}</button>
    )
  }
}
