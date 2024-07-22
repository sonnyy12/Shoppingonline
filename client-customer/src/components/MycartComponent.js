import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CartUtil from '../utils/CartUtil';
import axios from 'axios';
import withRouter from '../utils/withRouter';

class Mycart extends Component {
  static contextType = MyContext;

  lnkCheckoutClick = () => {
    if (window.confirm('ARE YOU SURE?')) {
      if (this.context.mycart.length > 0) {
        const total = CartUtil.getTotal(this.context.mycart);
        const items = this.context.mycart;
        const customer = this.context.customer;
        if (customer) {
          this.apiCheckout(total, items, customer);
        } else {
          this.props.navigate('/login');
        }
      } else {
        alert('Your cart is empty');
      }
    }
  };

  apiCheckout = (total, items, customer) => {
    const body = { total, items, customer };
    const config = { headers: { 'x-access-token': this.context.token } };
    axios.post('/api/customer/checkout', body, config).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
        this.context.setMycart([]);
        this.props.navigate('/home');
      } else {
        alert('SORRY BABY!');
      }
    });
  };

  lnkRemoveClick = (id) => {
    const mycart = this.context.mycart.filter(item => item.product._id !== id);
    this.context.setMycart(mycart);
  };

  render() {
    const mycart = this.context.mycart.length > 0 ? this.context.mycart.map((item, index) => (
      <tr key={item.product._id}>
        <td className="text-center align-middle">{index + 1}</td>
        <td className="text-center align-middle">
          <img src={"data:image/jpg;base64," + item.product.image} width="80px" className="hinhdaidien" alt="" />
        </td>
        <td className="text-center align-middle">{item.product.name}</td>
        <td className="text-center align-middle">{item.quantity}</td>
        <td className="text-center align-middle">{item.product.price}</td>
        <td className="text-center align-middle">{item.product.price * item.quantity}</td>
        <td className="text-center align-middle">
          <button onClick={() => this.lnkRemoveClick(item.product._id)} className="btn btn-danger btn-small">
            <i className="fa fa-trash" aria-hidden="true"></i> Remove
          </button>
        </td>
      </tr>
    )) : (
      <tr>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
        <td className="text-center align-middle"></td>
      </tr>
    );
    
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container mt-4">
          <div id="thongbao" className="alert alert-danger d-none face" role="alert"></div>

          <h1 className="text-center">Giỏ hàng</h1>
          <div className="row justify-content-center">
            <div className="col col-md-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mycart}
                  {this.context.mycart.length > 0 && (
                    <tr>
                      <td colSpan="6" style={{paddingLeft:"30px"}} className="text-right">Total: {CartUtil.getTotal(this.context.mycart)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {this.context.mycart.length > 0 && (
                <button style={{marginLeft:"30px"}} onClick={this.lnkCheckoutClick} className="btn btn-primary btn-small">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;CheckOut
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Mycart);
