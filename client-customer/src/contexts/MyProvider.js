import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      token: '',
      customer: null,
      mycart: [],
    };
  }

  setToken = (value) => {
    this.setState({ token: value });
  }

  setCustomer = (value) => {
    this.setState({ customer: value });
  }

  setMycart = (value) => {
    this.setState({ mycart: value });
  }

  render() {
    return (
      <MyContext.Provider value={{
        ...this.state,
        setToken: this.setToken,
        setCustomer: this.setCustomer,
        setMycart: this.setMycart
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
