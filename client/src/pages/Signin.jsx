import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      // what page to see on successful login
      redirectTo: null,

      // error handling for errors from the server
      error: null,
      errorInfo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');

    API.signin(this.state.username, this.state.password)
      .then(response => {
        console.log(response);
        if (!response.data.error) {

          console.log('youre good');
          // update App.js state to show user as loggedin
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          console.log('updated user');

          console.log('now populate the props with a getUser');
          // populate the props for the app
          this.props.getUser();

          // redirect page
          this.setState({
            redirectTo: '/'
          });

        } else {
          console.log('Error: ' + response.data.error);
        }

      }).catch(error => {
        //this is where we set the error for display
        console.log('login error: ')
        console.log(error);
        if (error.response) {
          console.log(error.response.data.error);
          this.setState({
            error: true,
            errorInfo: error.response.data.error,
            // this will reset the form to blank
            username: "",
            password: ""
          });

        }
      })
  }

  render() {


    const inputStyle = {
      // 'background-color':'#468609'
      'margin': '10px'
    }

    const buttonStyle = {
      'color': 'white',
      'background-color': '#0A1E5F',
      'font-size': '18px'
    }
    const shadowStyle = {
      'box-shadow': '0px -2px 0px #eee',
    }
    
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (

        <div className="LoginForm container" >
          <br></br>
          <br></br>
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <img src="images/roller-coaster-2538846_1280_1.jpg" height="372" width="auto" className="card-img rounded-0" alt="Fahrenheit" />
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <br></br>
                  <h3 className="card-title">Sign In</h3>

                  <form>
                    <div className="form-group">
                      <label className="float-left">Username</label>
                      <input className="form-control"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        style={inputStyle}
                      />
                    </div>

                    <div className="form-group">
                      <a className="float-right" href="/signup">Forgot password?</a>
                      <label className="float-left">Password</label>
                      <input className="form-control"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        style={inputStyle}
                      />
                    </div>

                    {this.state.error ? <h2>{this.state.errorInfo}</h2> : <br />}

                    <div className="form-group" >
                      <button onClick={this.handleSubmit}
                        disabled={!(this.state.username && this.state.password)}
                        type="submit"
                        className="btn"
                        style={buttonStyle}> Sign In  </button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
            <div className="row" >
              <div className="col-sm-12">
                <div className="card" style={shadowStyle}>
                  <div className="card-body text-center">
                    <h3>Want to become a member?</h3>
                    <a href="/signup" className="text-white btn">Sign up</a>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>





      )
    }
  }
}

export default LoginForm