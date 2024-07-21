import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import "./Login.css";
class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'transon',
      txtPassword: '123'
    };
  }
  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  render() {
    return (
      // <div className="align-center">
      //   <h2 className="text-center">CUSTOMER LOGIN</h2>
      //   <form>
      //     <table className="align-center">
      //       <tbody>
      //         <tr>
      //           <td>Username</td>
      //           <td><input type="text" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td>Password</td>
      //           <td><input type="password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td></td>
      //           <td><input type="submit" value="LOGIN" onClick={(e) => this.btnLoginClick(e)} /></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </form>
      // </div>
    <div className="screen-80">
      <div className="form-login">
        <div className="form-login-inside">
          <p style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Login</p>
          <form>
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              required
              type="text"
              name="txtUsername"
              id="username"
              placeholder="Tên đăng nhập"
              minLength="5"
              value={this.state.txtUsername}
              onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
            />
            <br />
            <label htmlFor="password">Mật khẩu:</label>
            <input
              required
              type="password"
              name="txtPassword"
              id="password"
              placeholder="Mật khẩu"
              minLength="10"
              value={this.state.txtPassword}
              onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
            />
            <br />
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={this.state.remember}
                onChange={this.handleInputChange}
                style={{ float: 'left' }}
              />
              <span>Ghi nhớ lần đăng nhập sau</span>
              <br />
              <button className="button-as" type="submit" onClick={(e) => this.btnLoginClick(e)}>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
    </div>
  </div>
  );
}
                
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);