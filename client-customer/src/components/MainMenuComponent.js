// src/MainMenu.js
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }

  componentDidMount() {
    this.apiGetCategories();
    // Lấy dữ liệu người dùng từ props.location
  }

  apiGetCategories = () => {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  };

  btnSearchClick = (e) => {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
  };

  static contextType = MyContext;

  lnkLogoutClick = () => {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  };
  btnLogout=(e)=>{
    this.props.navigate('/Intro');
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
  render() {
    const { categories, txtKeyword } = this.state;
    const cates = categories.map((item) => (
      <li key={item._id} className="menu">
        <Link to={'/product/category/' + item._id}>{item.name}</Link>
      </li>
    ));

    const { token, customer, mycart } = this.context;

    return (
      <div className="border-bottom">
        <div className="float-left">
          <div className="menu-logo">
            <img src='/vlu.jpg' width="100px" alt="logo" />
          </div>
          <ul className="menu">
            <li className="menu"><Link to='/home'>Home</Link></li>
            {cates}
            <li className="menu"><Link to='/gmap'>Gmap</Link></li>
          </ul>
        </div>
        <div className="float-right">
          <form className="search">
            <input
              id="search-bar"
              type="search"
              placeholder="Enter keyword"
              className="keyword"
              value={txtKeyword}
              onChange={(e) => this.setState({ txtKeyword: e.target.value })}
            />
            <input
              id="button-search"
              type="submit"
              value="SEARCH"
              onClick={this.btnSearchClick}
            />
          </form>
        </div>
        <div className="others">
        <span>
          <Link to="/myprofile">
            <img src="/user.png" width="15%"/>
          </Link>
        <a onClick={this.btnLogout}>Logout</a>
      </span>
      <ul>
        <li>
            <img src="/shoppingCart.png" alt="cart" />
            {mycart.length}
               <ul className="sub-menu">
                  <li>
                     <Link to="/mycart">
                        Cart
                     </Link>
                    </li>
                  <li>
                     <Link to="/myorders">Ordered</Link>
                  </li>
              </ul>
            
        </li>
      </ul>

        </div>
      </div>
    );
  }
}

export default withRouter(MainMenu);
