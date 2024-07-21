import axios from 'axios';
import React, { Component } from 'react';
import "./Login.css"
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'transon',
      txtPassword: '123',
      txtName: 'TranSon',
      txtPhone: '0123456789',
      txtEmail: 'transon@gmail.com'
    };
  }
  render() {
    return (
      // <div className="align-center">
      //   <h2 className="text-center">SIGN-UP</h2>
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
      //           <td>Name</td>
      //           <td><input type="text" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td>Phone</td>
      //           <td><input type="tel" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td><input type="email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} /></td>
      //         </tr>
      //         <tr>
      //           <td></td>
      //           <td><input type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)} /></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </form>
      // </div>
      <div className="screen-80">
      <div className="form-signup">
        <div className="form-login-inside">
        <p style={{textAlign:"center",fontSize:20,fontWeight:"bold",paddingTop:10}}>Sign-up</p>
          <form>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              name="txtUsername"
              id="username"
              placeholder="username"
              value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              name="txtPassword"
              id="password"
              placeholder="password"
              value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }}
            />
            <br />
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              name="txtUsername"
              id="name"
              placeholder="Name"
              value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }}
            />
            <br />
            <label htmlFor="phone">Phone:</label>
            <input
              required
              type="number"
              name="txtUsername"
              id="phone"
              placeholder="Phone"
              value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }}
            />
            <br />
            <label htmlFor="Email">Email:</label>
            <input
              required
              type="text"
              name="txtUsername"
              id="email"
              placeholder="example@gmail.com"
              value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} 
            />
            <br />
            <div>
              <button className="button-as" type="submit" value="SIGN-UP" onClick={(e) => this.btnSignupClick(e)}>
               Sign-up
              </button>
            </div>
          </form>
        </div>
    </div>
  </div>
    );
  }
  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;
