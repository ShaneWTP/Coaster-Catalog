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

    // const coasterImg = {
    //   'width' : 'auto',
    //   'height' : '371px',
    //   'object-fit': 'cover',
    // }

    const inputStyle = {
      // 'background-color':'#468609'
      'margin': '10px'
    }

    const buttonStyle = {
      'color': 'white',
      'background-color': '#0A1E5F',
      'font-size': '18px'
    }

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (

        <div className="LoginForm container" >

          <br></br>
          {/* <h1>Welcome Back</h1> */}

          <div className="row w-100 no-gutters">
            <div className="col-sm-3 align-self-center">
              {/* <img style={coasterImg} src="images/roller-coaster-2538846_1280_1.jpg" /> */}
              <img className="card-img-top" src="images/roller-coaster-2538846_1280_1.jpg" height="372" width="400" alt="Roller Coaster at Hershey Park" />
            </div>

            <div className="col-sm-9">
              <div className="card">
                {/* <img className="card-img-top" src="images/roller-coaster-2538846_1280.jpg" alt="Card image cap"/>   */}
                <article className="card-body">
                  <h4 className="card-title mb-4 mt-1"> Sign In </h4>
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
                      <a className="float-right" href="/signup">Forgot?</a>
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
                        className="btn  "
                        style={buttonStyle}> Sign In  </button>
                    </div>
                  </form>
                </article>
              </div>
            </div>

            <div className="row w-100 no-gutters">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body bg-primary text-center text-white">
                    <br></br>
                    <br></br>
                    <h3> Not a member yet?</h3>
                    <br></br>
                    <a href="/signup" className=" btn btn-secondary text-white">Sign up!</a>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    
      
   
      )
    }
  }
}

export default LoginForm